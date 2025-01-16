import React from "react";
import "../styles/HeroSection.scss";

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* <nav className="navbar">
        <a href="#home" className="logo">DITOY BAGUIO</a>
        <ul className="nav-links">
          <li><a href="#destination">DESTINATION</a></li>
          <li><a href="#events">EVENTS</a></li>
          <li><a href="#blog">BLOG</a></li>
          <li><a href="#booking">BOOKING </a></li>
        </ul>
      </nav> */}
      <div className="hero-content" id="home">
        <p className="hero-text">
        Discover the beauty and culture of the Summer Capital of the Philippines.
        </p>
        <button className="hero-button">
          Take a tour <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;