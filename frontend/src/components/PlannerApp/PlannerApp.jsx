import React, { useState, useEffect } from 'react';
import './PlannerApp.css';
import doodleStarLeft from '../../assets/journal/star_12369058.png';
import doodleStarRight from '../../assets/journal/star_12369058.png';
import doodleLeaf from '../../assets/journal/nature.png';
import doodleHeart from '../../assets/journal/love_13555602.png';
import doodleFlower from '../../assets/journal/flower.png';
import calendarIcon from '../../assets/journal/calendar.png';

const PlannerApp = () => {
  const [currentPlanner, setCurrentPlanner] = useState('Daily Planner');
  const [selectedDate, setSelectedDate] = useState(new Date('2025-05-30T19:02:00+0530'));
  const [showCalendar, setShowCalendar] = useState(false);
  const [plannerData, setPlannerData] = useState({
    thingsToDo: '', extraGoals: '', notesToSelf: '', forNext: ''
  });
  const [savedPlanners, setSavedPlanners] = useState({});
  const [showSaved, setShowSaved] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(`${currentPlanner}_${selectedDate.toISOString().split('T')[0]}`);
    if (saved) {
      setPlannerData(JSON.parse(saved));
    } else {
      setPlannerData({ thingsToDo: '', extraGoals: '', notesToSelf: '', forNext: '' });
    }
    const allSaved = JSON.parse(localStorage.getItem('allPlanners') || '{}');
    setSavedPlanners(allSaved);
  }, [currentPlanner, selectedDate]);

  const handlePlannerChange = (planner) => {
    setCurrentPlanner(planner);
    setShowCalendar(false);
    setShowSaved(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const handleInputChange = (field, value) => {
    setPlannerData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    const key = `${currentPlanner}_${selectedDate.toISOString().split('T')[0]}`;
    localStorage.setItem(key, JSON.stringify(plannerData));
    const allSaved = { ...savedPlanners, [key]: plannerData };
    localStorage.setItem('allPlanners', JSON.stringify(allSaved));
    setSavedPlanners(allSaved);
    alert(`${currentPlanner} saved for ${selectedDate.toLocaleDateString()}!`);
  };

  const renderCalendar = () => {
  const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
  const firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDay }, (_, i) => i);

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button
          onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1))}
          className="calendar-nav-button"
        >
          &lt;
        </button>
        <span className="calendar-title">
          {selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </span>
        <button
          onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1))}
          className="calendar-nav-button"
        >
          &gt;
        </button>
      </div>
      <div className="calendar-grid">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="calendar-day-header">{day}</div>
        ))}
        {blanks.map((_, i) => (
          <div key={`blank-${i}`} className="calendar-blank" />
        ))}
        {days.map((day) => (
          <button
            key={day}
            onClick={() => handleDateChange(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day))}
            className={`calendar-day ${
              selectedDate.getDate() === day &&
              selectedDate.getMonth() === new Date(selectedDate.getTime()).getMonth() &&
              selectedDate.getFullYear() === new Date(selectedDate.getTime()).getFullYear()
                ? 'calendar-day-selected'
                : ''
            }`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

  const forNextLabel = currentPlanner === 'Daily Planner' ? 'For Tomorrow' : currentPlanner === 'Weekly Planner' ? 'For Next Week' : 'For Next Month';

  return (
    <div className="app-container">
      <div className="planner-buttons">
        <img src={doodleStarLeft} alt="Star Left" className="doodle-icon" />
        <button onClick={() => handlePlannerChange('Daily Planner')} className="planner-button">Daily Planner</button>
        <button onClick={() => handlePlannerChange('Weekly Planner')} className="planner-button">Weekly Planner</button>
        <button onClick={() => handlePlannerChange('Monthly Planner')} className="planner-button">Monthly Planner</button>
        <img src={doodleStarRight} alt="Star Right" className="doodle-icon" />
      </div>
      <div className="planner-container">
        <div className="planner-header">
          <h2 className="planner-title">{currentPlanner}</h2>
          <div className="date-container">
            <span className="date-text">Date: {selectedDate.toLocaleString('en-US', { weekday: 'long', hour: '2-digit', minute: '2-digit', timeZoneName: 'short', hour12: true })}</span>
            <img
              src={calendarIcon}
              alt="Calendar"
              className="calendar-icon"
              onClick={() => setShowCalendar(!showCalendar)}
            />
          </div>
        </div>
        {showCalendar && renderCalendar()}
        <div className="planner-grid">
          <div className="section things-to-do">
            <h3 className="section-title">Things to Do</h3>
            <textarea
              value={plannerData.thingsToDo}
              onChange={(e) => handleInputChange('thingsToDo', e.target.value)}
              className="section-textarea"
              placeholder="• Item 1\n• Item 2"
            />
            <img src={doodleFlower} alt="Flower" className="doodle-icon section-doodle" />
          </div>
          <div className="section extra-goals">
            <h3 className="section-title">Extra Goals</h3>
            <textarea
              value={plannerData.extraGoals}
              onChange={(e) => handleInputChange('extraGoals', e.target.value)}
              className="section-textarea"
            />
            <img src={doodleHeart} alt="Heart" className="doodle-icon section-doodle" />
          </div>
          <div className="section notes-to-self">
            <h3 className="section-title">Notes to Self</h3>
            <textarea
              value={plannerData.notesToSelf}
              onChange={(e) => handleInputChange('notesToSelf', e.target.value)}
              className="section-textarea"
            />
            <img src={doodleLeaf} alt="Leaf" className="doodle-icon section-doodle" />
          </div>
          <div className="section for-next">
            <div className="quote-section">
              <h3 className="quote-title">LOVE YOUR SELF MORE</h3>
            </div>
            <div className="for-next-section">
              <h3 className="section-title">{forNextLabel}</h3>
              <textarea
                value={plannerData.forNext}
                onChange={(e) => handleInputChange('forNext', e.target.value)}
                className="section-textarea for-next-textarea"
                placeholder="• Item 1\n• Item 2"
              />
            </div>
          </div>
        </div>
        <div className="action-buttons">
          <button onClick={handleSave} className="save-button">Save</button>
          <button onClick={() => setShowSaved(!showSaved)} className="toggle-saved-button">
            {showSaved ? 'Hide Saved Planners' : 'Show Saved Planners'}
          </button>
        </div>
        {showSaved && (
          <div className="saved-planners">
            <h3 className="saved-planners-title">Saved Planners</h3>
            <ul className="saved-planners-list">
              {Object.keys(savedPlanners).map((key) => (
                <li
                  key={key}
                  onClick={() => {
                    const [planner, date] = key.split('_');
                    setCurrentPlanner(planner);
                    setSelectedDate(new Date(date));
                    setShowSaved(false);
                  }}
                  className="saved-planner-item"
                >
                  {key}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlannerApp;