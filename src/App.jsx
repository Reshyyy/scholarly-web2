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

function App() {

  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp2 />} />
        <Route path="/login" element={<Login2 />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/about" element={<About />} />
        <Route path="/grantor-register" element={<GrantorRegister />} />
        <Route path="/admin-login" element={<LoginAdmin />} />
        <Route path="/applicant-home" element={<ApplicantHome />} />
        <Route path="/recommendations" element={<ApplicantRecommendations />} />
        <Route path="/applicant-scholarships" element={<ApplicantScholarships />} />
        <Route path="/applicant-about" element={<ApplicantAbout />} />
        <Route path="/grantor-home" element={<GrantorHome />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
