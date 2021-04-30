import React from 'react';
import Hobbies from '../components/Hobbies';
import Navigation from '../components/Navigation';
import {motion} from 'framer-motion';

const contact = () => {
  return (
    <div className="hobbies">
      <Navigation />
      <motion.div 
        className="hobbiesContent"        
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{
          scale:1,
          duration: 1
        }}
      >
        <Hobbies />
      </motion.div>
    </div>
  );
};

export default contact;