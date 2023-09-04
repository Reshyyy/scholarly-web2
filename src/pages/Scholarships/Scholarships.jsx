import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { Paper, Typography, Container, Box } from '@mui/material';
import Navbar3 from '../../components/header/Navbar3';

function Scholarships() {
  return (
    <div>
      <Navbar3 />
      <Container>
        <Box mt={4}>
          <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
            <Typography variant="h5" gutterBottom>
              "No Essay" Nitro Scholarship
            </Typography>
            <Typography variant="body1" gutterBottom>
              Category: Scholarship Category
            </Typography>
            <Typography variant="subtitle1">
              Description: Scholarship Description
            </Typography>
            <Typography variant="subtitle1">
              Amount: Scholarship Amount
            </Typography>
            <Box display="flex" justifyContent="center" marginTop="10px">
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <Typography variant="body1" color="primary">
                  Login to View Details
                </Typography>
              </Link>
            </Box>
          </Paper>
        </Box>
      </Container>
    </div>
  );
}

export default Scholarships;
