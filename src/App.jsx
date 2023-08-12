import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import Scholarships from './pages/Scholarships/Scholarships';
import ViewDetails from './pages/ViewDetails/ViewDetails';
import Recommendations from './pages/Recommendations/Recommendations';
import About from './pages/About/About';
import SignIn from './pages/SignIn/SignIn';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/viewdetails" element={<ViewDetails />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
