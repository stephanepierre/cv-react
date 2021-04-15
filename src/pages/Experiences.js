import React from 'react';
import ExperiencesBlock from '../components/Experiences';
import Navigation from '../components/Navigation';

const Experiences = () => {
  return (
    <div className="experiences">
      <Navigation />
      <div className="experiencesContent">
        <ExperiencesBlock />
      </div>
    </div>
  );
};

export default Experiences;