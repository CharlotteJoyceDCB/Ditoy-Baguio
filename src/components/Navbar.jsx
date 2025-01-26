import React, { useEffect, useState } from 'react';
import feather from 'feather-icons';
import '../styles/Navbar.scss';
import logo from '../assets/logo.png';

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

  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} className='logo' />
        <a href="#home" className="logo-title">DITOY BAGUIO</a>
      </div>
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
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <i data-feather="facebook"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i data-feather="instagram"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <i data-feather="twitter"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
