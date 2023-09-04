import React from 'react'
import GrantorNavbar from '../../components/header/GrantorNavbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GrantorDashboard from '../../components/sidebar/GrantorComponents/dashboard/GrantorDashboard'
import GrantorManageScholarship from '../../components/sidebar/GrantorComponents/manageScholarships/GrantorManageScholarship'
import GrantorGenerateReport from '../../components/sidebar/GrantorComponents/generateReports/GrantorGenerateReport'


const GrantorHome = () => {
  return (
    <>
      <GrantorNavbar />
    </>

    
    
    
  )
}

export default GrantorHome