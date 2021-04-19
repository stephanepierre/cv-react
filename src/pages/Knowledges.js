import React from 'react';
import Languages from '../components/knowledges/Languages';
import OtherKnowledges from '../components/knowledges/OtherKnowledges';
import SoftSkills from '../components/knowledges/SoftSkills';
import Navigation from '../components/Navigation';

const knowledges = () => {
  return (
    <div className="knowledges">
      <Navigation />
      <div className="knowledgesContent">
        <Languages />
        <SoftSkills />
        <OtherKnowledges />
      </div>
    </div>
  );
};

export default knowledges;