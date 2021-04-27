import React from 'react';
import ProfilPic from '../media/images/photo-cv4.jpg'
import { NavLink } from 'react-router-dom';
import IconHome from '../media/images/icons/icon-accueil.png'; 
import IconContact from '../media/images/icons/icon-contact.png';
import IconCompetence from '../media/images/icons/icon-competences.png';
import IconPortfolio from '../media/images/icons/icon-portfolio.png';
import IconLinkedIn from '../media/images/icons/icon-linkedIn.png';
import IconGithub from '../media/images/icons/icon-github.png';
import IconExperiencesJobs from '../media/images/icons/experiences-jobs.png';
import IconLoisirs from '../media/images/icons/icon-loisirs.png';

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src={ ProfilPic } alt="profil-pic"></img>
          <h3>Stéphane <br/> PIERRE</h3>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              <img src={ IconHome } alt="icon-home" />
              <span>Accueil</span>
            </NavLink>
          </li>

          <li>
            <NavLink exact to="/experiences" activeClassName="active">
              <img src={ IconExperiencesJobs } alt="icon-experiences" />
              <span>Expériences</span>
            </NavLink>
          </li>

          <li>
            <NavLink exact to="/competences" activeClassName="active">
              <img src={ IconCompetence } alt="icon-competence" />
              <span>Compétences</span>
            </NavLink>
          </li>

          <li>
            <NavLink exact to="/hobbies" activeClassName="active">
              <img src={ IconLoisirs } alt="icon-loisirs" />
              <span>Loisirs</span>
            </NavLink>
          </li>

          <li>
            <NavLink exact to="/portfolio" activeClassName="active">
              <img src={ IconPortfolio } alt="icon-portfolio" />
              <span>Portfolio</span>
            </NavLink>
          </li>
          
          <li>
            <NavLink exact to="/contact" activeClassName="active">
              <img src={ IconContact } alt="icon-contact" />
              <span>Contact</span>
            </NavLink>
          </li>

        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/stephane-pierre-a899501b7" target="_blank" rel="noopener noreferrer">
              <img src={ IconLinkedIn } alt="icon-linkedIn" />
            </a>
          </li>
          <li>
            <a href="https://github.com/stephanepierre?tab=repositories" target="_blank" rel="noopener noreferrer">
              <img src={ IconGithub } alt="icon-github" />
            </a>
          </li>
        </ul>
        <div className="signature">
          <p>&#169; Stéphane Pierre - 2021</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;