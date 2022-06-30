import React from 'react'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { pink } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';

export default function MapItem({ dataList, title, index, removeList, addBookmark }) {
  return (
    <Box>
      <Box>
        <Typography variant="h3" align="center" >
          {title}
        </Typography>
      </Box>
      {dataList && dataList.map((item, i) => (
        <Box key={i} sx={{ p: 3, opacity: '1' }}>
          <Box>
            <Typography>
              {item}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <iframe src={item} style={{ width: '50%' }} title={item} />
            <Stack>
              <Box hidden={index === "2"}>
                <IconButton id={item} onClick={(e) => { addBookmark(e.currentTarget.id, dataList) }}>
                  <BookmarkIcon sx={{ color: pink[500] }} />
                </IconButton>
              </Box>
              <IconButton id={item} onClick={(e) => { removeList(e.currentTarget.id, index) }}>
                <DeleteIcon sx={{ color: pink[500] }} />
              </IconButton>
            </Stack>
          </Box>
        </Box>
      ))
      }
    </Box>
  )
}
