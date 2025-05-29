import React from 'react';
import './AllAboutMe.css';
import astronautIcon from 'C:/Desktop/new/DesignHer-MindBloom/frontend/src/assets/journal/astronaut.jpg';
import heartIcon from 'C:/Desktop/new/DesignHer-MindBloom/frontend/src/assets/journal/love_13555602.png';
import ghostHappyIcon from 'C:/Desktop/new/DesignHer-MindBloom/frontend/src/assets/journal/melting_13879044.png';
import ghostSmileyIcon from 'C:/Desktop/new/DesignHer-MindBloom/frontend/src/assets/journal/witch_16086401.png';


const AllAboutMe = () => {
  return (
    <div className="all-about-me-container">
      <h1>All About Me</h1>
      <div className="section hobbies">
        <div className="input-section">
          <h2>My Hobbies</h2>
          <textarea placeholder="Write about your hobbies here..."></textarea>
        </div>
        <img src={astronautIcon} alt="Astronaut" className="doodle-icon" />
        <div className="input-section personal-info">
          <div className="name">
            <label htmlFor="name">Name:</label>
            <textarea id="name" placeholder="Enter your name"></textarea>
          </div>
          <div className="age">
            <label htmlFor="age">Age:</label>
            <textarea id="age" placeholder="Enter your age"></textarea>
          </div>
          <div className="address">
            <label htmlFor="address">Address:</label>
            <textarea id="address" placeholder="Enter your address"></textarea>
          </div>
        </div>
      </div>
      <div className="section fun-likes-favorites">
        <div className="left-sections">
          <div className="section fun-facts">
            <div className="input-section">
              <h2>Fun Facts About Me</h2>
              <input type="text" placeholder="Write a fun fact here..." />
              <input type="text" placeholder="Write a fun fact here..." />
            </div>
          </div>
          <div className="section likes">
            <img src={ghostSmileyIcon} alt="Ghost Smiley" className="doodle-icon" />
            <div className="input-section">
              <h2>Likes</h2>
              <input type="text" placeholder="Write what you like here..." />
              <input type="text" placeholder="Write what you like here..." />
            </div>
          </div>
        </div>
        <div className="section favorites">
          <div className="input-section">
            <h2>My Favorite</h2>
            <div className="labeled-input">
              <label>Color :</label>
              <input type="text" placeholder="Your favorite color..." />
            </div>
            <div className="labeled-input">
              <label>Food :</label>
              <input type="text" placeholder="Your favorite food..." />
            </div>
            <div className="labeled-input">
              <label>Pet :</label>
              <input type="text" placeholder="Your favorite pet..." />
            </div>
            <div className="labeled-input">
              <label>Music :</label>
              <input type="text" placeholder="Your favorite music..." />
            </div>
            <div className="labeled-input">
              <label>Place :</label>
              <input type="text" placeholder="Your favorite place..." />
            </div>
            <div className="labeled-input">
              <label>Sport :</label>
              <input type="text" placeholder="Your favorite sport..." />
            </div>
            <div className="labeled-input">
              <label>Subject :</label>
              <input type="text" placeholder="Your favorite subject..." />
            </div>
          </div>
          <img src={heartIcon} alt="Heart" className="doodle-icon" />
        </div>
      </div>
      <div className="section future">
        <img src={ghostHappyIcon} alt="Ghost Happy" className="doodle-icon" />
        <div className="input-section">
          <h2>When I Grow Up I Want To Be</h2>
          <input type="text" placeholder="Write your dream here..." />
          <input type="text" placeholder="Write your dream here..." />
        </div>
      </div>
    </div>
  );
};

export default AllAboutMe;