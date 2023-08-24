import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Paper, Typography, Button, Container, Box } from '@mui/material';
import axios from 'axios';
import ApplicantNavbar from './../../components/header/ApplicantNavbar'


const ApplicantScholarships = () => {
  const [scholarships, setScholarships] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/data');
      setScholarships(response.data);
    } catch (error) {
      console.error('Error fetching scholarship data:', error);
    }
  };

  return (
    <div>
      <ApplicantNavbar />
      <Container>
        <Box mt={4}>
          {scholarships.map((scholarship) => (
            <Paper key={scholarship.id} elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
              <Typography variant="h5" gutterBottom>
                {scholarship.scholarship_name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Category: {scholarship.category}
              </Typography>
              <Typography variant="subtitle1">
                Description: {scholarship.description}
              </Typography>
              <Typography variant="subtitle1">
                Amount: {scholarship.amount}
              </Typography>
              <Box display="flex" justifyContent="center" marginTop="10px">
                <Button
                  variant="outlined"
                  color="primary"
                  component={Link}
                  to={`/scholarship/${scholarship.id}`} // Adjust the route as needed
                >
                  View Details
                </Button>
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default ApplicantScholarships;
