import { Box, Button, Container, FormGroup, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import Navbar3 from '../../components/header/Navbar3';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from "@mui/material/Stack";

function GrantorRegister() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Grid>
      <Navbar3 />
        <Box style={{ background: '#016698' }}>
        <Typography color="white" textAlign='center' fontFamily='Roboto' fontSize='25px' fontStyle='normal' padding="16px">
            Scholarship Provider Registration
        </Typography>
        </Box>
        <Container>
            <Grid style={{ background: '#fff' }}>
                <Box component="form" height='auto' sx={{ margin: '0 60px'}}>
                
                <FormGroup sx={{ paddingTop: '30px' }}>
                <TextField
                required
                label="Organization Name"
                fullWidth
                style={{ marginBottom: '20px' }}
                />
                <TextField
                required
                label="Contact Name"
                fullWidth
                style={{ marginBottom: '20px' }}
                />
                <TextField
                required
                label="Contact Email"
                fullWidth
                style={{ marginBottom: '20px' }}
                />
                <TextField
                required
                label="Phone Number"
                fullWidth
                style={{ marginBottom: '20px' }}
                />
                <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth style={{ marginBottom: '20px' }}>
                <InputLabel id="demo-simple-select-label">Organization Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Individual</MenuItem>
                  <MenuItem value={20}>Institution</MenuItem>
                </Select>
                </FormControl>
                </Box>
                <TextField
                label="Mission Statement"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                style={{ marginBottom: '20px' }}
                />
                <Stack direction="row" alignItems="center" spacing={2} style={{ marginBottom: '20px' }}>
                  <Typography sx={{ fontStyle: 'italic', color: 'gray' }}>Logo of Organization</Typography>
                  <Button variant="contained" component="label">
                    Select File
                    <input hidden accept="image/*" multiple type="file" />
                  </Button>
                </Stack>
                <TextField
                label="Website URL"
                multiline
                variant="outlined"
                fullWidth
                style={{ marginBottom: '20px' }}
                />
                <TextField
                label="Address"
                multiline
                variant="outlined"
                fullWidth
                style={{ marginBottom: '20px' }}
                />
                <TextField
                label="Username"
                multiline
                variant="outlined"
                fullWidth
                style={{ marginBottom: '20px' }}
                />
                <TextField
                label="Password"
                multiline
                variant="outlined"
                fullWidth
                style={{ marginBottom: '20px' }}
                />
                <TextField
                label="Confirm Password"
                multiline
                variant="outlined"
                fullWidth
                style={{ marginBottom: '20px' }}
                />
                <Button type='submit' variant='contained' style={{ margin: '30px auto', width: '400px', marginBottom: '100px' }}>Submit</Button>
                </FormGroup>
                </Box>
            </Grid>
        </Container>
    </Grid>
  )
}

export default GrantorRegister