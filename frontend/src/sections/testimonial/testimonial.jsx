import React, { useState, useEffect } from "react";
import "./testimonial.css"
import aisha from "C:/Desktop/MindBloom_competition/MindBloom/frontend/src/assets/people/1.jpg";
import priya from "C:/Desktop/MindBloom_competition/MindBloom/frontend/src/assets/people/2.jpg";
import emily from "C:/Desktop/MindBloom_competition/MindBloom/frontend/src/assets/people/3.jpg";
import sana from "C:/Desktop/MindBloom_competition/MindBloom/frontend/src/assets/people/4.jpg";
import lara from "C:/Desktop/MindBloom_competition/MindBloom/frontend/src/assets/people/5.jpg";
import maya from "C:/Desktop/MindBloom_competition/MindBloom/frontend/src/assets/people/6.jpg";

function Testimonials() {
  const testimonials = [
    {
      quote: "MindBloom has been a game-changer for me during late-night coding sessions. The guided meditations and journaling prompts help me manage stress and stay focused—I feel more balanced and inspired!",
      name: "Aisha Patel",
      role: "Computer Science Student",
      image: aisha,
    },
    {
      quote: "As an engineering student, I often feel overwhelmed, but MindBloom’s mindfulness tools have given me a safe space to reflect and recharge. The feminine design makes it so welcoming!",
      name: "Priya Sharma",
      role: "Electrical Engineering Student",
      image: priya,
    },
    {
      quote: "I love how MindBloom empowers me to prioritize my mental health. The motivational quotes and coaching tips on the Meditation Page keep me grounded amidst my hectic internship schedule.",
      name: "Emily Kaur",
      role: "Software Engineering Student",
      image: emily,
    },
    {
      quote: "I love how MindBloom creates a safe space for female engineers to focus on wellness. MindBloom’s journaling feature lets me process my thoughts after a long day of labs. It’s like having a supportive friend that reminds me to take care of myself!",
      name: "Sana Khan",
      role: "Mechanical Engineering Student",
      image: sana,
    },
    {
      quote: "MindBloom’s intuitive tools have transformed how I handle stress during exams. The floral designs and coaching tips make self-care feel fun and empowering—I’m so grateful for this platform!",
      name: "Lara Singh",
      role: "Civil Engineering Student",
      image: lara,
    },
    {
      quote: "The personalized experience on MindBloom makes me feel seen as a female engineer. The stress relief tools and beautiful design have helped me find peace during my final year projects.",
      name: "Maya Reddy",
      role: "Aerospace Engineering Student",
      image: maya,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Slide changes every 5 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="testimonials" aria-label="Testimonials">
      <div className="testimonials-container">
       
        <div className="testimonials-slider">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-slide ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <div className="testimonial-profile">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="profile-image"
                />
                <div className="profile-info">
                  <p className="name">{testimonial.name}</p>
                  <p className="role">{testimonial.role}</p>
                </div>
              </div>
              <p className="quote">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
        <div className="slider-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;