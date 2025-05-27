import React from 'react';
import AllAboutMe from '../../components/AllAboutMe/AllAboutMe'; // Adjust the import path as necessary
import './Journal.css'; // Import the CSS for the journal page

const JournalPage = () => {
  return (
    <div className="journal-page">
      <h1 className="journal-title">My Journal</h1>
      <div className="journal-content">
        <AllAboutMe /> {/* Embed the AllAboutMe worksheet */}
        <div className="empty-space">
          {/* Additional journal content can go here */}
          <p>Start writing your thoughts here...</p>
        </div>
      </div>
    </div>
  );
};

export default JournalPage;