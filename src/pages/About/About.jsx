import React from 'react'
import './About.css'
import { Grid } from '@mui/material';
import fbIcon from './../../assets/fb_icon.png'
import pIcon from './../../assets/p-icon.png'
import { Container, Box, Typography } from '@mui/material';
import aboutImage from './../../assets/aboutimage.png'
import Navbar3 from '../../components/header/Navbar3';


function About() {
  return (
    <div>
    <Navbar3 />
    <Container
      sx={{
        height: '100vh',
      }}
    >
      <Box marginTop='36px' 
           borderRadius={15}
           sx={{ bgcolor: '#cfe8fc',
           height: '300px', padding: 10, 
           background: 'linear-gradient(180deg, rgba(19, 64, 133, 0.72) 52.60%, rgba(19, 64, 133, 0.22) 100%)'
      }}>
        <Box>
        <img src={aboutImage} alt="about-image" style={{ width: '300', height: '250px', position: 'absolute', marginLeft: '700px' }}/>
        </Box>
        <Typography fontSize={30} fontWeight="bold" color='white'>
          About Us
        </Typography>
        <Box display="flex" alignItems="center">
          <img className='fb-icon' src={fbIcon} alt="fb-icon" style={{ width: '50px', height: '50px' }}/>
          <Typography justifyContent="center" ml={2} color='white'>www.facebook.com/scholarlyFBpage</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <img className='p-icon' src={pIcon} alt="p-icon" style={{ width: '50px', height: '50px' }}/>
          <Typography justifyContent="center" ml={2} color='white'>09123456789</Typography>
        </Box>
        <Box display="flex" justifyContent="center" marginTop="36px">
          <Typography fontFamily="poppins" fontSize="36px" fontWeight="regular">Conveniently finds <br />scholarships for you.</Typography>
        </Box>
        
      </Box>
    </Container>
    </div>
    
  )
}

export default About