import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import stepsImage from './../../assets/steps.png'

function Steps2() {
  return (
    <Box height="100vh" style={{background: '#8CC0DE', margin: '0', padding: '0'}}>
        <Container>
        <Box style={{ paddingTop: '70px'}}>
            <Typography fontSize="20px" color="white">HOW DOES IT WORK?</Typography>
            <Typography fontWeight="bold" marginTop="30px" fontSize="36px" color="white">Find the best <br />scholarships for you.</Typography>
            <img src={stepsImage} alt="steps-image" width="500px" height="400px" style={{borderRadius:'15px', marginTop: '30px'}} />
            <Divider orientation="vertical" flexItem />
            <Typography>Step 1. Set up a profile</Typography>
        </Box>
        </Container>
    </Box>
  )
}

export default Steps2