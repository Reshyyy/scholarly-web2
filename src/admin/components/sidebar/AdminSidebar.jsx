import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import DescriptionIcon from '@mui/icons-material/Description';

const AdminSidebar = () => {
  return (
    <Drawer variant="permanent">
      <List>
        <ListItem button component={Link} to="/admin-dashboard">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/user-management">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="User Management" />
        </ListItem>
        <ListItem button component={Link} to="/generate-reports">
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Generate Reports" />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default AdminSidebar