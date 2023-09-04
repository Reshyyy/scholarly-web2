import { Box, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar3 from '../../components/header/Navbar3';

const GrantorLogin = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    axios.defaults.withCredentials = true
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/grantor-login', values)
            .then(res => {
                if (res.data.Status === "Success") {
                    navigate('/grantor_home');
                } else {
                    console.log("Error");
                }
            })
            .catch(err => console.log(err));
    };
    return (
        <Grid>
            
            <Navbar3 />
            <Box style={{ background: '#016698' }}>
                <Typography color="white" textAlign='center' fontFamily='Roboto' fontSize='25px' fontStyle='normal' padding="16px">
                    Scholarship Provider Login
                </Typography>
            </Box>
            <Paper elevation={10} style={{ padding: '30px 20px', width: '300px', margin: '20px auto' }}>
                <Typography variant='h5'>Sign In</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField type="email" style={{ marginTop: '20px' }} fullWidth label="Email" onChange={e => setValues({ ...values, email: e.target.value })} />
                    <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" style={{ marginTop: '20px' }} fullWidth onChange={e => setValues({ ...values, password: e.target.value })} />
                    <Button type="submit" variant="contained" style={{ marginTop: '20px' }} fullWidth>Login</Button>
                    <Typography style={{ fontWeight: 'bold', textAlign: 'center', marginTop: '30px' }}>
                        Don't have an account yet? <Link to="/signup">Sign Up</Link>
                    </Typography>
                </form>
            </Paper>
        </Grid>
    );
};

export default GrantorLogin;
