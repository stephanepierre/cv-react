import React from 'react';
import Visualisation from '../../media/images/icons/icon-visualisation.png';
import Collectif from '../../media/images/icons/icon-collectif.png';
import Relaxation from '../../media/images/icons/icon-relaxation.png';
import Empathie from '../../media/images/icons/icon-empathie.png';



const SoftSkills = () => {
  return (
    <div className="softSkills">
      <h4>Mes Soft Skills</h4>
      <a href="https://fr.wikipedia.org/wiki/Savoir-%C3%AAtre" target="_blank" rel="noreferrer noopener" className="button">Définition</a>
      <ul className="softSkillsContent">
        <li className="softSkillsContent__list">
          <img src={ Visualisation } alt="visualisation" />
          <h6>Visualisation:</h6> 
          <p className="text">Je me projette pour établir une stratégie adaptée. La vente m'a permit de développer cette aptitude pour pouvoir répondre aux objections des clients.</p>
        </li>
        <li className="softSkillsContent__list">
          <img src={ Collectif } alt="collectif" />
          <h6>Sens du collectif:</h6>
          <p className="text">Faire confiance, se soutenir. Le sport est d'une grande aide dans ce domaine, ce qui se passe sur un terrain peut très bien être appliqué dans le milieu professionnel.</p>
        </li>
        <li className="softSkillsContent__list">
          <img src={ Relaxation } alt="relaxation" />
          <h6>Gestion du stress:</h6> 
          <p className="text">Etre commercial et maitre-chien m'ont aidé. Il faut savoir rester maître de soi quand un chien vous fonce dessus et que votre rôle est de le faire mordre.</p>
        </li>
        <li className="softSkillsContent__list">
          <img src={ Empathie } alt="empathie" />
          <h6>Empathie:</h6> 
          <p className="text">"Ressentir" les autres aide tous les jours dans les relations. On peut sentir qu'un camarade est dans une impasse et lui apporter des solutions.</p>
        </li>
      </ul>      
    </div>
  );
};

export default SoftSkills;