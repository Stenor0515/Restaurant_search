import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {
  const [cookies, setCookie] = useCookies(['user'])
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      const data = new FormData(event.currentTarget)
      let name = data.get('name')
      let pwd = data.get('password')
      if (name === '' || pwd === '') {
        alert('Please Fill in all input')
        return
      }
      const result = await axios.get(
        'https://api.airtable.com/v0/appjWdL7YgpxIxCKA/credenitals?maxRecords=3&view=Grid%20view',
        {
          headers: { Authorization: 'Bearer keyfXgn8PL6pB3x32' },
        }
      )
      let set = false
      // eslint-disable-next-line array-callback-return
      await result.data.records.map((item, index) => {
        if (item.fields.username === name && item.fields.password === pwd) {
          setCookie('Name', data.get('name'), { path: '*' })
          setCookie('Password', data.get('password'), { path: '*' })
          set = true
        }
      })

      if (set) {
        navigate('/')
      } else {
        alert('Invalid username and password')
      }
    } catch (error) {
      alert(error.message)
    }
  }

  React.useEffect(() => {
    console.log(cookies)
    if (cookies.Name) {
      navigate('/')
    }
  }, [cookies, navigate])

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="name"
            autoComplete="User Names"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
