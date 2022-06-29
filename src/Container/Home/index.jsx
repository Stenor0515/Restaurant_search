import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MainSection from './MainSection';
import SideSection from './SideSection';
import TopBarSection from './TopBarSection';

export default function Home() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <TopBarSection />
      <SideSection />
      <MainSection />
    </Box>
  );
}
