import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import aboutImage from './../../assets/aboutimage.png'
import fbIcon from './../../assets/fb_icon.png'
import pIcon from './../../assets/p-icon.png'

function About2() {
  return (
    <Container sx={{ display: 'flex', alignItems: 'center', height: 'auto', justifyContent: 'center' }}>
        <Box marginTop='36px' 
           borderRadius={15}
           sx={{ width: '900px', bgcolor: '#cfe8fc',
           height: '300px', padding: 10,
           background: 'linear-gradient(180deg, rgba(19, 64, 133, 0.72) 52.60%, rgba(19, 64, 133, 0.22) 100%)'
        }}>
            <Typography variant='h1' fontSize={30} fontWeight="bold" color='white'>
                About Us
            </Typography>
            <Box position="absolute" alignItems="flex-start">
                <Box display="flex" justifyContent="center" alignItems="center">
                    <img className='fb-icon' src={fbIcon} alt="fb-icon" style={{ width: '50px', height: '50px' }}/>
                    <Typography color='white'>www.facebook.com/scholarlyFBpage</Typography>
                </Box>
            </Box>
            <Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                <img className='p-icon' src={pIcon} alt="p-icon" style={{ width: '50px', height: '50px' }}/>
                <Typography color='white'>09123456789</Typography>
                </Box>
            </Box>
        </Box>
        
    </Container>
  )
}

export default About2