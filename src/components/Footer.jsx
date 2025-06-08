import React from 'react';
import '../styles/Footer.scss';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="footer__sections">
        <div className="footer__sections__column">
          <h4>About Us</h4>
          <ul>
            <li><a href="#!">Health Services and Vaccinations</a></li>
            <li><a href="#!">Climate and Weather</a></li>
            <li><a href="#!">Language</a></li>
          </ul>
        </div>
        <div className="footer__sections__column">
          <h4>Destinations</h4>
          <ul>
            <li><a href="#!">Where to Go</a></li>
            <li><a href="#!">Blog</a></li>
            <li><a href="#!">Events and Festivities</a></li>
          </ul>
        </div>
        <div className="footer__sections__column">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="#!">Facebook</a></li>
            <li><a href="#!">Instagram</a></li>
            <li><a href="#!">TikTok</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <p>&copy; {new Date().getFullYear()} Your Travel Website. All rights reserved.</p>
        <p>Made by Charlotte Joyce B.</p>
      </div>
    </footer>
  );
};

export default Footer;
