import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Paper, Typography, Container, Box } from '@mui/material';
import axios from 'axios';

const ViewDetails = () => {
    const { id } = useParams();
    const [scholarshipDetails, setScholarshipDetails] = useState({});
  
    useEffect(() => {
        const fetchScholarshipDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/api/scholarships/${id}`);
                console.log('API Response:', response.data);
                setScholarshipDetails(response.data);
            } catch (error) {
                console.error('Error fetching scholarship details:', error);
            }
        };
        fetchScholarshipDetails();
    }, [id]);
    
    
    return (
        <Container>
            {scholarshipDetails && (
                <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                    <Typography variant="h5" gutterBottom>
                        {scholarshipDetails.scholarship_name}
                    </Typography>
                    <Typography variant="subtitle1">
                        Provider: {scholarshipDetails.provider}
                    </Typography>
                    <Typography variant="subtitle1">
                        Category: {scholarshipDetails.category}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Description: {scholarshipDetails.description}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Eligibility: {scholarshipDetails.eligibility}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Location: {scholarshipDetails.location}
                    </Typography>
                    <Typography variant="subtitle1">
                        Amount: {scholarshipDetails.amount}
                    </Typography>
                    <Box display="flex" justifyContent="center" marginTop="20px">
                        <Button variant="contained" color="primary">
                            Apply Scholarship
                        </Button>
                    </Box>
                </Paper>
            )}
        </Container>
    );
};

export default ViewDetails;
