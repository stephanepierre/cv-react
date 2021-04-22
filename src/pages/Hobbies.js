import React from 'react';
import Hobbies from '../components/Hobbies';
import Navigation from '../components/Navigation';

const contact = () => {
  return (
    <div className="hobbies">
      <Navigation />
      <div className="hobbiesContent">
        <Hobbies />
      </div>
    </div>
  );
};

export default contact;