import React from 'react';
import { NavLink } from 'react-router-dom';

const notFound = () => {
  return (
    <div className="notFound">
      <div className="notfoundContent">
        <h1> Désolé cette page n'existe pas !</h1>
        <NavLink exact to="/" />
        
      </div>
    </div>
  );
};

export default notFound;