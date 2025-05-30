import React from 'react';
import AllAboutMe from '../../components/AllAboutMe/AllAboutMe'; // Adjust the import path as necessary
import './Journal.css'; // Adjust the path as necessary
import VisionBoard from '../../components/VisionBoard/VisionBoard';
import PlannerApp from '../../components/PlannerApp/PlannerApp';

const JournalPage = () => {
  return (
    <div className="journal-page">
      <h1 className="journal-title">My Journal</h1>
      <div className="journal-content">
        <AllAboutMe /> {/* Embed the AllAboutMe worksheet */}
        <VisionBoard /> {/* Embed the VisionBoard component */}
        <PlannerApp /> {/* Embed the PlannerApp component */}
      </div>
    </div>
  );
};

export default JournalPage;