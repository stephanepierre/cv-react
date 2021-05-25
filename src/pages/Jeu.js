import React from 'react';
import Navigation from '../components/Navigation';
import {motion} from 'framer-motion';



const Jeu = () => {
  return (
    <div className="jeu">
      <Navigation />
      <motion.div 
        className="contactContent"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{
          scale:1,
          duration: 1
        }}
      >
        <div className="jeuContent buttonPlay">
          <div className="button1"></div>
          <div className="button2"></div>
          <div className="button3"></div>
          <div className="button4"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Jeu;