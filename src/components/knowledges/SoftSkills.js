import React from 'react';
import Visualisation from '../../media/images/icons/icon-visualisation.png';
import Collectif from '../../media/images/icons/icon-collectif.png';
import Relaxation from '../../media/images/icons/icon-relaxation.png';
import Empathie from '../../media/images/icons/icon-empathie.png';



const SoftSkills = () => {
  return (
    <div className="softSkills">
      <h3>Mes Soft Skills</h3>
      <div className="softSkillsContent">
        <h4>Définition:</h4>
        <a href="https://fr.wikipedia.org/wiki/Savoir-%C3%AAtre" target="_blank" rel="noreferrer noopener">Les soft skills </a>
          (savoir-être) sont des compétences plus stables que des hard skills (savoir-faire). 
          Ils apportent une "agilité" d'adaptation, ils renforcent les "savoir-faire".
        <h5>Voici quelque uns de mes soft skills:</h5>
        <ul className="listSoftSkills">
          <li className="listSoftskills__content">
            <img src={ Visualisation } alt="visualisation" />
            <h6>La visualisation:</h6> 
            Je suis une personne qui arrive à se projeter loin dans le temps afin de prévoir les 
            différents écueils que je pourrais trouver sur ma route. Dans le travail cela me permet 
            d'anticiper les problèmes en amont et d'établir une stratégie adaptée.
          </li>
          <li className="listSoftskills__content">
            <img src={ Collectif } alt="collectif" />
            <h6>Le sens du collectif:</h6>
            Pour moi on est une équipe, ma pratique des sports d'équipe comme le volley, le hand et bien 
            d'autres, m'ont permis d'apprendre à faire confiance à mes coéquipiers et de les soutenir. 
            Dans le travail cette valeur est pour moi impérative, peu importe le poste, on est tous 
            indispensables et on doit se soutenir.
          </li>
          <li className="listSoftskills__content">
            <img src={ Relaxation } alt="relaxation" />
            <h6>La gestion du stress:</h6> 
            Encore une fois, le sport m'a beaucoup aidé dans ma gestion du stress, dans un match 
            d'importance il faut savoir rester maître de soi. Mes parcours de vie personnel et 
            professionnel m'ont fait gagner en résistance. En tant que commercial il faut savoir gérer 
            son stress pour atteindre ses objectifs. Comme maître-chien, lorsque le chien se jette sur 
            vous, il faut garder la tête froide pour savoir comment réagir et l'éduquer.
          </li>
          <li className="listSoftskills__content">
            <img src={ Empathie } alt="empathie" />
            <h6>L'empathie:</h6> 
            Je "ressens" très facilement ce que dégagent les gens autour de moi, cela m'a très souvent 
            aidé dans l'atteinte de mes objectifs de commercial. Grâce à ça, vous pouvez vous adapter à 
            la personne en face de vous.
          </li>
        </ul>      
      </div>
    </div>
  );
};

export default SoftSkills;