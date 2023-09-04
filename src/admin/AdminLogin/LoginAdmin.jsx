import { Box, Button, Divider, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import AdminImage from './../../assets/adminlogin.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function LoginAdmin() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  axios.defaults.withCredentials = true
  const handleSubmit = (event) => {
      event.preventDefault();
      axios.post('http://localhost:8081/admin-login', values)
          .then(res => {
              console.log(res.data);
              if (res.data.Status === "Success") {
                  navigate('/admin-home');
              } else {
                  console.log("Error");
              }
          })
          .catch(err => console.log(err));
  };
  return (
    <Grid display="flex" alignItems="center" justifyContent="center" height="90vh">
      <Box sx={{background: '#fff', width: 'auto', height: '300px', borderRadius:'80px', padding: '70px', display: 'flex' }}>
        <img src={AdminImage} alt="Admin" style={{ width: '392px', height: '261px', marginRight: '20px' }} />
        <form onSubmit={handleSubmit}>
        <Typography variant="h5">Login as Admin</Typography>
        <TextField style={{marginTop: '20px', width: '300px'}} fullWidth label='Email' onChange={e => setValues({ ...values, email: e.target.value })} required/><br />
        <TextField id="outlined-password-input" type="password" style={{marginTop: '20px', width: '300px'}} label='Password' onChange={e => setValues({ ...values, password: e.target.value })} required/><br />
        <Button type='submit' variant='contained' style={{ marginTop: '20px', width: '300px' }} fullWidth>Login</Button>
        </form>
      </Box>
    </Grid>
  )
}

export default LoginAdmin