import React, { useState } from 'react';
import { Button, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { Grid, Paper, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

function SignUp2() {
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
  return (
    <Grid>
        <Paper elevation={10} style={{padding: '30px 20px', width: '470px', margin: '20px auto'}}>
            <h2>Sign Up</h2>
        <form>
            <Grid >
            <TextField label='First Name' required/>
            <TextField style={{marginLeft: '24px'}} label='Last Name' required/>
            <TextField style={{marginTop: '20px'}} fullWidth label='Email' required/>
            <TextField style={{marginTop: '20px'}} fullWidth label='Password' required/>
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
