import { Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login2() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
      setChecked(event.target.checked);
  };
  return (
    <Grid>
        <Paper elevation={10} style={{padding: '30px 20px', width: '300px', margin: '20px auto'}}>
            <h2>Sign In</h2>
        <form>
        <TextField style={{marginTop: '20px'}} fullWidth label='Email' required/>
        <TextField style={{marginTop: '20px'}} fullWidth label='Password' required/>
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