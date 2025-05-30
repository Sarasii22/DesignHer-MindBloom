import React, { useState } from 'react';
import './VisionBoard.css';
import cameraIcon from 'C:/Desktop/new/DesignHer-MindBloom/frontend/src/assets/journal/camera.png'; // Adjust path as needed


const VisionBoard = () => {
  const [photos, setPhotos] = useState(Array(48).fill(null)); // 6x8 grid = 48 frames

  const handleImageUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const newPhotos = [...photos];
      newPhotos[index] = { url: imageUrl, width: 150, height: 150 }; // Fixed size for grid consistency
      setPhotos(newPhotos);
    }
  };

  const phrases = [
    { text: " I ALWAYS WIN", left: 150, top: 150, purple: false },
    { text: "I AM FOCUSED", left: 900, top: 0, purple: true },
    { text: "KEEP GOING", left: 600, top: 290, purple: false },
    { text: "I AM DISCIPLINED", left: 0, top: 425, purple: true },
    { text: "I CAN, AND I WILL", left: 150, top: 890, purple: false },
    { text: "I AM A FAST LEARNER", left: 700, top: 880, purple: true },
    { text: "I WILL CREATE THE LIFE I WANT", left: 500, top: 1155, purple: false },
  ];

  return (
    <div className="vision-board-container">
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="photo-container"
            style={{ zIndex: photo ? index + 1 : 1 }}
          >
            {photo ? (
              <img src={photo.url} alt="Uploaded" className="uploaded-image" />
            ) : (
              <label className="camera-label">
                <img src={cameraIcon} alt="Camera" className="camera-icon" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(index, e)}
                  style={{ display: 'none' }}
                />
              </label>
            )}
          </div>
        ))}
      </div>
      {phrases.map((phrase, index) => (
        <div
          key={index}
          className={`phrase ${phrase.purple ? 'purple' : ''}`}
          style={{ left: phrase.left, top: phrase.top }}
        >
          {phrase.text}
        </div>
      ))}
      <div className="center-text">
        <textarea placeholder='Year'></textarea>
        <h1> IS MY YEAR...</h1>
      </div>
    </div>
  );
};

export default VisionBoard;