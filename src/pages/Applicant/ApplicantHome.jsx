import React from 'react'
import { Link } from 'react-router-dom';
import ApplicantNavbar from '../../components/header/ApplicantNavbar';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import cImage from '../../assets/com-image.png'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Footer from '../../components/footer/Footer';


const ApplicantHome = () => {
  function createData(sName, category, deadline, status) {
    const test = (<Button variant="outlined">Test</Button>)
    return { sName, category, deadline, status:test };
  }
  
  const rows = [
    createData('Scholarship 1', 'Category 1', 'Deadline 1'),
    createData('Scholarship 2', 'Category 2', 'Deadline 2'),
    createData('Scholarship 3', 'Category 3', 'Deadline 3')
  ];

  return (
    <div>
      <ApplicantNavbar />
      <Container sx={{paddingBottom: '100px'}}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <h1>Welcome User! </h1>
        </Box>
        
        <Box className="flexbox-container"
          sx={{
            background: '#fff',
            padding: '10px 10%',
          }}
        >

          <Box className="row-content"
            sx={{
              display:'flex',
              justifyContent: 'space-between',
              gap: 5
            }}
          >
            <Box className="col-1"
              sx={{
                width: '100%',
              }}
            >
              <img src={cImage} />
            </Box>
            <Box className="col-2" sx={{mt:5}}>
              <Typography variant="h4">Complete your profile to start your scholarship search!</Typography>
              <Button variant="contained" sx={{mt: 5, backgroundColor: '#000'}}>
                Go To Profile
              </Button>
            </Box>

            
            
          </Box>
          
          

        </Box>

        {/* Newly Added Scholarships Section */}
        
        <Typography variant="h5" sx={{mt: '30px', mb: '20px', fontWeight: 'bold'}}>Newly Added Scholarships</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Scholarship Name</TableCell>
                <TableCell align="right">Category</TableCell>
                <TableCell align="right">Deadline</TableCell>
                <TableCell align="right">Status</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.sName}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  
                  <TableCell align="left">{row.sName}</TableCell>
                  <TableCell align="right">{row.category}</TableCell>
                  <TableCell align="right">{row.deadline}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>


        
        
      </Container>
      <Footer />
    </div>
  )
}

export default ApplicantHome