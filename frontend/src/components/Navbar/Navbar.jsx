import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down and past 50px
        setIsVisible(false);
      } else {
        // Scrolling up or at the top
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={isVisible ? 'visible' : 'hidden'} aria-label="Main navigation">
      <div className="container">
        <h1>MindBloom</h1>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} aria-current="page">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/mood-tracker" className={({ isActive }) => isActive ? 'active' : ''}>
              Mood Tracker
            </NavLink>
          </li>
          <li>
            <NavLink to="/journal" className={({ isActive }) => isActive ? 'active' : ''}>
              Journal
            </NavLink>
          </li>
          <li>
            <NavLink to="/meditations" className={({ isActive }) => isActive ? 'active' : ''}>
              Meditations
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;