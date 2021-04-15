import React from 'react';
import Hand from '../../media/images/hand.jpg'

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Mes loisirs</h3>
      <ul className="hobbiesContent">
        <li className="interest">
          <img src={ Hand } />
          <h4>Le handball:</h4>
          C'est un sport que j'ai commencé à l'âge de 
          13ans (avec des pauses), une vrai révélation, un esprit de camaraderie sur le terrain, il 
          faut un soutien sans faille en défense, une bonne coordination en attaque, gérer son stress 
          pour se souvenir des combinaisons, il faut se surpasser pour soi-même et pour l'équipe.
        </li>
        <li className="interest">
          <img src="" />
          <h4>Le volleyball:</h4>
          Encore un sport d'équipe, plus différent, 
          plus statique, qui développe le sens tactique, la rapidité d'exécution. Je m'y suis mis "sur 
          le tard", vers mes 30ans, mais j'aime beaucoup ce sport.
        </li>
        <li className="interest">
          <img src="" />
          <h4>La lecture:</h4>
          Une activité beaucoup plus calme, reposante, 
          qui me permet de m'évader, je lis énormément de science-fiction fantasy et quelques policiers. 
          Une fois plongé dans un livre, ma concentration me permet de lire malgré le bruit ambiant 
          pendant des heures. Quand j'aime un livre je le dévore, difficile pour moi de le lâcher
        </li>
        <li className="interest">
          <img src="" />
          <h4>Les films/ séries:</h4>
          Le confinement aidant, j'ai pu découvrir 
          de nouvelles séries et films, j'aime tous les genres, sauf peut-être les films d'auteurs.
        </li>
        <li className="interest">
          <img src="" />
          <h4>La musique:</h4>
          J'ai des goûts très éclectiques, de la musique 
          classique au hard-rock en passant par Soprano et Michel Sardou. Bon, en toute honnêteté, 
          j'ai un peu de mal avec les musiques sans texte de certaines "chanteuses", "chanteurs" de 
          maintenant comme Aya Nakamura par exemple. Mais je supporte quand ma fille veut écouter... 
          dur la vie de père des fois...
        </li>
        <li className="interest">
          <img src="" />
          <h4>Encore?</h4>
          De nombreuses autres activités me 
          plaisent, le tennis, l'équitation, le roller, le squash, le badmington, les restaurants, 
          voir des ami(e)s... en fait trop de choses pour être répertoriées ici. Je vous laisse le 
          soin de pouvoir les découvrir. 
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;