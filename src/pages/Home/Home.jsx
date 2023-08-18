import React from 'react';
import './Home.css';
import scholarshipImage from '../../assets/student.png';
import Testimonials from './Testimonials';
import Steps from './Steps';
import LandingPage from './LandingPage';
import Steps2 from './Steps2';


const Home = () => {
  return (
    <>
      <LandingPage />
      <Steps />
      <Testimonials />
    </>
  );
};

export default Home;
