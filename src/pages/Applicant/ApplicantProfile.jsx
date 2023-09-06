import React from 'react'
import ApplicantNavbar from '../../components/header/ApplicantNavbar'
import { Box, Container, Grid, TextField, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const ApplicantProfile = () => {
  return (
    <div>
        <ApplicantNavbar />
        <Box style={{ background: '#016698' }}>
                <Typography color="white" textAlign='center' fontFamily='Roboto' fontSize='25px' fontStyle='normal' padding="16px">
                    Applicant Profile
                </Typography>
        </Box>
        <Container>
        
          <Box className="container" sx={{
            background: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginTop: 2
          }}>
            <Box className="profile-container" sx={{display: 'flex', alignItems: 'center', margin: 5}}>
              <AccountCircleIcon sx={{width: '100px', height: '100px'}} />
              <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <Typography variant="h5">Your Name</Typography>
                <Link to="#" style={{color: 'blue', textDecoration: 'none'}}>Edit Profile</Link>
                <Link to="#" style={{marginTop: 5, color: 'blue', textDecoration: 'none'}}>Change Password</Link>
                <Link to="#" style={{marginTop: 5, color: 'red', textDecoration: 'none'}}>Delete Account</Link>
              </Box>
            </Box>
            
            
            
            
            
          </Box>

          {/* Practice Flexbox */}
          <Box className="edit-profile-container"
            sx={{
              background: '#fff',
              mt: '15px'
            }}
          >
            <Box className="flexbox-container-1"
              sx={{
                display: 'flex', 
                justifyContent: 'space-between',
                
                padding: '10px 10%',
                border: '1px solid #9E9FA5'
              }}
            >
              <Box className='flexbox-item-1' sx={{Width: '33%'}}>
                Firstname
              </Box>
              <Box className='flexbox-item-2'>
                Your First Name
              </Box>
              <Box className='flexbox-item-3' sx={{textAlign: 'right'}}>
                <Link to="#">Edit </Link>
              </Box>
            </Box>
            <Box className="flexbox-container-2"
              sx={{
                display: 'flex', 
                justifyContent: 'space-between',
                padding: '10px 10%',
                border: '1px solid #9E9FA5'
              }}
            >
              <Box className='flexbox-item-1' sx={{Width: '33%'}}>
                Lastname
              </Box>
              <Box className='flexbox-item-2'>
                Your Last Name
              </Box>
              <Box className='flexbox-item-3' sx={{textAlign: 'right'}}>
                <Link to="#">Edit </Link>
              </Box>
            </Box>
            
          </Box>
          
        </Container>
    </div>
  )
}

export default ApplicantProfile