import React from 'react';
import './Login.css';
import scholarlyLogo from '../../assets/scholarly-logo.png';
import Navbar from '../../components/header/Navbar';

function Login() {
  return (
    <div>
      <Navbar />
      <div className="login-page">
      <div className="logo-login-container">
        <img className="logo" src={scholarlyLogo} alt="Scholarly Logo" />
      </div>
      <div className="form-container">
        <form className='login-form'>
          <h2>SIGN IN</h2>
          <label htmlFor='email'>Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor='password'>Password:</label>
          <input type="password" id="password" name="password" />
          <div className="password-wrapper">
            <input type="checkbox" id="showpass" name="showpassword" value="showpassword" />
            <label htmlFor='checkbox'>Show Password</label>
          </div>
          <div className="btn-container">
            <button type="button" className="login-btn">LOGIN</button>
          </div>
        </form>
      </div>
    </div>
    </div>
    
  );
}

export default Login;
