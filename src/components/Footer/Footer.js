import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      © {currentYear} Simão Cunha
      <br />
      Developed with React
    </footer>
  );
};

export default Footer;
