import React from 'react';
import { AppBar, Toolbar, Typography, Tabs, Box } from '@mui/material';
import sLogo from './logo.png';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';

const pages = ['Home', 'Scholarships', 'About'];
function Navbar2() {
  return (
    <React.Fragment>
        <AppBar sx={{ background: "#D9D9D9" }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <img src={sLogo} style={{ width: '50px', height: '50px', cursor: "pointer" }}/>
                <Typography color="#00456C" fontSize="18px" fontWeight="bold" style={{ cursor: "pointer" }}>
                    Scholar.ly
                </Typography>
                <Tabs sx={{ textTransform: 'none', marginLeft: '10px' }}>
                    <Tab label="Home" sx={{ color: '#00456C' }}/>
                    <Tab label="Scholarships" sx={{ color: '#00456C' }}/>
                    <Tab label="About" sx={{ color: '#00456C' }}/>
                </Tabs>
                <Button variant="text" sx={{ marginLeft: 'auto' }}>Login</Button>
                <Button variant="contained" sx={{ marginLeft: '10px' }}>Sign Up</Button>
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}

export default Navbar2