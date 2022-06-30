import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import LogoutIcon from '@mui/icons-material/Logout'
import { Stack } from '@mui/material'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export default function TopBarSection() {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const navigate = useNavigate()

  const remove = () => {
    removeCookie('Name')
    removeCookie('Password')
    navigate('/login')
  }

  const LogOut = styled(LogoutIcon)`
    cursor: pointer;
  `

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Stack direction={'row'}>
          <RestaurantIcon sx={{ fontSize: '200%', marginX: '10px' }} />
          <Typography variant="h6" noWrap component="div">
            World of Restaurants
          </Typography>
        </Stack>
        <LogOut onClick={() => remove()} sx={{ fontSize: '200%', marginX: '10px' }} className={{}} />
      </Toolbar>
    </AppBar>
  )
}
