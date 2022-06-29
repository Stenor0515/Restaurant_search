import React from 'react'
import { Box, Button, Divider, Stack, Toolbar } from '@mui/material'
import SearchSection from '../../Component/SearchSection';

function MainSection() {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Stack spacing={2} direction={"row"}>
        <SearchSection />
        <Button variant="contained">Add</Button>
      </Stack>
      <Divider sx={{ marginTop: 2 }} />
    </Box>
  )
}

export default MainSection