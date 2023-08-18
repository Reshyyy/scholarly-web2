import { Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login2() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate()
  const handleSubmit = (event) => {
      event.preventDefault();
      axios.post('http://localhost:8081/login', values)
          .then(res => {
              if(res.data.Status === "Success"){
                  navigate('/applicant-home')
              }else{
                  alert("Error");
              }
          })
          .catch(err => {
            console.log(err);
            alert("Error occurred during login.");
          });
  };
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
      setChecked(event.target.checked);
  };
  return (
    <Grid>
        <Paper elevation={10} style={{padding: '30px 20px', width: '300px', margin: '20px auto'}}>
            <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
        <TextField type={"email"} style={{marginTop: '20px'}} fullWidth label='Email' required onChange={e => setValues({...values, email: e.target.value})} />
        <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" style={{marginTop: '20px'}} fullWidth required onChange={e => setValues({...values, password: e.target.value})} />
        <Button type='submit' variant='contained' style={{ marginTop: '20px' }} fullWidth>Login</Button>
        <FormControlLabel
                control={<Checkbox checked={checked} onChange={handleChange} />}
                label="Show Password"
        />
        <Typography style={{ fontWeight:'bold', textAlign: 'center', marginTop: '30px' }}>
          Don't have an account yet? <Link to="/signup">Sign Up</Link>
        </Typography>
        </form>
        </Paper>
    </Grid>
  )
}

export default Login2