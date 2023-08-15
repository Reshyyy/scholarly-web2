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

function App() {
  return (
    <div>
    <Router>
      <Navbar3 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp2 />} />
        <Route path="/login" element={<Login2 />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
