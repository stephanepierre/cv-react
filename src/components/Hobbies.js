import React from 'react';
import Hand from '../media/images/icons/icon-hand.png';
import Volley from '../media/images/icons/icon-volleyBall.png';
import Book from '../media/images/icons/icon-livre.png';
import Film from '../media/images/icons/icon-film.png';
import Musique from '../media/images/icons/icon-musique.png';
import Web from '../media/images/icons/icon-web.png';
import Voyage from '../media/images/icons/icon-voyage.png';
import Moto from '../media/images/icons/icon-moto.png'
import OtherInterest from '../media/images/icons/icon-other.png';


const Hobbies = () => {
  return (
    <div>
      <h3>Mes loisirs</h3>
      <ul className="hobbiesList">
        <li className="hobbiesList__interest">
          <img src={ Hand } alt="hand" />
          <h6>Le handball:</h6>
          <div className="text">Un esprit de camaraderie sur le terrain, un soutien sans faille en défense, une bonne 
          coordination en attaque, gérer son stress, se surpasser pour soi-même et pour l'équipe.</div>
        </li>
        <li className="hobbiesList__interest">
          <img src={ Volley } alt="volley" />
          <h6>Le volleyball:</h6>
          <div className="text">Développe le sens tactique, la rapidité d'exécution. Je m'y suis mis "sur 
          le tard", vers mes 30ans, mais j'aime beaucoup ce sport.</div>
        </li>
        <li className="hobbiesList__interest">
          <img src={ Book } alt="book" />
          <h6>La lecture:</h6>
          <div className="text">Plus calme, reposant, pour m'évader, je lis énormément de science-fiction fantasy et quelques policiers. 
          Aide à la concentration.</div>
        </li>
        <li className="hobbiesList__interest">
          <img src={ Film } alt="film" />
          <h6>Les films/ séries:</h6>
          <div className="text">J'aime tous les genres, sauf peut-être les films d'auteurs.</div>
        </li>
        <li className="hobbiesList__interest">
          <img src={ Web } alt="web" />
          <h6>Surfer sur le web:</h6>
          <div className="text">Il y a toujours quelque chose à découvrir... l'espace (les planètes, les trous noirs), 
          les dessins, les idées de voyages, les réseaux sociaux où je suis. </div>
        </li>
        <li className="hobbiesList__interest">
          <img src={ Voyage } alt="voyage" />
          <h6>Les voyages:</h6>
          <div className="text">Ah les voyages... j'ai déjà visité pas mal de pays notamment l'Ecosse (mon plus beau voyage !), 
          je rêve de voir le Japon, les Pays Nordiques, la Nouvelle-Zélande, le Canada...</div>
        </li>
        <li className="hobbiesList__interest">
          <img src={ Musique } alt="musique" />
          <h6>La musique:</h6>
          <div className="text">J'ai des goûts très éclectiques, de la musique 
          classique au hard-rock en passant par Soprano et Michel Sardou.</div>
        </li>
        <li className="hobbiesList__interest">
          <img src={ Moto } alt="moto" />
          <h6>La moto:</h6>
          <div className="text">J'adore rouler en moto, cette sensation de liberté est incroyable, 
          j'ai eu plusieurs motos, toutes des roadsters, mais pourquoi pas changer un jour...</div>
        </li>

        <li className="hobbiesList__interest">
          <img src={ OtherInterest } alt="otherInterest" />
          <h6>Encore?</h6>
          <div className="text">De nombreuses autres activités me 
          plaisent, le tennis, l'équitation, le badmington, les restaurants...en fait trop de choses 
          pour être répertoriées ici. A vous de les découvrir. </div>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;