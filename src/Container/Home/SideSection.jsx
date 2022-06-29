import React from 'react'
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import Bookmarks from '@mui/icons-material/Bookmarks'

const drawerWidth = 240;

export default function SideSection() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
                <Bookmarks />
              </ListItemIcon>
              <ListItemText primary="Home Page" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem >
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
