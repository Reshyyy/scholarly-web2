import React from 'react';
import Navbar from './header/Navbar';
import Footer from './footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      ,<Footer />
    </>
  );
};

export default Layout;
