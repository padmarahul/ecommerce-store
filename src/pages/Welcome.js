import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';


function Welcome() {



  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Welcome to ArtifyAI</h1>
      <p className="welcome-text">Please login to get started.</p>
      <Link to="/login" className="login-button">Login</Link>
    </div>
  );
}

export default Welcome;
