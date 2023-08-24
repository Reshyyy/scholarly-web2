import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AdminSidebar from '../sidebar/AdminSidebar';
import AdminSidebar2 from '../sidebar/AdminSidebar2';

export default function AdminNavbar2() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

      const handleLogout = () => {
        navigate('/login'); 
      };
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{background: '#fff'}}>
            <IconButton
              size="large"
              edge="start"
              color="#000"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer("left", true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="#000" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
              Admin Panel
            </Typography>
            <Button onClick={handleLogout} variant="text" sx={{color:'#000'}} >Logout</Button>
          </Toolbar>
        </AppBar>
        <AdminSidebar2 state={state} setState={setState} toggleDrawer={toggleDrawer} />
      </Box>
    );
  }