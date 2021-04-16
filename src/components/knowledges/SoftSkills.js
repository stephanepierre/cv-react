import React from 'react';
import Visualisation from '../../media/images/icons/icon-visualisation.png';
import Collectif from '../../media/images/icons/icon-collectif.png';
import Relaxation from '../../media/images/icons/icon-relaxation.png';
import Empathie from '../../media/images/icons/icon-empathie.png';



const SoftSkills = () => {
  return (
    <div className="softSkills">
      <h4>Mes Soft Skills</h4>
      <div className="softSkillsContent">
        <h6>Définition:</h6>
        <a href="https://fr.wikipedia.org/wiki/Savoir-%C3%AAtre" target="_blank" rel="noreferrer noopener">Les soft skills </a>
          (savoir-être) sont des compétences plus stables que des hard skills (savoir-faire). 
          Ils apportent une "agilité" d'adaptation, ils renforcent les "savoir-faire".
        <h6>Voici quelque uns de mes soft skills:</h6>
        <ul className="listSoftSkills">
          <li className="listSoftskills__content">
            <img src={ Visualisation } alt="visualisation" />
            <div className="title">La visualisation:</div> 
            Je me projette loin dans le temps afin de prévoir les différents écueils. Dans le travail 
            cela me permet d'anticiper les problèmes et d'établir une stratégie adaptée.
          </li>
          <li className="listSoftskills__content">
            <img src={ Collectif } alt="collectif" />
            <div className="title">Le sens du collectif:</div>
            Pour moi on est une équipe, ma pratique des sports d'équipe m'a permis d'apprendre à 
            faire confiance à mes coéquipiers et à les soutenir. C'est une valeur impérative, peu 
            importe le poste, on doit se soutenir.
          </li>
          <li className="listSoftskills__content">
            <img src={ Relaxation } alt="relaxation" />
            <div className="title">La gestion du stress:</div> 
            Encore une fois, le sport m'a beaucoup aidé dans ma gestion du stress. Mon parcours de vie 
            m'a fait gagner en résistance. Un commercial doit savoir gérer son stress pour atteindre 
            ses objectifs. Un maître-chien doit garder la tête froide lorsqu'un chien se jette sur 
            lui, il faut pour savoir comment réagir et l'éduquer.
          </li>
          <li className="listSoftskills__content">
            <img src={ Empathie } alt="empathie" />
            <div className="title">L'empathie:</div> 
            Je "ressens" très facilement ce que dégagent les gens autour de moi, cela m'a très souvent 
            aidé dans l'atteinte de mes objectifs de commercial.
          </li>
        </ul>      
      </div>
    </div>
  );
};

export default SoftSkills;