import { AppBar, Toolbar, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
import React from 'react'
import sLogo from './logo.png';

const GrantorNavbar = () => {
  return (
    <AppBar position="static" sx={{ background: "#FFF" }}>
      <Toolbar>
        <RouterLink to="#">
            <img src={sLogo} style={{ width: '50px', height: '50px', cursor: "pointer" }}/>
        </RouterLink>
        <Typography variant="h6" component={RouterLink} to="#" style={{ flexGrow: 1, textDecoration: 'none', color: '#00456C' }}>
            Scholar.ly
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default GrantorNavbar