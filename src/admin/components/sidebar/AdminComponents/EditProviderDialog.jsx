import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Snackbar,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';

const EditProviderDialog = ({ open, handleClose, provider }) => {
  const [editedProvider, setEditedProvider] = useState(provider);
  const [successSnackbarOpen, setSuccessSnackbarOpen] = useState(false); 
  const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setEditedProvider((prevProvider) => ({
      ...prevProvider,
      [name]: value,
    }));
  };

  const handleSave = () => {
    axios.put(`http://localhost:8081/api/update-user/${editedProvider.id}`, editedProvider)
      .then((response) => {
        setSuccessSnackbarOpen(true);
        handleClose();
        window.location.reload(); // Refresh the page
      })
      .catch((error) => {
        console.error(error);
        setErrorSnackbarOpen(true);
        setErrorMessage('Error updating provider. Please try again.');
      });
  };

  const handleSnackbarClose = () => {
    setSuccessSnackbarOpen(false);
    setErrorSnackbarOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Provider</DialogTitle>
      <DialogContent>
        {/* Place your input fields for editing provider data here */}
        <TextField
          name="organization_name"
          label="Organization Name"
          value={editedProvider.organization_name}
          onChange={handleFieldChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="firstname"
          label="First Name"
          value={editedProvider.firstname}
          onChange={handleFieldChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="lastname"
          label="Last Name"
          value={editedProvider.lastname}
          onChange={handleFieldChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="email"
          label="Email"
          value={editedProvider.email}
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
          Provider updated successfully!
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

export default EditProviderDialog;
