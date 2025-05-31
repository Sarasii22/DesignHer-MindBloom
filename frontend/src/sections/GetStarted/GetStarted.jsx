import React from "react";
import { Link } from "react-router-dom";
import "./GetStarted.css"; // Adjust the path as necessary

function GetStarted() {
  return (
    <section className="get-started" aria-label="Get Started Section">
      <div className="get-started-container">
        <h1>Start Your Wellness Journey</h1>
        <p>Join thousands of students using MindBloom to nurture their mental health.</p>
        <Link to="/journal" className="get-started-button">
          Get Started Now
        </Link>
      </div>
    </section>
  );
}

export default GetStarted;