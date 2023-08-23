import { Box, Container } from '@mui/material'
import React from 'react'
import AdminNavbar from './components/header/AdminNavbar'
import AdminSidebar from './components/sidebar/AdminSidebar'

const AdminHome = () => {
  return (
    <div>
        <AdminSidebar />
    <Container>
        <Box sx={{height: '100vh'}}>

        </Box>
    </Container>
    </div>
  )
}

export default AdminHome