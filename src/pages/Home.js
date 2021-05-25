import React from 'react';
import Navigation from '../components/Navigation';
import Cv from '../media/images/cv.pdf';
import {motion} from 'framer-motion';
import {NavLink} from 'react-router-dom'

const home = () => {
  return (
    <div className="home"> 
      <Navigation />
      <motion.div className="homeContent"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{
          scale:1,
          duration: 1
        }}
      >
        <div className="content">
          <h1>Stéphane PIERRE</h1>
          <h2>Développeur Full-stack</h2>

          <div className="pdf">
            <a href={ Cv } target="_blank" rel="noreferrer noopener" className="button">
              Voir le CV "original"
            </a>
          </div>

          <div>
            <NavLink exact to="/degrees" activeClassName="active">
              <div className="button">Voir les diplômes</div>
            </NavLink>
          </div>
          
          {/* <div>
            <NavLink exact to="/jeu" activeClassName="active">
              <div className="button">Faire un jeu</div>
            </NavLink>
          </div> */}

        </div>
      </motion.div>
    </div>
  );
};

export default home;