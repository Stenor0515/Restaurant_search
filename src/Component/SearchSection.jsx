import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';


export default function SearchComponent({ setRestaurantName }) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const list = await axios.get("https://api.airtable.com/v0/appjWdL7YgpxIxCKA/restaurants?maxRecords=50&view=Grid%20view",
        {
          headers: {
            Authorization: "Bearer keyfXgn8PL6pB3x32"
          }
        })
      const topFilm = []
      await list.data.records.map((item, i) => (
        topFilm[i] = item.fields
      ))
      console.log(topFilm)

      if (active) {
        setOptions(topFilm);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="asynchronous-demo"
      sx={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.Name === value.Name}
      getOptionLabel={(option) => option.Name}
      options={options}
      loading={loading}
      onChange={(e) => { setRestaurantName(e.target.innerHTML) }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Restaurants"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
