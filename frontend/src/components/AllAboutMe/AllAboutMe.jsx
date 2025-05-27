import React from 'react';
import './AllAboutMe.css';

const AllAboutMe = () => {
  return (
    <div className="all-about-me-container">
      <h1 className="title">ALL ABOUT ME</h1>

      <div className="top-section">
        <div className="hobbies-section">
          <h2>My Hobbies</h2>
          <div className="lined-box">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="line"></div>
            ))}
          </div>
        </div>

        <div className="astronaut-placeholder">
          {/* Placeholder for astronaut image */}
          <div className="placeholder-text">[Astronaut Image]</div>
        </div>

        <div className="info-section">
          <div className="info-box">
            <h2>Name</h2>
          </div>
          <div className="info-box">
            <h2>Age</h2>
          </div>
          <div className="info-box">
            <h2>Address</h2>
          </div>
        </div>
      </div>

      <div className="middle-section">
        <div className="fun-facts-section">
          <h2>Fun Facts About Me</h2>
          <div className="lined-box">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="line"></div>
            ))}
          </div>
          <div className="ghost-left-placeholder">
            <div className="placeholder-text">[Ghost Image]</div>
          </div>
        </div>

        <div className="likes-section">
          <h2>Likes</h2>
          <div className="lined-box">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="line"></div>
            ))}
          </div>
        </div>

        <div className="favorites-section">
          <h2>My Favorite</h2>
          <ul>
            <li>Color:</li>
            <li>Food:</li>
            <li>Pet:</li>
            <li>Music:</li>
            <li>Season:</li>
            <li>Place:</li>
            <li>Sport:</li>
            <li>Subject:</li>
          </ul>
          <div className="heart-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="bottom-section">
        <div className="grow-up-section">
          <h2>When I Grow Up I Want To Be</h2>
          <div className="lined-box">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="line"></div>
            ))}
          </div>
          <div className="ghost-bottom-placeholder">
            <div className="placeholder-text">[Ghost Image]</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllAboutMe;