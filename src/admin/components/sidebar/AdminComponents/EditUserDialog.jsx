import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
  Snackbar,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';

const EditUserDialog = ({ open, handleClose, user }) => {
  const [editedUser, setEditedUser] = useState(user);
  const [successSnackbarOpen, setSuccessSnackbarOpen] = useState(false); 
  const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSave = () => {
    axios.put(`http://localhost:8081/api/update-user/${editedUser.id}`, editedUser)
      .then((response) => {
        setSuccessSnackbarOpen(true);
        handleClose();
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        setErrorSnackbarOpen(true);
        setErrorMessage('Error updating user. Please try again.');
      });
  };

  const handleSnackbarClose = () => {
    setSuccessSnackbarOpen(false);
    setErrorSnackbarOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit User</DialogTitle>
      <DialogContent>
        {/* Place your input fields for editing user data here */}
        <TextField
          name="firstname"
          label="First Name"
          value={editedUser.firstname}
          onChange={handleFieldChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="lastname"
          label="Last Name"
          value={editedUser.lastname}
          onChange={handleFieldChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="email"
          label="Email"
          value={editedUser.email}
          onChange={handleFieldChange}
          fullWidth
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>

      {/* Snackbar for success feedback */}
      <Snackbar
        open={successSnackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert elevation={6} variant="filled" onClose={handleSnackbarClose} severity="success">
          User updated successfully!
        </MuiAlert>
      </Snackbar>

      {/* Snackbar for error feedback */}
      <Snackbar
        open={errorSnackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert elevation={6} variant="filled" onClose={handleSnackbarClose} severity="error">
          {errorMessage}
        </MuiAlert>
      </Snackbar>
    </Dialog>
  );
};

export default EditUserDialog;
