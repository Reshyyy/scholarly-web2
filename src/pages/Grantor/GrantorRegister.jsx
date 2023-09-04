import { Box, Button, Container, FormGroup, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react';
import Navbar3 from '../../components/header/Navbar3';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from "@mui/material/Stack";
import axios from 'axios';

function GrantorRegister() {
  const [formData, setFormData] = useState({
    organization_name: '',
    contact_name: '',
    contact_email: '',
    phone_number: '',
    organization_type: '',
    mission_statement: '',
    logo_image : '',
    website_url: '',
    address: '',
    username: '',
    password: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/grantor-register', formData);
      console.log(response.data);
      setFormData({
        organization_name: '',
        contact_name: '',
        contact_email: '',
        phone_number: '',
        organization_type: '',
        mission_statement: '',
        logo_image: '',
        website_url: '',
        address: '',
        username: '',
        password: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const [organizationType, setOrganizationType] = useState('');

  const handleOrganizationTypeChange = (event) => {
    setOrganizationType(event.target.value);
  };

  const [filePreview, setFilePreview] = useState(null);

  const handleFileChange = (files) => {
    if (files && files.length > 0) {
      const selectedFile = files[0];
      setFormData({
        ...formData,
        logo_image: selectedFile, // Store the file object in the form data
      });
  
      const reader = new FileReader();
      reader.onload = (e) => {
        setFilePreview(e.target.result); // Set the preview URL for display
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <Grid>
      <Navbar3 />
        <Box style={{ background: '#016698' }}>
        <Typography color="white" textAlign='center' fontFamily='Roboto' fontSize='25px' fontStyle='normal' padding="16px">
            Scholarship Provider Registration
        </Typography>
        </Box>
        <Container>
            <Grid style={{ background: '#fff' }}>
                <Box component="form" height='auto' sx={{ margin: '0 60px'}}>
                
                <FormGroup sx={{ paddingTop: '30px' }}>
                <TextField
                required
                label="Organization Name"
                fullWidth
                style={{ marginBottom: '20px' }}
                />
                <TextField
                required
                label="Contact Name"
                fullWidth
                style={{ marginBottom: '20px' }}
                />
                <TextField
                required
                label="Contact Email"
                fullWidth
                style={{ marginBottom: '20px' }}
                />
                <TextField
                required
                label="Phone Number"
                fullWidth
                style={{ marginBottom: '20px' }}
                />
                <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth style={{ marginBottom: '20px' }}>
                  <InputLabel id="organization-type-label">
                    Organization Type
                  </InputLabel>
                  <Select
                    labelId="organization-type-label"
                    id="organization-type"
                    value={organizationType}
                    label="Organization Type"
                    onChange={handleOrganizationTypeChange}
                  >
                    <MenuItem value="Individual">Individual</MenuItem>
                    <MenuItem value="Institution">Institution</MenuItem>
                  </Select>
                </FormControl>
                </Box>
                <TextField
                label="Mission Statement"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                style={{ marginBottom: '20px' }}
                />
                <Stack direction="row" alignItems="center" spacing={2} style={{ marginBottom: '20px' }}>
                  <Typography sx={{ fontStyle: 'italic', color: 'gray' }}>Logo of Organization</Typography>
                  <Button variant="contained" component="label">
                    Select File
                    <input hidden accept="image/*" type="file" onChange={(event) => handleFileChange(event.target.files)} />
                  </Button>
                  {filePreview && (
                    <img src={filePreview} alt="Selected Logo" style={{ maxWidth: '100px' }} />
                  )}
                </Stack>
                <TextField
                label="Website URL"
                multiline
                variant="outlined"
                fullWidth
                style={{ marginBottom: '20px' }}
                />
                <TextField
                label="Address"
                multiline
                variant="outlined"
                fullWidth
                style={{ marginBottom: '20px' }}
                />
                <TextField
                label="Username"
                multiline
                variant="outlined"
                fullWidth
                style={{ marginBottom: '20px' }}
                />
                <TextField
                label="Password"
                id="outlined-password-input"
                type="password"
                variant="outlined"
                fullWidth
                style={{ marginBottom: '20px' }}
                />
                <Button onClick={handleSubmit} type='submit' variant='contained' style={{ margin: '30px auto', width: '400px', marginBottom: '100px' }}>Submit</Button>
                </FormGroup>
                </Box>
            </Grid>
        </Container>
    </Grid>
  )
}

export default GrantorRegister