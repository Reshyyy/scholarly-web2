import React, { useState } from 'react';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Navbar3 from '../../components/header/Navbar3';

const GrantorRegister2 = () => {
    const [values, setValues] = useState({
        organization_name: '',
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/grantor-register2', values)
            .then(res => {
                if (res.data.Status === 'Success') {
                    navigate('/login');
                } else {
                    alert("Registration failed. Please try again.");
                }
            })
            .catch(err => {
                console.log(err);
                alert("An error occurred during registration. Please try again later.");
            });
    };

    return (
        <div>
            <Navbar3 />
            <Box style={{ background: '#016698' }}>
                <Typography color="white" textAlign='center' fontFamily='Roboto' fontSize='25px' fontStyle='normal' padding="16px">
                    Scholarship Provider Registration
                </Typography>
            </Box>
            <Container>
                <form onSubmit={handleSubmit}>
                    <Grid style={{ background: '#fff', paddingTop: '30px' }}>
                        <Box component="div" height='auto' sx={{ margin: '10px 60px'}}>
                            <TextField
                                required
                                label="Organization Name"
                                fullWidth
                                style={{ marginBottom: '20px' }}
                                onChange={e => setValues({...values, organization_name: e.target.value})}
                            />
                            <TextField
                                required
                                label="Firstname"
                                fullWidth
                                style={{ marginBottom: '20px' }}
                                onChange={e => setValues({...values, firstname: e.target.value})}
                            />
                            <TextField
                                required
                                label="Lastname"
                                fullWidth
                                style={{ marginBottom: '20px' }}
                                onChange={e => setValues({...values, lastname: e.target.value})}
                            />
                            <TextField
                                required
                                label="Contact Email"
                                fullWidth
                                style={{ marginBottom: '20px' }}
                                onChange={e => setValues({...values, email: e.target.value})}
                            />
                            <TextField
                                label="Password"
                                id="outlined-password-input"
                                type="password"
                                variant="outlined"
                                fullWidth
                                style={{ marginBottom: '20px' }}
                                onChange={e => setValues({...values, password: e.target.value})}
                            />
                            <Button type='submit' variant='contained' style={{ margin: '30px auto 50px', width: '400px', display: 'flex', alignItems: 'center' }}>
                                Submit
                            </Button>
                        </Box>
                    </Grid>
                </form>
            </Container>
        </div>
    );
};

export default GrantorRegister2;
