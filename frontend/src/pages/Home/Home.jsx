import { Link } from "react-router-dom";
import React from "react";
import "./Home.css"; // Adjust the path as necessary
import Testimonials from "../../sections/testimonial/testimonial";
import GetStarted from "../../sections/GetStarted/GetStarted";
import missionImage from "C:/Desktop/new/DesignHer-MindBloom/frontend/src/assets/mission.jpg";
import moodImage from "C:/Desktop/new/DesignHer-MindBloom/frontend/src/assets/impact/moods logged.jpg";
import journalImage from "C:/Desktop/new/DesignHer-MindBloom/frontend/src/assets/impact/download.jpg";
import meditationImage from "C:/Desktop/new/DesignHer-MindBloom/frontend/src/assets/impact/meditation complete.png";
import moodImage2 from "C:/Desktop/new/DesignHer-MindBloom/frontend/src/assets/explore/Mood tracker (2).jpg";
import journalImage2 from "C:/Desktop/new/DesignHer-MindBloom/frontend/src/assets/explore/journalling.jpg";
import meditationImage2 from "C:/Desktop/new/DesignHer-MindBloom/frontend/src/assets/explore/meditation.jpg";

function Home() {
  return (
    <div>
      <section className="hero" aria-label="MindBloom introduction">
        <div className="hero-content">
          <h1>Nurture Your Mind with MindBloom</h1>
          <p>Track moods, journal thoughts, and find calm through meditation.</p>
          <div className="button-group">
            <Link to="/mood-tracker" className="button">Log Your Mood</Link>
            <Link to="/journal" className="button">Write in Journal</Link>
            <Link to="/meditations" className="button">Explore Meditations</Link>
          </div>
        </div>
      </section>

      <section className="mission" aria-label="MindBloom mission">
        <div className="mission-container">
          <div className="mission-image">
            <img src={missionImage} alt="Female engineer in a calm workspace" />
          </div>
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              MindBloom empowers female engineering students to prioritize their mental wellness with intuitive tools designed for mindfulness, reflection, and stress relief.
            </p>
            <p>
              We provide a nurturing space where young women can overcome academic pressures and embrace a balanced life through guided meditations, journaling prompts, and motivational insights.
            </p>
            <p>
              Our goal is to foster resilience and support the next generation of female engineers to thrive holistically with a feminine, community-driven approach.
            </p>
          </div>
        </div>
      </section>

      <section className="impact" aria-label="MindBloom impact">
        <div className="impact-container">
          <h2>Our Impact</h2>
          <div className="impact-cards">
            <div className="impact-card">
              <img src={moodImage} alt="Mood tracking illustration" />
              <p><strong>10,000+</strong> </p> <p>Moods Logged</p>
            </div>
            <div className="impact-card">
              <img src={journalImage} alt="Journaling illustration" />
              <p><strong>5,000+</strong> </p> <p>Journal Entries</p>
            </div>
            <div className="impact-card">
              <img src={meditationImage} alt="Meditation illustration" />
              <p><strong>3,000+</strong></p> <p> Meditations Completed</p>
            </div>
          </div>
        </div>
      </section>

      <section className="explore" aria-label="Explore MindBloom">
      <div className="explore-container">
        <h2>Explore MindBloom</h2>
        <div className="explore-cards">
          <div className="explore-card">
            <img src={moodImage2} alt="Mood Tracker illustration" />
            <h3>Mood Tracker</h3>
            <p>Log daily moods and visualize trends to understand your emotional well-being.</p>
            <Link to="/mood-tracker" className="explore-button">Explore</Link>
          </div>
          <div className="explore-card">
            <img src={journalImage2} alt="Journaling illustration" />
            <h3>Journaling</h3>
            <p>Write thoughts with inspiring prompts, saved securely in your browser.</p>
            <Link to="/journal" className="explore-button">Explore</Link>
          </div>
          <div className="explore-card">
            <img src={meditationImage2} alt="Meditations illustration" />
            <h3>Meditations</h3>
            <p>Explore guided meditation scripts to find calm and focus.</p>
            <Link to="/meditations" className="explore-button">Explore</Link>
          </div>
        </div>
      </div>
    </section>

    <section className="testimonials" aria-label="User Testimonials">
      <div className="testimonials-container">
        <h2>What Our Users Say</h2>
        <Testimonials />
      </div>
    </section>  

      <section className="get-started" aria-label="Get Started with MindBloom">
        
          <GetStarted />
        
      </section>    
    </div>
  );
}

export default Home;