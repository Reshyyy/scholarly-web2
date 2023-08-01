import React from 'react';
import './Home.css';
import scholarshipImage from '../../assets/student.png';
import Navbar from '../../components/header/Navbar';
import Footer from '../../components/footer/Footer'
import Testimonials from './Testimonials';
import Steps from './Steps';


const Home = () => {
  return (
    <>
      <Navbar />
      <header className="header-container">
        <div className="text-container">
          <h1 className="big-text">
            Conveniently Finds <br />Scholarships For You
          </h1>
          <p className="additional-text">
            Scholar.ly is an innovative app built to streamline the search<br />
            and application process. You can access a world of <br />
            scholarship opportunities at your fingertips. This app connects<br />
            students like you to a vast array of scholarships catered to<br />
            your academic goals and financial needs.
          </p>
          <button className="find-scholarships-button">Find Scholarships Now</button>
        </div>
        <img className="scholarship-image" src={scholarshipImage} alt="Scholarship" />
      </header>
      <Steps />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
