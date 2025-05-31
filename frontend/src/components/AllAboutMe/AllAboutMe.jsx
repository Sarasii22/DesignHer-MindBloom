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
        <div className="input-section hobbies-white">
          <h2>My Hobbies</h2>
          <textarea placeholder="Write about your hobbies here..."></textarea>
        </div>
        <img src={astronautIcon} alt="Astronaut" className="doodle-icon" />
        <div className="input-section personal-info">
          <div className="name">
            <label htmlFor="name">Name:</label>
            <input id="name" placeholder="Enter your name"></input>
            
          </div>
          <div className="age">
            <label htmlFor="age">Age:</label>
            <input id="age" placeholder="Enter your age"></input>
          </div>
          <div className="address">
            <label htmlFor="address">Address:</label>
            <input id="address" placeholder="Enter your address"></input>
          </div>
        </div>
      </div>
      <div className="section fun-likes-favorites">
        <div className="left-sections">
          <div className="section fun-facts">
            <div className="input-section pink-section">
              <h2>Fun Facts About Me</h2>
              <textarea placeholder="Write a fun fact here..."></textarea>
              <textarea placeholder="Write a fun fact here..."></textarea>
              <textarea placeholder="Write a fun fact here..."></textarea>
            </div>
          </div>
          <div className="section likes">
            <img src={ghostSmileyIcon} alt="Ghost Smiley" className="doodle-icon" />
            <div className="input-section likes-white">
              <h2>Likes</h2>
              <textarea placeholder="Write what you like here..."></textarea>
              <textarea placeholder="Write what you like here..."></textarea>
              <textarea placeholder="Write what you like here..."></textarea>
            </div>
          </div>
        </div>
        <div className="section favorites">
          <div className="input-section favorites-white">
            <h2>My Favorites</h2>
            <div className="labeled-input">
              <label>Color :</label>
              <textarea placeholder="Your favorite color..."></textarea>
            </div>
            <div className="labeled-input">
              <label>Food :</label>
              <textarea placeholder="Your favorite food..."></textarea>
            </div>
            <div className="labeled-input">
              <label>Pet :</label>
              <textarea placeholder="Your favorite pet..."></textarea>
            </div>
            <div className="labeled-input">
              <label>Music :</label>
              <textarea placeholder="Your favorite music..."></textarea>
            </div>
            <div className="labeled-input">
              <label>Place :</label>
              <textarea placeholder="Your favorite place..."></textarea>
            </div>
            <div className="labeled-input">
              <label>Sport :</label>
              <textarea placeholder="Your favorite sport..."></textarea>
            </div>
            <div className="labeled-input">
              <label>Subject :</label>
              <textarea placeholder="Your favorite subject..."></textarea>
            </div>
          </div>
          <img src={heartIcon} alt="Heart" className="doodle-icon" />
        </div>
      </div>
      <div className="section future">
        <img src={ghostHappyIcon} alt="Ghost Happy" className="doodle-icon" />
        <div className="input-section pink-section">
          <h2>When I Grow Up I Want To Be</h2>
          <textarea placeholder="Write your dream here..."></textarea>
          <textarea placeholder="Write your dream here..."></textarea>
          <textarea placeholder="Write your dream here..."></textarea>
        </div>
      </div>
    </div>
  );
};

export default AllAboutMe;