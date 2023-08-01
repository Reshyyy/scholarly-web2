import React from 'react'
import Navbar from '../../components/header/Navbar'
import Footer from '../../components/footer/Footer'
import './About.css'
import fbIcon from '../../assets/fb_icon.png'

function About() {
  return (
    <section  className='a-section'>
      <Navbar/>
        <div className='a-layout'>
          <h2>About Us</h2>
          <img className="a-fb" alt="fb-icon" src={fbIcon} />
          <p>fbpage@gmail.com</p>
        </div>  
      <Footer/>
    </section>
  )
}

export default About