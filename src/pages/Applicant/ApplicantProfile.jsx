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
                
              </Box>
            </Box>

          </Box>

          <Typography variant="h5" sx={{mt: '30px'}}>Profile Section</Typography>
          {/* Practice Flexbox */}
          <Box className="edit-profile-container"
            sx={{
              background: '#fff'
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
            
            <Box className="flexbox-container-3"
              sx={{
                display: 'flex', 
                justifyContent: 'space-between',
                
                padding: '10px 10%',
                border: '1px solid #9E9FA5'
              }}
            >
              <Box className='flexbox-item-1' sx={{Width: '33%'}}>
                Gender
              </Box>
              <Box className='flexbox-item-2'>
                Your Gender
              </Box>
              <Box className='flexbox-item-3' sx={{textAlign: 'right'}}>
                <Link to="#">Edit </Link>
              </Box>
            </Box>

            <Box className="flexbox-container-4"
              sx={{
                display: 'flex', 
                justifyContent: 'space-between',
                
                padding: '10px 10%',
                border: '1px solid #9E9FA5'
              }}
            >
              <Box className='flexbox-item-1' sx={{Width: '33%'}}>
                Date of Birth
              </Box>
              <Box className='flexbox-item-2'>
                Your Date of Birth
              </Box>
              <Box className='flexbox-item-3' sx={{textAlign: 'right'}}>
                <Link to="#">Edit </Link>
              </Box>
            </Box>

            <Box className="flexbox-container-5"
              sx={{
                display: 'flex', 
                justifyContent: 'space-between',
                
                padding: '10px 10%',
                border: '1px solid #9E9FA5'
              }}
            >
              <Box className='flexbox-item-1' sx={{Width: '33%'}}>
                Email
              </Box>
              <Box className='flexbox-item-2'>
                Your Email
              </Box>
              <Box className='flexbox-item-3' sx={{textAlign: 'right'}}>
                <Link to="#">Edit </Link>
              </Box>
            </Box>

            <Box className="flexbox-container-6"
              sx={{
                display: 'flex', 
                justifyContent: 'space-between',
                
                padding: '10px 10%',
                border: '1px solid #9E9FA5'
              }}
            >
              <Box className='flexbox-item-1' sx={{Width: '33%'}}>
                Phone No.
              </Box>
              <Box className='flexbox-item-2'>
                Your phone number
              </Box>
              <Box className='flexbox-item-3' sx={{textAlign: 'right'}}>
                <Link to="#">Edit </Link>
              </Box>
            </Box>

            <Box className="flexbox-container-7"
              sx={{
                display: 'flex', 
                justifyContent: 'space-between',
                
                padding: '10px 10%',
                border: '1px solid #9E9FA5'
              }}
            >
              <Box className='flexbox-item-1' sx={{Width: '33%'}}>
                Nationality
              </Box>
              <Box className='flexbox-item-2'>
                Your Nationality
              </Box>
              <Box className='flexbox-item-3' sx={{textAlign: 'right'}}>
                <Link to="#">Edit </Link>
              </Box>
            </Box>
            


          </Box>

          {/* Academic Background */}
          <Typography variant="h5" sx={{mt: '30px'}}>Academic Background</Typography>
          <Box className="academic-background-container"
            sx={{
              background: '#fff'
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
                Current Education Level
              </Box>
              <Box className='flexbox-item-2'>
                Current Education Level
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
                School Name
              </Box>
              <Box className='flexbox-item-2'>
                Your School Name
              </Box>
              <Box className='flexbox-item-3' sx={{textAlign: 'right'}}>
                <Link to="#">Edit </Link>
              </Box>
            </Box>

            <Box className="flexbox-container-3"
              sx={{
                display: 'flex', 
                justifyContent: 'space-between',
                
                padding: '10px 10%',
                border: '1px solid #9E9FA5'
              }}
            >
              <Box className='flexbox-item-1' sx={{Width: '33%'}}>
                GPA
              </Box>
              <Box className='flexbox-item-2'>
                Your GPA
              </Box>
              <Box className='flexbox-item-3' sx={{textAlign: 'right'}}>
                <Link to="#">Edit </Link>
              </Box>
            </Box>

            <Box className="flexbox-container-4"
              sx={{
                display: 'flex', 
                justifyContent: 'space-between',
                
                padding: '10px 10%',
                border: '1px solid #9E9FA5'
              }}
            >
              <Box className='flexbox-item-1' sx={{Width: '33%'}}>
                Program/Area of Study
              </Box>
              <Box className='flexbox-item-2'>
                Area of Study
              </Box>
              <Box className='flexbox-item-3' sx={{textAlign: 'right'}}>
                <Link to="#">Edit </Link>
              </Box>
            </Box>

            <Box className="flexbox-container-5"
              sx={{
                display: 'flex', 
                justifyContent: 'space-between',
                
                padding: '10px 10%',
                border: '1px solid #9E9FA5'
              }}
            >
              <Box className='flexbox-item-1' sx={{Width: '33%'}}>
                Enrollment Year
              </Box>
              <Box className='flexbox-item-2'>
                Enrollment Year
              </Box>
              <Box className='flexbox-item-3' sx={{textAlign: 'right'}}>
                <Link to="#">Edit </Link>
              </Box>
            </Box>

            <Box className="flexbox-container-6"
              sx={{
                display: 'flex', 
                justifyContent: 'space-between',
                
                padding: '10px 10%',
                border: '1px solid #9E9FA5'
              }}
            >
              <Box className='flexbox-item-1' sx={{Width: '33%'}}>
                Expected to Graduate
              </Box>
              <Box className='flexbox-item-2'>
                Expected to Graduate
              </Box>
              <Box className='flexbox-item-3' sx={{textAlign: 'right'}}>
                <Link to="#">Edit </Link>
              </Box>
            </Box>

            <Box className="flexbox-container-7"
              sx={{
                display: 'flex', 
                justifyContent: 'space-between',
                
                padding: '10px 10%',
                border: '1px solid #9E9FA5'
              }}
            >
              <Box className='flexbox-item-1' sx={{Width: '33%'}}>
                Achievements
              </Box>
              <Box className='flexbox-item-2'>
                Achievements
              </Box>
              <Box className='flexbox-item-3' sx={{textAlign: 'right'}}>
                <Link to="#">Edit </Link>
              </Box>
            </Box>

            
          
          
          </Box>

          {/* Extracurricular Activities */}
          <Typography variant="h5" sx={{mt: '30px'}}>Extra Curricular Activities</Typography>
          <Box className="extra-curricular-container"
            sx={{
              background: '#fff'
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
                Extracurricular Activities
              </Box>
              <Box className='flexbox-item-2'>
                Extracurricular Activities
              </Box>
              <Box className='flexbox-item-3' sx={{textAlign: 'right'}}>
                <Link to="#">Edit </Link>
              </Box>
            </Box>

          </Box>

          {/* Interests and Goals */}
          <Typography variant="h5" sx={{mt: '30px'}}>Interests and Goals</Typography>
          <Box className="interest-goals-container"
            sx={{
              background: '#fff',
              mb: '30px'
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
                Interests
              </Box>
              <Box className='flexbox-item-2'>
                Interests
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
                Goals
              </Box>
              <Box className='flexbox-item-2'>
                Goals
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