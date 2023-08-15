import React from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Button, IconButton, Menu, MenuItem } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import sLogo from './logo.png';

function Navbar3() {
  return (
    <AppBar position="static" sx={{ background: "#D9D9D9" }}>
      <Toolbar>
        <RouterLink to="/">
            <img src={sLogo} style={{ width: '50px', height: '50px', cursor: "pointer" }}/>
        </RouterLink>
        <Typography variant="h6" component={RouterLink} to="/" style={{ flexGrow: 1, textDecoration: 'none', color: '#00456C' }}>
            Scholar.ly
        </Typography>
        <Tabs value={false} sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            flexGrow: 1,
          }}
          textDecoration="none"
          >
          <Tab label="Home" component={RouterLink} to="/" sx={{ textTransform: 'none', fontWeight: 'bold', color: '#00456C' }} />
          <Tab label="Scholarships" component={RouterLink} to="/scholarships" sx={{ textTransform: 'none', fontWeight: 'bold', color: '#00456C'  }} />
          <Tab label="About" component={RouterLink} to="/about" sx={{ textTransform: 'none', fontWeight: 'bold', color: '#00456C'  }} />
        </Tabs>
        <Button component={RouterLink} to="/login" sx={{ textTransform: 'none', color: '#00456C', fontWeight: 'bold' }}>Login</Button>
        <Button variant="contained" style={{ backgroundColor: '#40B72D', borderRadius: 30, fontWeight: 'bold', textTransform: 'none', color: '#000' }} component={RouterLink} to="/signup">Sign Up</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar3;
