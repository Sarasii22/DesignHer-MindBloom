import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './MoodTracker.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [notes, setNotes] = useState('');
  const [moods, setMoods] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('moods')) || [];
    } catch (e) {
      console.error('Failed to parse moods from localStorage:', e);
      return [];
    }
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const moodOptions = [
    { name: 'Happy', emoji: '😊', message: 'I’m happy today, hope all are going good!' },
    { name: 'Neutral', emoji: '😐', message: 'Feeling steady and balanced today.' },
    { name: 'Stressed', emoji: '😓', message: 'A bit overwhelmed, but pushing through.' },
    { name: 'Anxious', emoji: '😟', message: 'Feeling uneasy, need some calm.' },
    { name: 'Excited', emoji: '😄', message: 'Buzzing with energy and enthusiasm!' },
    { name: 'Sad', emoji: '😢', message: 'Feeling a bit down today.' },
    { name: 'Angry', emoji: '😣', message: 'Frustrated, need to cool off.' },
    { name: 'Relaxed', emoji: '😌', message: 'Chilled out and at peace.' },
    { name: 'Inspired', emoji: '🌟', message: 'Feeling creative and motivated!' },
    { name: 'Content', emoji: '🙂', message: 'Feeling satisfied and at ease.' },
    { name: 'Bored', emoji: '😒', message: 'Feeling a bit restless and uninspired.' },
    { name: 'Confused', emoji: '😕', message: 'Feeling puzzled and unsure today.' },
  ];

  const logMood = () => {
    if (!selectedMood) return;
    const newMood = { mood: selectedMood.name, notes, date: new Date().toISOString() };
    const updatedMoods = [...moods, newMood];
    setMoods(updatedMoods);
    localStorage.setItem('moods', JSON.stringify(updatedMoods));
    setSelectedMood(null);
    setNotes('');
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  const chartData = {
    labels: moods.slice(-7).map(m => new Date(m.date).toLocaleDateString()),
    datasets: [
      {
        label: 'Mood Score',
        data: moods.slice(-7).map(m => ({
          Happy: 9,
          Excited: 8,
          Inspired: 7,
          Relaxed: 6,
          Content: 5.5,
          Neutral: 5,
          Sad: 4,
          Bored: 3.5,
          Stressed: 3,
          Anxious: 2,
          Confused: 1.5,
          Angry: 1,
        }[m.mood] || 5)),
        borderColor: '#6A5ACD',
        backgroundColor: 'rgba(106, 90, 205, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const moodCounts = moods.reduce((acc, m) => {
    acc[m.mood] = (acc[m.mood] || 0) + 1;
    return acc;
  }, {});
  const mostCommonMood = Object.entries(moodCounts).reduce((a, b) => (b[1] > a[1] ? b : a), ['', 0])[0];
  const averageScore = moods.length
    ? (moods.reduce((sum, m) => sum + ({
        Happy: 9,
        Excited: 8,
        Inspired: 7,
        Relaxed: 6,
        Content: 5.5,
        Neutral: 5,
        Sad: 4,
        Bored: 3.5,
        Stressed: 3,
        Anxious: 2,
        Confused: 1.5,
        Angry: 1,
      }[m.mood] || 5), 0) / moods.length).toFixed(1)
    : 0;

  return (
    <div className="mood-tracker-page">
      <div className="container">
        <h2>Mood Tracker</h2>
        {showSuccess && <div className="success-message">Mood logged successfully!</div>}

        <div className="mood-grid">
          {moodOptions.map((mood) => (
            <div
              key={mood.name}
              className={`mood-card ${selectedMood?.name === mood.name ? 'selected' : ''}`}
              onClick={() => setSelectedMood(mood)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedMood(mood)}
            >
              <span className="emoji">{mood.emoji}</span>
              <span className="mood-name">{mood.name}</span>
              <span className="mood-tooltip">{mood.message}</span>
            </div>
          ))}
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add notes (optional)"
          />
          <button
            type="button"
            className="button"
            onClick={logMood}
            disabled={!selectedMood}
          >
            Save Mood
          </button>
        </form>

        {selectedMood && (
          <div className="selected-mood" role="status" aria-live="polite">
            <span className="emoji">{selectedMood.emoji}</span>
            <span>{selectedMood.message}</span>
          </div>
        )}

        {moods.length > 0 && (
          <>
            <section className="stats-section">
              <h2>Mood Stats</h2>
              <div className="stats-grid">
                <div className="stat-card">
                  <h3>{moods.length}</h3>
                  <p>Total Moods</p>
                </div>
                <div className="stat-card">
                  <h3>{mostCommonMood || 'N/A'}</h3>
                  <p>Most Common</p>
                </div>
                <div className="stat-card">
                  <h3>{averageScore}/9</h3>
                  <p>Average Score</p>
                </div>
              </div>
            </section>

            <div className="chart-card">
              <h3>Mood Trends</h3>
              <Line
                data={chartData}
                options={{
                  scales: {
                    y: {
                      beginAtZero: true,
                      max: 9,
                      title: { display: true, text: 'Mood Score' },
                    },
                    x: { title: { display: true, text: 'Date' } },
                  },
                  plugins: {
                    legend: { display: true },
                    tooltip: { enabled: true },
                  },
                }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default MoodTracker;