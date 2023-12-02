import React from 'react';
import { Link } from 'react-router-dom';
//import Slider from 'react-slick';
//import 'slick-carousel/slick/slick.css';
//import 'slick-carousel/slick/slick-theme.css';
import './Welcome.css';
import caveImage from '../images/cave.jpeg';
import geminiArtImage from '../images/geminiart.jpeg';
import monaLisaImage from '../images/astronaut...jpeg';
import imh1 from '../images/vintagecar.jpeg';


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
