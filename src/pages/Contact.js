import React from 'react';
import ContactForm from '../components/ContactForm';
import Navigation from '../components/Navigation';
import {motion} from 'framer-motion';

const contact = () => {
  return (
    <div className="contact">
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
        <ContactForm />
      </motion.div>
    </div>
  );
};

export default contact;