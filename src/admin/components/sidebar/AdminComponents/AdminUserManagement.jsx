import React, { useState, useEffect } from 'react';
import AdminNavbar2 from '../../header/AdminNavbar2';
import {
  Box,
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import axios from 'axios';
import EditUserDialog from './EditUserDialog';
import EditProviderDialog from './EditProviderDialog';

const AdminUserManagement = () => {
  const [selectedRole, setSelectedRole] = useState('applicants');
  const [tableData, setTableData] = useState([]);
  

  useEffect(() => {
    fetchData(selectedRole);
  }, [selectedRole]);

  const fetchData = async (role) => {
    try {
      const response = await axios.get(`http://localhost:8081/api/${role}`);
      setTableData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleRoleButtonClick = (role) => {
    setSelectedRole(role);
  };

  const getColumnsByRole = (role) => {
    if (role === 'applicants') {
      return [
        { field: 'id', headerName: 'Applicant ID', width: 100 },
        { field: 'firstname', headerName: 'Firstname', width: 150 },
        { field: 'lastname', headerName: 'Lastname', width: 150 },
        { field: 'email', headerName: 'Email', width: 200 },
      ];
    } else if (role === 'provider') {
      return [
        { field: 'id', headerName: 'Grantor ID', width: 100 },
        { field: 'organization_name', headerName: 'Organization Name', width: 200 },
        { field: 'firstname', headerName: 'Firstname', width: 150 },
        { field: 'lastname', headerName: 'Lastname', width: 150 },
        { field: 'email', headerName: 'Email', width: 200 },
      ];
    }
    return [];
  };

  const columns = getColumnsByRole(selectedRole);

  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setEditDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
    setSelectedUser(null);
  };

  const handleDeleteClick = (userId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
  
    if (confirmDelete) {
      axios.delete(`http://localhost:8081/api/users/${userId}`)
        .then(() => {
          // Handle success
          console.log('User deleted successfully');
          // Remove the deleted user from the tableData state
          setTableData((prevTableData) => prevTableData.filter((user) => user.id !== userId));
        })
        .catch((error) => {
          // Handle error
          console.error('Error deleting user:', error);
        });
    }
  };

  const [editProviderDialogOpen, setEditProviderDialogOpen] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);

  const handleEditProviderClick = (provider) => {
    setSelectedProvider(provider);
    setEditProviderDialogOpen(true);
  };
  
  const handleEditProviderDialogClose = () => {
    setEditProviderDialogOpen(false);
    setSelectedProvider(null);
  };

  const handleProviderClick = (provider) => {
    setSelectedProvider(provider);
    setEditProviderDialogOpen(true);
  };
  

  return (
    <div>
      <AdminNavbar2 />

      <Container>
        <Box sx={{ height: '100vh', bgcolor: 'white', mt: 2, borderRadius: 5 }}>
          <Box display="flex" alignItems="center" marginLeft="50px" padding="30px">
            <Typography>Role:</Typography>
            <Button
              variant="outlined"
              style={{ padding: '10px', textAlign: 'center', marginLeft: '10px' }}
              onClick={() => handleRoleButtonClick('applicants')}
            >
              Applicants
            </Button>
            <Button
              variant="outlined"
              style={{ padding: '10px', textAlign: 'center', marginLeft: '10px' }}
              onClick={() => handleRoleButtonClick('provider')}
            >
              Provider
            </Button>
          </Box>

          <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.field}>{column.headerName}</TableCell>
              ))}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.id}>
                {columns.map((column) => (
                  <TableCell key={column.field}>{row[column.field]}</TableCell>
                ))}
                <TableCell>
                  {selectedRole === 'applicants' ? (
                    <Button
                      variant="outlined"
                      size="small"
                      style={{ marginRight: '5px' }}
                      onClick={() => handleEditClick(row)}
                    >
                      Edit
                    </Button>
                  ) : (
                    <Button
                      variant="outlined"
                      size="small"
                      style={{ marginRight: '5px' }}
                      onClick={() => handleProviderClick(row)}
                    >
                      Edit
                    </Button>
                  )}
                  <Button
                    variant="outlined"
                    size="small"
                    color="error"
                    onClick={() => handleDeleteClick(row.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </Box>
      </Container>
      {/* Edit User Dialog */}
      {selectedUser && (
        <EditUserDialog
          open={editDialogOpen}
          handleClose={handleEditDialogClose}
          user={selectedUser}
        />
      )}
      {selectedProvider && (
        <EditProviderDialog
          open={editProviderDialogOpen}
          handleClose={handleEditProviderDialogClose}
          provider={selectedProvider}
        />
      )}
    </div>
  );
};

export default AdminUserManagement;
