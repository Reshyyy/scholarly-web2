import React from 'react'
import Navbar from '../../components/header/Navbar'
import Footer from '../../components/footer/Footer'
import './About.css'

function About() {
  return (
    <>
      <Navbar/>
        <div className='a-wrapper'>
          <h1>About</h1>
        </div>
      <Footer/>
    </>
  )
}

export default About