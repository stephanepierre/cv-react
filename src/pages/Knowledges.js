import React from 'react';
import Languages from '../components/knowledges/Languages';
import OtherKnowledges from '../components/knowledges/OtherKnowledges';
import SoftSkills from '../components/knowledges/SoftSkills';
import Navigation from '../components/Navigation';
import {motion} from 'framer-motion';

const knowledges = () => {
  return (
    <div className="knowledges">
      <Navigation />
      <motion.div 
        className="knowledgesContent"        
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{
          scale:1,
          duration: 1
        }}
      >
        <Languages />
        <SoftSkills />
        <OtherKnowledges />
      </motion.div>
    </div>
  );
};

export default knowledges;