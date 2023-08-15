import React from 'react'
import { Box, Container, Typography, Grid, Button } from '@mui/material'

function LandingPage() {
  return (
    <Box height="100vh" sx={{ background: "#2364A4", display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
        <Container>
            <Box marginTop='100px'>
            <Typography sx={{ fontSize: '60px', fontFamily: 'Roboto Flex', fontWeight: 'bold', color: 'white' }}>
                Conveniently Finds <br />Scholarships For You
            </Typography>
            <Typography textAlign='justify' sx={{color: 'white', fontSize: '20px', fontFamily: 'Roboto Flex', fontWeight: '500'}}>
                Scholar.ly is an innovative app built to streamline the search<br />
                and application process. You can access a world of scholarship<br />
                opportunities at your fingertips. This app connects students <br />
                like you to a vast array of scholarships catered to your <br />
                academic goals and financial needs.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className="find-scholarships-button"
              sx={{ marginTop: '20px', background: '#0DA8FF', fontWeight: 'bold' }}
            >
              Find Scholarships Now
            </Button>
            </Box>
        </Container>
    </Box>
  )
}

export default LandingPage