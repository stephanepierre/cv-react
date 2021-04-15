import React from 'react';
import Hobbies from '../components/knowledges/Hobbies';
import Languages from '../components/knowledges/Languages';
import SoftSkills from '../components/knowledges/SoftSkills';
import Navigation from '../components/Navigation';

const knowledges = () => {
  return (
    <div className="knowledges">
      <Navigation />
      <div className="knowledgesContent">
        <Languages />
        <SoftSkills />
        <Hobbies />
      </div>
    </div>
  );
};

export default knowledges;