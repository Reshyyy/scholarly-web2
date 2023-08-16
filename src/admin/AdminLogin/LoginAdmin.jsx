import { Box, Button, Divider, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import AdminImage from './../../assets/adminlogin.png'

function LoginAdmin() {
  return (
    <Grid display="flex" alignItems="center" justifyContent="center" height="90vh">
      <Box sx={{background: '#fff', width: 'auto', height: '300px', borderRadius:'80px', padding: '70px', display: 'flex' }}>
        <img src={AdminImage} alt="Admin" style={{ width: '392px', height: '261px', marginRight: '20px' }} />
        
        <form>
        <Typography variant="h5">Login as Admin</Typography>
        <TextField style={{marginTop: '20px', width: '300px'}} fullWidth label='Email' required/><br />
        <TextField style={{marginTop: '20px', width: '300px'}} label='Password' required/><br />
        <Button type='submit' variant='contained' style={{ marginTop: '20px', width: '300px' }} fullWidth>Login</Button>
        </form>
      </Box>
    </Grid>
  )
}

export default LoginAdmin