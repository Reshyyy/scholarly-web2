import React from 'react';
import './Home.css';
import scholarshipImage from '../../assets/student.png';
import Testimonials from './Testimonials';
import Steps from './Steps';
import LandingPage from './LandingPage';
import Steps2 from './Steps2';
import Navbar3 from '../../components/header/Navbar3';


const Home = () => {
  return (
    <>
      <Navbar3 />
      <LandingPage />
      <Steps />
      <Testimonials />
    </>
  );
};

export default Home;
