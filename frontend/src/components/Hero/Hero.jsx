// components/Hero/Hero.jsx
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Your Name</span>
          </h1>
          <p className="hero-subtitle">
            Full Stack Developer & UI/UX Designer
          </p>
          <p className="hero-description">
            I create digital experiences that combine beautiful design 
            with clean, efficient code.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">View My Work</button>
            <button className="btn btn-secondary">Contact Me</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/path-to-your-image.jpg" alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
