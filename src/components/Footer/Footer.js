import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div>
        © {currentYear} Simão Cunha
      </div>
      <div>
        Developed with React
      </div>
    </footer>
  );
};

export default Footer;