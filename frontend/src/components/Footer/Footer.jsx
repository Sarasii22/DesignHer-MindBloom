import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'; // Ensure you have a CSS file for styling


import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"; // Example import, adjust as needed
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa"; // Example social icons

function Footer() {
  return (
    <footer aria-label="Footer">
      <div className="footer-container">
        <div className="footer-section">
          <h1>MindBloom</h1>
          <p>Empowering female engineering students to prioritize mental wellness with intuitive tools for mindfulness, reflection, and stress relief.</p>
          <div className="social-icons">
            <FaFacebookF />
            <FaYoutube />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/mood-tracker">Mood Tracker</Link></li>
            <li><Link to="/journal">Journal</Link></li>
            <li><Link to="/meditations">Meditation</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li><FaEnvelope /> mindbloom@gmail.com</li>
            <li><FaPhone /> +94 71 256 4599</li>
            <li><FaMapMarkerAlt /> MindBloom Pvt LTD, Colombo 10</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>©copyright 2025 MindBloom. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;