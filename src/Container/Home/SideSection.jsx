import React from 'react'
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material'
import Bookmarks from '@mui/icons-material/Bookmarks'
import HomeIcon from '@mui/icons-material/Home'

const drawerWidth = 240

export default function SideSection({ setStep }) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor: 'transparent' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <ListItem onClick={() => setStep(1)}>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home Page" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setStep(2)}>
            <ListItemButton>
              <ListItemIcon>
                <Bookmarks />
              </ListItemIcon>
              <ListItemText primary="Bookmarked Restaurants " />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  )
}
