import React, { useState } from 'react';
import '../styles/Navbar.scss';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <a href="#home" className="logo">DITOY BAGUIO</a>
      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        aria-expanded={isMenuOpen}
      >
        ☰
      </button>
      <ul className={`nav-links ${isMenuOpen ? 'mobile' : ''}`}>
        <li><a href="#destination" className={activeLink === 'destination' ? 'active' : ''} onClick={() => handleLinkClick('destination')}>DESTINATION</a></li>
        <li><a href="#blog" className={activeLink === 'blog' ? 'active' : ''} onClick={() => handleLinkClick('blog')}>BLOG</a></li>
        <li><a href="#events" className={activeLink === 'events' ? 'active' : ''} onClick={() => handleLinkClick('events')}>EVENTS</a></li>
        <li><a href="#booking" className={activeLink === 'booking' ? 'active' : ''} onClick={() => handleLinkClick('booking')}>BOOKING</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
