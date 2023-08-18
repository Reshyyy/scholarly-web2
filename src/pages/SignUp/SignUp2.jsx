import React, { useState } from 'react';
import { Button, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { Grid, Paper, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

function SignUp2() {
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/signup', values)
            .then(res => {
                if(res.data.Status === "Success"){
                    navigate('/login')
                }else{
                    alert("Error");
                }
            })
            .catch(err => console.log(err));
    };

    const [checked, setChecked] = useState(false);
    const handleChange = (event) => {
        setChecked(event.target.checked); 
    };

  return (
    <Grid>
        <Paper elevation={10} style={{padding: '30px 20px', width: '470px', margin: '20px auto'}}>
            <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
            <Grid >
            <TextField label='First Name' onChange={e => setValues({...values, firstname: e.target.value})} required/>
            <TextField style={{marginLeft: '24px'}} label='Last Name' onChange={e => setValues({...values, lastname: e.target.value})} required/>
            <TextField type={"email"} style={{marginTop: '20px'}} fullWidth label='Email' onChange={e => setValues({...values, email: e.target.value})} required/>
            <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" style={{marginTop: '20px'}} fullWidth onChange={e => setValues({...values, password: e.target.value})} required/>
            <FormControlLabel
                control={<Checkbox checked={checked} onChange={handleChange} />}
                label="Show Password"
            /><br />
            <Button type='submit' variant='contained' style={{ marginTop: '20px' }} fullWidth>Sign Up</Button>
            <Typography style={{ fontWeight:'bold', textAlign: 'center', marginTop: '30px' }}>
                Already have an account? <Link to="/login">Login</Link>
            </Typography>
            <Typography style={{ fontWeight:'bold', textAlign: 'center', marginTop: '30px' }}>
                ARE YOU A GRANTOR? <Link to="/grantor-register">REGISTER HERE</Link>
            </Typography>
            </Grid>
        </form>
        
        </Paper>
    </Grid>
  );
}

export default SignUp2;
