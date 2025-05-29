import React, { useState } from 'react';
import './VisionBoard.css';
import cameraIcon from 'C:/Desktop/new/DesignHer-MindBloom/frontend/src/assets/journal/camera.png'; // Adjust path as needed

const VisionBoard = () => {
  const [images, setImages] = useState(Array(19).fill(null)); // State for 19 cells

  const handleImageUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const newImages = [...images];
      newImages[index] = imageUrl;
      setImages(newImages);
    }
  };

  // Motivational phrases for specific cells
  const phrases = {
    0: "ALWAYS WIN",
    2: "I AM FOCUSED",
    4: "KEEP GOING",
    5: "I AM DISCIPLINED",
    9: "I CAN, AND I WILL",
    14: "I AM A FAST LEARNER",
    18: "I WILL CREATE THE LIFE I WANT"
  };

  return (
    <div className="vision-board-container">
      <div className="vision-grid">
        {Array.from({ length: 19 }).map((_, index) => (
          <div key={index} className={`grid-cell cell-${index}`}>
            <h2 className={`phrase ${phrases[index] ? 'visible' : ''}`}>
              {phrases[index] || ""}
            </h2>
            {images[index] ? (
              <img src={images[index]} alt="Uploaded" className="uploaded-image" />
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
        <div className="center-text">
          <h1>____ IS MY YEAR...</h1>
        </div>
      </div>
    </div>
  );
};

export default VisionBoard;