import React from 'react';
import './AllAboutMe.css';
import Astronaut from 'C:/Desktop/new/DesignHer-MindBloom/frontend/src/assets/journal/astronaut.jpg';
import Ghost from 'C:/Desktop/new/DesignHer-MindBloom/frontend/src/assets/journal/star_12369058.png';
import Heart from 'C:/Desktop/new/DesignHer-MindBloom/frontend/src/assets/journal/love_13555602.png';

const AllAboutMe = () => {
  return (
    <div className="all-about-me-container">
      <h1>All About Me</h1>
      <div className="section">
        <div className="box hobbies">
          <h3>My Hobbies</h3>
          <div className="lines"></div>
          <img src={Astronaut} alt="Astronaut" className="doodle astronaut" />
        </div>
        <div className="box name">Name</div>
        <div className="box age">Age</div>
        <div className="box address">Address</div>
      </div>
      <div className="section">
        <div className="box fun-facts">
          <h3>Fun Facts About Me</h3>
          <div className="lines"></div>
        </div>
        <div className="box likes">
          <h3>Likes</h3>
          <div className="lines"></div>
          <img src={Ghost} alt="Ghost" className="doodle ghost-left" />
        </div>
        <div className="box favorites">
          <h3>My Favorite</h3>
          <ul>
            <li>Color :</li>
            <li>Food :</li>
            <li>Music :</li>
            <li>Season :</li>
            <li>Place :</li>
            <li>Sport :</li>
            <li>Subject :</li>
          </ul>
        </div>
      </div>
      <div className="section">
        <div className="box grow-up">
          <h3>When I Grow Up I Want To Be</h3>
          <div className="lines"></div>
          <img src={Ghost} alt="Ghost" className="doodle ghost-bottom" />
        </div>
        <img src={Heart} alt="Heart" className="doodle heart" />
      </div>
    </div>
  );
};

export default AllAboutMe;