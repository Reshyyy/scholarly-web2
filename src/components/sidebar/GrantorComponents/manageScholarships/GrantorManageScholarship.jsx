import React, { useState, useEffect } from 'react';
import GrantorNavbar from '../../../header/GrantorNavbar'
import { Button, Container, Grid, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';


const GrantorManageScholarship = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate(); 

  const handleAddScholarship = () => {
    navigate('/add_scholarship');
  };

  useEffect(() => {
    axios.get('http://localhost:8081/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleDelete = (scholarshipId) => {
    if (window.confirm('Are you sure you want to delete this scholarship?')) {
      axios
        .delete(`http://localhost:8081/api/scholarships/${scholarshipId}`)
        .then((response) => {
          // Handle successful deletion
          // Update the data after deletion
          const updatedData = data.filter((row) => row.id !== scholarshipId);
          setData(updatedData);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'scholarship_name', headerName: 'Scholarship Name', width: 200 },
    { field: 'provider', headerName: 'Provider', width: 150 },
    { field: 'category', headerName: 'Category', width: 150 },
    { field: 'description', headerName: 'Description', width: 300 },
    { field: 'eligibility', headerName: 'Eligibility', width: 250 },
    { field: 'location', headerName: 'Location', width: 150 },
    { field: 'amount', headerName: 'Amount', width: 120 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <div>
          <Button
            variant="outlined"
            size="small"
            style={{ marginRight: '5px' }}
            onClick={() => handleEdit(params.row.id)} // Implement the edit functionality
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="error"
            size="small"
            onClick={() => handleDelete(params.row.id)} // Implement the delete functionality
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const rows = data.map((row) => ({
    id: row.id,
    scholarship_name: row.scholarship_name,
    provider: row.provider,
    category: row.category,
    description: row.description,
    eligibility: row.eligibility,
    location: row.location,
    amount: row.amount
  }));

  return (
    <div>
      <GrantorNavbar />
      <Container>
      <Grid container>
        <Grid item xs={2}>
        
        </Grid>
        <Grid item xs={12}>
        <Button 
          onClick={handleAddScholarship}
          variant="contained"
          style={{background: '#F5CE82', padding: '10px', margin: '30px auto' }}
          startIcon={<AddIcon />}>
          Add Scholarship
        </Button>
        <Typography variant="h6" style={{color: 'gray', marginTop: '15px'}}>List of Scholarships</Typography>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizes={[10]}
          rowsPerPageOptions={[10]}
        />
        </Grid>
        <Grid item xs={4}>
        </Grid>
      </Grid>
      
      </Container>
      
    </div>
  )
}

export default GrantorManageScholarship