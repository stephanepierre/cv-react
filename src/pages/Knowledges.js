import React from 'react';
import Experiences from '../components/knowledges/Experiences';
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
        <Experiences />      
        <SoftSkills />
        <Hobbies />
      </div>

    </div>
  );
};

export default knowledges;