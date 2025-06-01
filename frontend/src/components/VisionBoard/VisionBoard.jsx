import React, { useState } from 'react';
import './VisionBoard.css';
import cameraIcon from '../../assets/journal/camera.png'; // Adjust path as needed

const VisionBoard = () => {
  // Initialize frames to spread across 1000x1200px container without gaps
  const initialPhotos = [];
  const minSize = 120; // For fewer, larger frames
  const maxSize = 220;
  const maxFrames = 35; // Reduced number of frames
  const gridCols = 6; // Anchor points for spreading
  const gridRows = 6;
  const cellWidth = 1000 / gridCols;
  const cellHeight = 1200 / gridRows;
  let zIndex = 1;

  // Function to check for overlap
  const checkOverlap = (left, top, width, height, photos) => {
    const buffer = 2; // Small buffer for edge-to-edge contact
    return photos.some(photo => (
      left < photo.left + photo.width + buffer &&
      left + width > photo.left - buffer &&
      top < photo.top + photo.height + buffer &&
      top + height > photo.top - buffer
    ));
  };

  // Generate anchor points for spreading frames
  const anchorPoints = [];
  for (let row = 0; row < gridRows; row++) {
    for (let col = 0; col < gridCols; col++) {
      anchorPoints.push({
        x: col * cellWidth + cellWidth / 2,
        y: row * cellHeight + cellHeight / 2,
      });
    }
  }
  // Shuffle anchor points for random assignment
  for (let i = anchorPoints.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [anchorPoints[i], anchorPoints[j]] = [anchorPoints[j], anchorPoints[i]];
  }

  // Place frames at anchor points
  for (let i = 0; i < maxFrames && i < anchorPoints.length; i++) {
    const width = minSize + Math.random() * (maxSize - minSize);
    const height = minSize + Math.random() * (maxSize - minSize);
    const anchor = anchorPoints[i];
    let placed = false;
    let attempts = 0;
    const maxAttempts = 20; // Reduced attempts for performance
    let left, top;

    while (!placed && attempts < maxAttempts) {
      // Small random offset from anchor for organic look
      left = anchor.x - width / 2 + (Math.random() - 0.5) * cellWidth * 0.3;
      top = anchor.y - height / 2 + (Math.random() - 0.5) * cellHeight * 0.3;
      // Ensure frame stays within container
      left = Math.max(0, Math.min(1000 - width, left));
      top = Math.max(0, Math.min(1200 - height, top));

      // Check for overlap using external function
      if (!checkOverlap(left, top, width, height, initialPhotos)) {
        initialPhotos.push({
          url: null, // Null for placeholder
          left,
          top,
          width,
          height,
          zIndex: zIndex++,
        });
        placed = true;
      }
      attempts++;
    }

    // If no valid position, place anyway to ensure coverage
    if (!placed) {
      initialPhotos.push({
        url: null,
        left,
        top,
        width,
        height,
        zIndex: zIndex++,
      });
    }
  }

  const [photos, setPhotos] = useState(initialPhotos);

  const handleImageUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const newPhotos = [...photos];
      newPhotos[index] = { ...newPhotos[index], url: imageUrl };
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
    <div className="vision-board">
      <h1 className="vision-board-title">My Vision Board</h1>
      
    <div className="vision-board-container">
      
      <div className="photo-collage">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="photo-container"
            style={{
              left: photo.left,
              top: photo.top,
              width: photo.width,
              height: photo.height,
              zIndex: photo.zIndex,
            }}
          >
            {photo.url ? (
              <img src={photo.url} alt="Uploaded" className="uploaded-image" />
            ) : (
              <label className="photo-placeholder">
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
          style={{ left: phrase.left, top: phrase.top, zIndex: 100 }}
        >
          {phrase.text}
        </div>
      ))}
      <div className="center-text">
        <textarea placeholder="Year"></textarea>
        <h1> IS MY YEAR...</h1>
      </div>
      </div>
    </div>
  );
};

export default VisionBoard;