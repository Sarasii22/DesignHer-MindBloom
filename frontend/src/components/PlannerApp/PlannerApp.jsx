import React, { useState, useEffect } from 'react';
import './PlannerApp.css'; // Adjust the path as necessary
import doodleStarLeft from 'C:/Desktop/new/DesignHer-MindBloom/frontend/src/assets/journal/camera.png'; // Adjust the path as necessary
import doodleStarRight from './doodle-star-right.png';
import doodleLeaf from './doodle-leaf.png';
import doodleHeart from './doodle-heart.png';
import doodleFlower from './doodle-flower.png';
import calendarIcon from './calendar-icon.png';

const PlannerApp = () => {
  const [currentPlanner, setCurrentPlanner] = useState('Daily Planner');
  const [selectedDate, setSelectedDate] = useState(new Date());
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
      <div className="absolute top-20 right-0 bg-white p-4 shadow-lg rounded z-10">
        <div className="flex justify-between mb-2">
          <button onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1))}>Prev</button>
          <span>{selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
          <button onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1))}>Next</button>
        </div>
        <div className="grid grid-cols-7 gap-1">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="text-center font-bold">{day}</div>
          ))}
          {blanks.map((_, i) => <div key={`blank-${i}`} />)}
          {days.map((day) => (
            <button
              key={day}
              onClick={() => handleDateChange(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day))}
              className={`p-2 ${selectedDate.getDate() === day ? 'bg-pink-300' : 'bg-gray-100'} rounded`}
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
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <div className="flex space-x-4 mb-6 relative">
        <img src={doodleStarLeft} alt="Star Left" className="absolute left-[-40px] top-0 w-8 h-8" />
        <button onClick={() => handlePlannerChange('Daily Planner')} className="bg-pink-200 px-4 py-2 rounded">Daily Planner</button>
        <button onClick={() => handlePlannerChange('Weekly Planner')} className="bg-pink-200 px-4 py-2 rounded">Weekly Planner</button>
        <button onClick={() => handlePlannerChange('Monthly Planner')} className="bg-pink-200 px-4 py-2 rounded">Monthly Planner</button>
        <img src={doodleStarRight} alt="Star Right" className="absolute right-[-40px] top-0 w-8 h-8" />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{currentPlanner}</h2>
          <div className="flex items-center space-x-2">
            <span className="text-pink-300">Date: {selectedDate.toLocaleDateString()}</span>
            <img
              src={calendarIcon}
              alt="Calendar"
              className="w-6 h-6 cursor-pointer"
              onClick={() => setShowCalendar(!showCalendar)}
            />
          </div>
        </div>
        {showCalendar && renderCalendar()}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-purple-100 p-4 rounded relative">
            <h3 className="font-semibold">Things to Do</h3>
            <textarea
              value={plannerData.thingsToDo}
              onChange={(e) => handleInputChange('thingsToDo', e.target.value)}
              className="w-full h-32 p-2 border rounded"
              placeholder="• Item 1\n• Item 2"
            />
            <img src={doodleLeaf} alt="Leaf" className="absolute bottom-2 left-2 w-6 h-6" />
          </div>
          <div className="bg-pink-100 p-4 rounded relative ml-[15px]">
            <h3 className="font-semibold">Extra Goals</h3>
            <textarea
              value={plannerData.extraGoals}
              onChange={(e) => handleInputChange('extraGoals', e.target.value)}
              className="w-full h-32 p-2 border rounded"
            />
            <img src={doodleHeart} alt="Heart" className="absolute top-2 right-2 w-6 h-6" />
          </div>
          <div className="bg-purple-100 p-4 rounded relative">
            <h3 className="font-semibold">Notes to Self</h3>
            <textarea
              value={plannerData.notesToSelf}
              onChange={(e) => handleInputChange('notesToSelf', e.target.value)}
              className="w-full h-32 p-2 border rounded"
            />
            <img src={doodleFlower} alt="Flower" className="absolute bottom-2 left-2 w-6 h-6" />
          </div>
          <div className="ml-[5px]">
            <div className="bg-purple-200 p-4 rounded mb-2">
              <h3 className="font-semibold text-white">Love Yourself More</h3>
            </div>
            <div className="bg-pink-100 p-4 rounded">
              <h3 className="font-semibold">{forNextLabel}</h3>
              <textarea
                value={plannerData.forNext}
                onChange={(e) => handleInputChange('forNext', e.target.value)}
                className="w-full h-16 p-2 border rounded"
                placeholder="• Item 1\n• Item 2"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <button onClick={handleSave} className="bg-pink-300 px-4 py-2 rounded">save</button>
          <button onClick={() => setShowSaved(!showSaved)} className="bg-gray-200 px-4 py-2 rounded">
            {showSaved ? 'Hide Saved Planners' : 'Show Saved Planners'}
          </button>
        </div>
        {showSaved && (
          <div className="mt-4">
            <h3 className="font-semibold">Saved Planners</h3>
            <ul className="list-disc pl-5">
              {Object.keys(savedPlanners).map((key) => (
                <li
                  key={key}
                  onClick={() => {
                    const [planner, date] = key.split('_');
                    setCurrentPlanner(planner);
                    setSelectedDate(new Date(date));
                    setShowSaved(false);
                  }}
                  className="cursor-pointer text-blue-500"
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