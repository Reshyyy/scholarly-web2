import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import stepsImage from './../../assets/steps.png'
import './Steps2.css';
import { useNavigate } from 'react-router-dom';

function Steps2() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };
  return (
    <Box
        sx={{
        background: '#8CC0DE',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}>
        <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} mt={10} mb={10}>
            <Typography fontSize="20px" color="white">HOW DOES IT WORK?</Typography>
            <Typography 
              fontWeight="bold"
              marginTop="30px"
              fontSize="36px"
              color="white"
            >
                Find the best <br />scholarships for you.
            </Typography>
            <img src={stepsImage} className="steps2-image" alt="steps-image" width="500px" height="400px" style={{borderRadius:'15px', marginTop: '30px', maxWidth: '100%'}} />
          </Grid>
          <Grid item xs={12} sm={6} mt={15}>
            <Typography fontSize={24} fontWeight='bold' color='#fff'>
              Step 1. Set up a profile
            </Typography>
            <Typography fontSize={18} fontWeight='bold' color='#435B66' mb={5}>
              After signing up, you may then personalize <br />
              your profile.
            </Typography>
            <Typography fontSize={24} fontWeight='bold' color='#fff' >
              Step 2. Receive scholarships that fits you
            </Typography>
            <Typography fontSize={18} fontWeight='bold' color='#435B66' mb={5}>
              Using your unique profile, you'll be given a list of <br />
              scholarships that matches your preferences.
            </Typography>
            <Typography fontSize={24} fontWeight='bold' color='#fff'>
              Step 3. Submit an application
            </Typography>
            <Typography fontSize={18} fontWeight='bold' color='#435B66'>
              After setting up your profile, you submit a <br />
              scholarship application and obtain funds.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={navigateToLogin}
              className="find-scholarships-button"
              sx={{
                marginTop: '50px',
                background: '#0DA8FF',
                fontWeight: 'bold',
                width: '200px',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '30px',
                display: 'block',
              }}
            >
              Join Now
            </Button>
          </Grid>
        </Grid>
        </Container>
    </Box>
  )
}

export default Steps2