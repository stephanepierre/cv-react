import React from 'react';
import ExperiencesBlock from '../components/Experiences';
import Navigation from '../components/Navigation';
import {motion} from 'framer-motion';

const Experiences = () => {
  return (
    <div className="experiences">
      <Navigation />
      <motion.div 
        className="experiencesContent"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{
          scale:1,
          duration: 1.5
        }}
      >
        <ExperiencesBlock />
      </motion.div>
    </div>
  );
};

export default Experiences;