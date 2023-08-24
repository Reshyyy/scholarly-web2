import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import GrantorNavbar from '../../../header/GrantorNavbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddScholarship = () => {
    const [values, setValues] = useState({
        scholarship_name: '',
        provider: '',
        category: '',
        description: '',
        eligibility: '',
        location: '',
        amount: '',
    });
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/add_scholarship', values)
            .then(res => {
                if (res.data.Status === 'Success') {
                    navigate('/grantor_manage_scholarship');
                } else {
                    alert("Add Scholarship Failed. Please try again.");
                }
            })
            .catch(err => {
                console.log(err);
                alert("An error occurred during adding of scholarship. Please try again later.");
            });
    };

    return (
        <>
            <GrantorNavbar />
            <Container>
                <Box mt={2}>
                    <Box style={{ background: '#016698' }}>
                        <Typography
                            color="white"
                            textAlign="center"
                            fontFamily="Roboto"
                            fontSize="25px"
                            fontStyle="normal"
                            padding="16px"
                        >
                            Add Scholarship
                        </Typography>
                    </Box>
                    <Box style={{ background: '#fff' }}>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={0} mt={0}>
                                <Grid item xs={12} m={3}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="Scholarship Name"
                                        onChange={e => setValues({...values, scholarship_name: e.target.value})}
                                        style={{ marginTop: '0px' }}
                                    />
                                    <TextField
                                        required
                                        fullWidth
                                        label="Provider"
                                        onChange={e => setValues({...values, provider: e.target.value})}
                                        style={{ marginTop: '10px' }}
                                    />
                                    <TextField
                                        required
                                        fullWidth
                                        label="Category"
                                        onChange={e => setValues({...values, category: e.target.value})}
                                        style={{ marginTop: '10px' }}
                                    />
                                    <TextField
                                        sx={{ mt: '10px' }}
                                        fullWidth
                                        multiline
                                        rows={4}
                                        label="Description"
                                        onChange={e => setValues({...values, description: e.target.value})}
                                        placeholder="Enter scholarship description..."
                                    />
                                    <TextField
                                        sx={{ mt: '10px' }}
                                        fullWidth
                                        multiline
                                        rows={4}
                                        label="Eligibility"
                                        onChange={e => setValues({...values, eligibility: e.target.value})}
                                        placeholder="Enter Eligibility description..."
                                    />
                                    <TextField
                                        required
                                        fullWidth
                                        label="Location"
                                        onChange={e => setValues({...values, location: e.target.value})}
                                        style={{ marginTop: '10px' }}
                                    />
                                    <TextField
                                        required
                                        fullWidth
                                        label="Amount"
                                        onChange={e => setValues({...values, amount: e.target.value})}
                                        style={{ marginTop: '10px' }}
                                    />
                                </Grid>
                                <Grid item xs={12} m={3}>
                                    <Button type="submit" variant="contained" color="primary">
                                        Save Scholarship
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default AddScholarship;
