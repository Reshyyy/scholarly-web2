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
                    <Button
                      variant="outlined"
                      size="small"
                      style={{ marginRight: '5px' }}
                      onClick={() => handleEditClick(row)} // Call handleEditClick with the user data
                    >
                      Edit
                    </Button>
                    <Button variant="outlined" size="small" color="error">
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
    </div>
  );
};

export default AdminUserManagement;