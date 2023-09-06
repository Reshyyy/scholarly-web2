import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import studentImage from './../../assets/student.png';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <Box
      sx={{
        background: '#2364A4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          
          <Grid item xs={12} sm={6} mt={15}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'Roboto Flex',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              Conveniently Finds <br />Scholarships For You
            </Typography>
              
            <Typography
              textAlign="justify"
              sx={{
                color: 'white',
                fontSize: '20px',
                fontFamily: 'Roboto Flex',
                fontWeight: '500',
              }}
            >
              Scholar.ly is an innovative app built to streamline the search
              <br />
              and application process. You can access a world of scholarship
              <br />
              opportunities at your fingertips. This app connects students
              <br />
              like you to a vast array of scholarships catered to your
              <br />
              academic goals and financial needs.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={navigateToLogin}
              className="find-scholarships-button"
              sx={{
                marginTop: '20px',
                background: '#0DA8FF',
                fontWeight: 'bold',
              }}
            >
              Find Scholarships Now
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src={studentImage}
              alt="student-image"
              className="student-image"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default LandingPage;
