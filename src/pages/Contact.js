import React from 'react';
import ContactForm from '../components/ContactForm';
import Navigation from '../components/Navigation';

const contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <ContactForm />
      </div>
    </div>
  );
};

export default contact;