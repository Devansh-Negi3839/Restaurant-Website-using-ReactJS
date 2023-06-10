import React from 'react'
import { useState } from 'react';


import { AppBar, Box, Toolbar, Typography, IconButton, Drawer, Divider } from '@mui/material'
// import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import { Link,NavLink } from 'react-router-dom'
import '../../styles/HeaderStyles.css'

import Logo from "../../images/logo.svg"

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  //handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>

      <Typography 
      color={'goldenrod'} 
      variant='h6' 
      component={'div'} 
      sx={{ flexGrow: 1,my:2 }}>
        <img src={Logo}  alt='Restaurant Icon' height={'70'} width={'250'}/>
      </Typography>

      <Divider />

      <ul className='mobile-navigation'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/menu'>Menu</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
      </ul>
    </Box>
  );



  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{ bgcolor: 'black' }}>
          <Toolbar>

            <IconButton
              color='#inherit'
              aria-label='open drawer'
              edge="start"
              onClick={handleDrawerToggle}
              sx={
                { mr: 2, display: { sm: 'none' } ,
                color: 'white', // Set the color to white
                backgroundColor: 'black', // Set the background color to black
                borderRadius: '50%', // Optionally, set the border radius
            }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              color={'goldenrod'}
              variant='h6'
              component={'div'}
              sx={{ flexGrow: 1 }}
            >
              {/* <FastfoodIcon />
              My Restaurant */}
              <img src={Logo}  alt='Restaurant Icon' height={'70'} width={'250'}/>
            </Typography >

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

              <ul className='navigation-menu'>
                <li>
                  <NavLink activeClassNme="active" to='/'>Home</NavLink>
                </li>
                <li>
                  <NavLink to='/menu'>Menu</NavLink>
                </li>
                <li>
                  <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                  <NavLink to='/contact'>Contact</NavLink>
                </li>
              </ul>

            </Box>

          </Toolbar>
        </AppBar>

        <Box component={'nav'}>
          <Drawer
            variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: 'block', sm: 'none' },
              "& .MuiDrawer-paper": {
                boxSizing: 'border-box',
                width: '240px',
              }
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
        <Toolbar />
        </Box>
      </Box>
    </>
  )
}

export default Header