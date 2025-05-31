import React, { useState, useEffect } from 'react';
import './MeditationPage.css'; // Adjust the path as necessary
import doodleZen from 'C:/Desktop/new/DesignHer-MindBloom/frontend/src/assets/journal/yoga.png'; // Placeholder path
import doodleLotus from 'C:/Desktop/new/DesignHer-MindBloom/frontend/src/assets/journal/lotus-flower.png'; // Placeholder path

const MeditationPage = () => {
  const [time, setTime] = useState(300); // Default 5 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [reflection, setReflection] = useState('');
  const [selectedTrack, setSelectedTrack] = useState(null);

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsActive(false);
      alert('Meditation session complete!');
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleStartStop = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(300); // Reset to 5 minutes
  };

  const handleReflectionChange = (e) => {
    setReflection(e.target.value);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const audioTracks = [
    { id: 1, title: 'Calm Flute', src: 'C:/Desktop/new/DesignHer-MindBloom/frontend/src/assets/music/eastern-guitar-and-flute-292114.mp3' }, // Placeholder path
    { id: 2, title: 'Nature', src: 'C:/Desktop/new/DesignHer-MindBloom/frontend/src/assets/music/nature-documentary-309042.mp3' }, // Placeholder path
    { id: 3, title: 'Gentle Rain', src: 'C:/Desktop/new/DesignHer-MindBloom/frontend/src/assets/music/gentle-rain-for-relaxation-and-sleep-337279.mp3' }, // Placeholder path
  ];

  const handleTrackSelect = (track) => {
    setSelectedTrack(track);
  };

  return (
    <div className="meditation-page">
      <h1 className="meditation-title">Mindful Meditation</h1>
      <div className="meditation-content">
        <div className="timer-section">
          <img src={doodleZen} alt="Zen Doodle" className="doodle-icon zen-doodle" />
          <h2>Meditation Timer</h2>
          <div className="timer-display">{formatTime(time)}</div>
          <div className="timer-buttons">
            <button onClick={handleStartStop} className="timer-button">
              {isActive ? 'Pause' : 'Start'}
            </button>
            <button onClick={handleReset} className="timer-button reset-button">
              Reset
            </button>
          </div>
        </div>
        
        <div className="guided-prompts">
          <h2>Guided Prompts</h2>
          <ul className="prompts-list">
            <li>Take a deep breath and feel the air fill your lungs.</li>
            <li>Notice the sounds around you without judgment.</li>
            <li>Focus on a place that brings you peace.</li>
            <li>Release any tension in your shoulders with each exhale.</li>
            <li>Visualize a warm light spreading through your body.</li>
          </ul>
        </div>
        <div className="audio-section">
          <h2>Soothing Sounds</h2>
          <div className="track-selection">
            {audioTracks.map((track) => (
              <button
                key={track.id}
                onClick={() => handleTrackSelect(track)}
                className={`track-button ${selectedTrack?.id === track.id ? 'selected' : ''}`}
              >
                {track.title}
              </button>
            ))}
          </div>
          {selectedTrack && (
            <audio controls className="audio-player">
              <source src={selectedTrack.src} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
        <div className="reflection-section">
          <h2>Post-Meditation Reflection</h2>
          <textarea
            value={reflection}
            onChange={handleReflectionChange}
            placeholder="Write your thoughts or feelings after meditating..."
            className="reflection-textarea"
          />
          <img src={doodleLotus} alt="Lotus Doodle" className="doodle-icon lotus-doodle" />
        </div>
      </div>
    </div>
  );
};

export default MeditationPage;