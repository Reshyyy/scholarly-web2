import React from 'react';
import './SignUp.css';
import Navbar from '../../components/header/Navbar';
import Footer from '../../components/footer/Footer';

const SignUp = () => {
  return (
    <>
    <Navbar/>
    <div className="signup-container">
    <h2 className='signuptitle'>Sign Up</h2>
      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name<span className='asterisk'> *</span></label>
          <input type="text" id="firstName" name="firstName" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name<span className='asterisk'> *</span></label>
          <input type="text" id="lastName" name="lastName" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email<span className='asterisk'> *</span></label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password<span className='asterisk'> *</span></label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password<span className='asterisk'> *</span></label>
          <input type="password" id="confirmPassword" name="confirmPassword" required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address<span className='asterisk'> *</span></label>
          <input type="text" id="address" name="address" required />
        </div>
        <div className="form-group">
          <label htmlFor="nickname">Nickname<span className='asterisk'> *</span></label>
          <input type="text" id="nickname" name="nickname" required />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth<span className='asterisk'> *</span></label>
          <input type="date" id="dateOfBirth" name="dateOfBirth" required />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Preferred Contact Number<span className='asterisk'> *</span></label>
          <input type="tel" id="contactNumber" name="contactNumber" required />
          <div className="radio-group">
              <label>
                <input type="radio" name="contactType" value="Personal" required />Personal
              </label>
              <label>
                <input type="radio" name="contactType" value="Work" required />Work
              </label>
              <label>
                <input type="radio" name="contactType" value="Business" required />Business
              </label>
            </div>
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender<span className='asterisk'> *</span></label>
          <select className='gender' id="gender" name="gender" required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="joinAs">Join As<span className='asterisk'> *</span></label>
          <select className='joinAs' id="joinAs" name="joinAs" required>
            <option value="">Select Join As</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="parent">Parent</option>
          </select>
        </div>

        <div className="form-buttons">
          <button type="button">Cancel</button>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
    <Footer/>
    </>
    
  );
};

export default SignUp;
