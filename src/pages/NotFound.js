import React from 'react';
import { NavLink } from 'react-router-dom';
import IconHome from '../media/images/icons/icon-accueil.png'

const notFound = () => {
  return (
    <div className="notFound">
      <div className="notfoundContent">
        <h1> Désolé cette page n'existe pas !</h1>
        <NavLink exact to="/">
          <img src={ IconHome } alt="icon-home" />
          <span>Accueil</span>
        </NavLink>
      </div>
    </div>
  );
};

export default notFound;