import React from 'react';
import './Navbar.css';
import Logo from './logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <a href="/">
          <img className="logo-navbar" src={Logo} alt="Logo" />
        </a>
        <a href="/" className="logo-text">Scholar.ly</a>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="auth-links">
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
