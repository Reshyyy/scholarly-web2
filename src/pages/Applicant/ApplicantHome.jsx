import React from 'react'
import { Link } from 'react-router-dom';
import ApplicantNavbar from '../../components/header/ApplicantNavbar';
import { Box, Container, Grid, Typography } from '@mui/material';

const ApplicantHome = () => {
  return (
    <div>
      <ApplicantNavbar />
      <Container>
        <Box display="flex" alignItems="center" justifyContent="center">
          <h1>Welcome User! </h1>
        </Box>
        <Grid lg={12} container spacing={2}>
          <Grid lg={12} style={{backgroundColor: 'aqua'}}>
            <h1>Block 1</h1>
          </Grid>
          <Grid lg={3}>
            <h1>Block 2</h1>
          </Grid>
        </Grid>
        
      </Container>
    </div>
  )
}

export default ApplicantHome