// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="logo-container">
        <img src='logo.jpeg' alt="Rentio Logo" className="logo" />
      </div>
      <h1 className="title">Welcome to Rentio</h1>
      <p className="subtitle">Find your perfect home and home-cooked meal with us!</p>
      <div className="options-container">
        <Link to="/homes" className="option">
          <div className="option-card">
            <h2 className="option-title">Homes</h2>
            <p className="option-description">Find your dream home or apartment</p>
          </div>
        </Link>
        <Link to="/meals" className="option">
          <div className="option-card">
            <h2 className="option-title">Home-Cooked Meals</h2>
            <p className="option-description">Discover delicious home-cooked meals near you</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;