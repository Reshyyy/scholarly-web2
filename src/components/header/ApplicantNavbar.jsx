import React from 'react'
import { AppBar, Toolbar, Typography, Tabs, Tab, Button, IconButton, Menu, MenuItem, Box, Tooltip, Avatar } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import sLogo from './logo.png';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const ApplicantNavbar = () => {

  const navigate = useNavigate();
  const handleLogout = () => {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    navigate('/login');
  };

  // Account Menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <AccountCircleOutlinedIcon sx={{ width: 40, height: 40, color: '#00456C' }}></AccountCircleOutlinedIcon>
              
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleClose}>
            <Avatar /> My Profile
          </MenuItem>
        </Menu>
        <Button onClick={handleLogout} sx={{ textTransform: 'none', color: '#00456C', fontWeight: 'bold' }}>Logout</Button>
        </Toolbar>
    </AppBar>
  )
}

export default ApplicantNavbar