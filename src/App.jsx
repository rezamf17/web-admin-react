
import './App.css';
import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
  Box,
} from '@mui/material'
import Home from './pages/home'
import FreeFire from './pages/FreeFire'
import Navigation from './components/navigation';
import { Routes, Route } from 'react-router-dom'
const drawerWidth = 240;

function App() {
  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
  );

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));
  const [open, setOpen] = useState(true);
  return (
    <div className="App">
      <Box sx={{ display: 'flex' }}>

        <Navigation />
        <Main open={open}>
          <DrawerHeader />
        <Routes>
          <Route path='/free-fire' element={<FreeFire />} />
          <Route path='/' element={<Home />} />
        </Routes>
          {/* <Home /> */}
        </Main>
      </Box>
    </div>
  );
}

export default App;
