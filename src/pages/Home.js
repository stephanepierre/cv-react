import React from 'react';
import Navigation from '../components/Navigation';
import Cv from '../media/images/cv.pdf';

const home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Stéphane PIERRE</h1>
          <h2>Développeur Full-stack</h2>
          <div className="pdf">
            <a href={ Cv } target="_blank" rel="noreferrer noopener" className="button">
              Télécharger le CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;