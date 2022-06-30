import React, { useEffect, useState } from 'react'
import { Box, Button, Divider, Stack, Toolbar } from '@mui/material'
import SearchSection from '../../Component/SearchSection'
import { useCookies } from 'react-cookie'
import MapItem from '../../Component/MapItem'

function MainSection({ index }) {
  const [restaurantName, setRestaurantName] = useState('')
  const [dataList, setDataList] = useState([''])
  const [bookmarkList, setBookmarkList] = useState([''])
  const [cookies, setCookie] = useCookies('restaurant-list')

  const addOne = (name) => {
    if (name === '') {
      alert('Please input the restaurant name')
      return
    }
    const addData = `https://datastudio.google.com/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC?params={"ds2.name2":"${name}"}`
    if (dataList?.includes(addData)) alert('Already added')
    else {
      setDataList((prev) => {
        let newData = [...prev, addData]
        setCookie('List', newData, { path: '*' })
        return newData
      })
    }
  }

  const addBookmark = (data, list) => {
    if (bookmarkList?.includes(data)) alert('Already added')
    else {
      let newList = list.filter((item, i) => item !== data)
      setDataList(newList)
      setCookie('List', newList, { path: '*' })
      setBookmarkList((prev) => {
        let newData = [...prev, data]
        setCookie('BookmarkList', newData, { path: '*' })
        return newData
      })
    }
  }

  const removeList = (data, index) => {
    if (index === '1') {
      setDataList((prev) => {
        let newData = prev.filter((item, i) => item !== data)
        setCookie('List', newData, { path: '*' })
        return newData
      })
    } else {
      setBookmarkList((prev) => {
        let newData = prev.filter((item, i) => item !== data)
        setCookie('BookmarkList', newData, { path: '*' })
        return newData
      })
    }
  }

  useEffect(() => {
    setDataList(cookies.List ? cookies.List : '')
    setBookmarkList(cookies.BookmarkList ? cookies.BookmarkList : '')
  }, [])
  console.log(restaurantName)
  return (
    <Box component="main" sx={{ width: '100%' }}>
      <Toolbar />
      <Box hidden={index !== 1} sx={{ p: 3 }}>
        <Stack spacing={2} direction={'row'}>
          <SearchSection setRestaurantName={setRestaurantName} />
          <Button variant="contained" onClick={() => addOne(restaurantName)}>
            Add
          </Button>
        </Stack>
      </Box>
      <Divider sx={{ p: 1, opacity: '0.7' }} />
      <Box hidden={index !== 1}>
        <MapItem dataList={dataList} title="" index="1" removeList={removeList} addBookmark={addBookmark} />
      </Box>
      <Box hidden={index !== 2}>
        <MapItem dataList={bookmarkList} title="Bookmarked List" index="2" removeList={removeList} />
      </Box>
    </Box>
  )
}

export default MainSection
