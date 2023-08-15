import { Box, Button, Container, FormGroup, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

function GrantorRegister() {
  return (
    <Grid>
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
                <Typography>Organization Type</Typography>
                <TextField
                label="Mission Statement"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                style={{ marginBottom: '20px' }}
                />
                <Typography>Logo of Organization</Typography>
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