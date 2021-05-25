import React from 'react';
import CertificatJs1 from '../media/diplomes/certificat-js-1-openclassrooms.png';
import CertificatSass from '../media/diplomes/certificat-sass-openclassrooms.png';
import CertificatJs2 from '../media/diplomes/certificat-js-2-openclassrooms.png';
import AideDresseur from '../media/diplomes/diplomeAideDresseur.jpg';
import Bts from '../media/diplomes/diplomeBts.jpg';
import Cap from '../media/diplomes/diplomeCAP.jpg';
import DogDriver from '../media/diplomes/diplomeConducteurDeChien.jpg';
import Pl from '../media/diplomes/diplomePl.jpg';
import Navigation from '../components/Navigation';
import {motion} from 'framer-motion';

const Degrees = () => {
  return (
    <div className="degrees">
      <Navigation />
      <motion.div 
        className="degreesContent"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{
          scale:1,
          duration: 1
        }}
      >
        <motion.div 
          className="degree"
          whileHover={{
            scale: 2.5,
            x:300,
            y: 180,
            transition: { duration: 0.5 },
          }}
          whileTap={{ 
            scale: 2.5,
            x:100,
            y: 100,
            transition: { duration: 0.3 },
          }}
        >
          <img src={CertificatJs1} alt="certificat-javascript-1" />
        </motion.div>

        <motion.div 
          className="degree"
          whileHover={{
            scale: 2.5,
            y: 180,
            transition: { duration: 0.5 },
          }}
          whileTap={{ 
            scale: 2.5,
            y: 100,
            transition: { duration: 0.3 },
          }}
        >
          <img src={CertificatJs2} alt ="certificat-javascript-2" />
        </motion.div>

        <motion.div 
          className="degree"
          whileHover={{
            scale: 2.5,
            x:-300,
            y: 180,
            transition: { duration: 0.5 },
          }}
          whileTap={{ 
            scale: 2.5,
            x:-100,
            y: 100,
            transition: { duration: 0.3 },
          }}
        >
          <img src={CertificatSass} alt="certificat-Sass" />
        </motion.div>

        <motion.div 
          className="degree"
          whileHover={{
            scale: 2.5,
            x:300,
            transition: { duration: 0.5 },
          }}
          whileTap={{ 
            scale: 2.5,
            x:100,
            transition: { duration: 0.3 },
          }}
        >
          <img src={AideDresseur} alt="aide Dresseur" />
        </motion.div>

        <motion.div 
          className="degree"
          whileHover={{
            scale: 2.5,
            transition: { duration: 0.5 },
          }}
          whileTap={{ 
            scale: 2.5,
            transition: { duration: 0.3 },
          }}
        >
          <img src={Bts} alt="bts force de vente" />
        </motion.div>

        <motion.div 
          className="degree"          
          whileHover={{
            scale: 2.5,
            x:-300,
            transition: { duration: 0.5 },
          }}
          whileTap={{ 
            scale: 2.5,
            x:-100,
            transition: { duration: 0.3 },             
          }}
        >
          <img src={Cap} alt="cap ebeniste" />
        </motion.div>

        <motion.div 
          className="degree"
          whileHover={{
            scale: 2.5,
            x:300,
            y: -200,
            transition: { duration: 0.5 },
          }}
          whileTap={{ 
            scale: 2,
            x:100,
            y: -100,
            transition: { duration: 0.3 },
          }}
        >
          <img src={DogDriver} alt="maitre de chien" />
        </motion.div>

        <motion.div 
          className="degree"
          whileHover={{
            scale: 2.5,
            y: -200,
            transition: { duration: 0.5 },
          }}
          whileTap={{ 
            scale: 2.5,
            y: -100,
            transition: { duration: 0.3 },
          }} 
        >
          <img src={Pl} alt="chauffeur pl" />
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Degrees