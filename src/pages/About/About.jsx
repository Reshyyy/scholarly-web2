import React from 'react';
import './About.css';
import { Grid } from '@mui/material';
import fbIcon from './../../assets/fb_icon.png';
import pIcon from './../../assets/p-icon.png';
import { Container, Box, Typography } from '@mui/material';
import aboutImage from './../../assets/aboutimage.png';
import Navbar3 from '../../components/header/Navbar3';

function About() {
  return (
    <div>
      <Navbar3 />
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <Box
          borderRadius={15}
          sx={{
            bgcolor: '#cfe8fc',
            padding: 10,
            background: 'linear-gradient(180deg, rgba(19, 64, 133, 0.72) 52.60%, rgba(19, 64, 133, 0.22) 100%)',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="h1" fontSize={30} fontWeight="bold" color="white">
                About Us
              </Typography>
              <Box display="flex" alignItems="center" marginBottom="16px">
                <img className="fb-icon" src={fbIcon} alt="fb-icon" style={{ width: '50px', height: '50px' }} />
                <Typography color="white" marginLeft="10px">
                  www.facebook.com/scholarlyFBpage
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <img className="p-icon" src={pIcon} alt="p-icon" style={{ width: '50px', height: '50px' }} />
                <Typography color="white" marginLeft="10px">
                  09123456789
                </Typography>
              </Box>
              <Box display="flex" justifyContent="center" marginTop="36px">
                <Typography fontFamily="poppins" fontSize="30px" fontWeight="regular">
                  Conveniently finds scholarships for you.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={aboutImage} alt="about-image" style={{ width: '300px', height: '250px' }} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default About;
