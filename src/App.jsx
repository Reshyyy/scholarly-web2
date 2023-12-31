import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import Scholarships from './pages/Scholarships/Scholarships';
import About from './pages/About/About';
import Navbar from './components/header/Navbar'
import Footer from './components/footer/Footer';
import Navbar2 from './components/header/Navbar2';
import Navbar3 from './components/header/Navbar3';
import SignUp2 from './pages/SignUp/SignUp2';
import Login2 from './pages/Login/Login2';
import GrantorRegister from './pages/Grantor/GrantorRegister';
import LoginAdmin from './admin/AdminLogin/LoginAdmin';
import About2 from './pages/About/About2';
import Axios from 'axios'
import ApplicantHome from './pages/Applicant/ApplicantHome';
import ApplicantRecommendations from './pages/Applicant/ApplicantRecommendations';
import ApplicantScholarships from './pages/Applicant/ApplicantScholarships';
import ApplicantAbout from './pages/Applicant/ApplicantAbout';
import GrantorHome from './pages/Grantor/GrantorHome';
import GrantorRegister2 from './pages/Grantor/GrantorRegister2';
import AdminHome from './admin/AdminHome';
import GrantorDashboard from './components/sidebar/GrantorComponents/dashboard/GrantorDashboard';
import GrantorManageScholarship from './components/sidebar/GrantorComponents/manageScholarships/GrantorManageScholarship';
import GrantorGenerateReport from './components/sidebar/GrantorComponents/generateReports/GrantorGenerateReport';
import GrantorLogin from './pages/Grantor/GrantorLogin';
import AddScholarship from './components/sidebar/GrantorComponents/manageScholarships/AddScholarship';
import AdminDashboard from './admin/components/sidebar/AdminComponents/AdminDashboard';
import AdminUserManagement from './admin/components/sidebar/AdminComponents/AdminUserManagement';
import AdminGenerateReport from './admin/components/sidebar/AdminComponents/AdminGenerateReport';
import ViewDetails from './pages/Applicant/ViewDetails';
import ApplicantProfile from './pages/Applicant/ApplicantProfile';



function App() {

  return (
    <Router>
    <div>
      <Routes>
        {/* Guest Side */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp2 />} />
        <Route path="/login" element={<Login2 />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/about" element={<About />} />
        {/* Applicant Side */}
        <Route path="/applicant-home" element={<ApplicantHome />} />
        <Route path="/recommendations" element={<ApplicantRecommendations />} />
        <Route path="/applicant-about" element={<ApplicantAbout />} />
        <Route path="/applicant-scholarships" element={<ApplicantScholarships />} />
        <Route exact path="/scholarship/:id" element={<ViewDetails />} />
        <Route path="/applicant-profile" element={<ApplicantProfile />} />
        {/* Grantor Side */}
        <Route path="/grantor_home" element={<GrantorHome />} />
        <Route path="/grantor-register2" element={<GrantorRegister2 />} />
        <Route path="/grantor_dashboard" element={<GrantorDashboard />} />
        <Route path="/grantor_manage_scholarship" element={<GrantorManageScholarship />} />
        <Route path="/grantor_generate_report" element={<GrantorGenerateReport />} />
        <Route path="/grantor-login" element={<GrantorLogin />} />
        <Route path="/add_scholarship" element={<AddScholarship />} />
        {/* Admin Side */}
        <Route path="/admin-login" element={<LoginAdmin />} />
        <Route path="/admin-home" element={<AdminHome />} />
        <Route path="/admin_dashboard" element={<AdminDashboard />} />
        <Route path="/admin_user_management" element={<AdminUserManagement />} />
        <Route path="/admin_generate_report" element={<AdminGenerateReport />} />
      </Routes>
      {/* <Footer /> */}
    
    </div>
    </Router>
  );
}

export default App;
