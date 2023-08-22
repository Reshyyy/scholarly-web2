import React from 'react'
import { AppBar, Toolbar, Typography, Tabs, Tab, Button, IconButton, Menu, MenuItem } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import sLogo from './logo.png';

const ApplicantNavbar = () => {

  const navigate = useNavigate();
  const handleLogout = () => {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    navigate('/login');
  };

  return (
    <AppBar position="static" sx={{ background: "#D9D9D9" }}>

        <Toolbar>
        <RouterLink to="/applicant-home">
            <img src={sLogo} style={{ width: '50px', height: '50px', cursor: "pointer" }}/>
        </RouterLink>
        <Typography variant="h6" component={RouterLink} to="/applicant-home" style={{ flexGrow: 1, textDecoration: 'none', color: '#00456C' }}>
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
            <Tab label="Home" component={RouterLink} to="/applicant-home" sx={{ textTransform: 'none', fontWeight: 'bold', color: '#00456C' }} />
            <Tab label="Scholarships" component={RouterLink} to="/applicant-scholarships" sx={{ textTransform: 'none', fontWeight: 'bold', color: '#00456C'  }} />
            <Tab label="Recommendations" component={RouterLink} to="/recommendations" sx={{ textTransform: 'none', fontWeight: 'bold', color: '#00456C'  }} />
            <Tab label="About" component={RouterLink} to="/applicant-about" sx={{ textTransform: 'none', fontWeight: 'bold', color: '#00456C'  }} />
        </Tabs>
        <Button onClick={handleLogout} sx={{ textTransform: 'none', color: '#00456C', fontWeight: 'bold' }}>Logout</Button>
        </Toolbar>
    </AppBar>
  )
}

export default ApplicantNavbar