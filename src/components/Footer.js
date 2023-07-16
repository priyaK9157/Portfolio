import React from 'react';
import './Footer.css';

const Footer = () => {
  const handleSectionClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <span>&copy; Priya Kumari. All rights reserved</span>
        <a href="#home" onClick={() => handleSectionClick('home')}>
          Home
        </a>
        <a href="#about" onClick={() => handleSectionClick('about')}>
          About Me
        </a>
        <a href="#contact" onClick={() => handleSectionClick('contact')}>
          Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;
