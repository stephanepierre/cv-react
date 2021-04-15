import React from 'react';

const ExperiencesBlock = () => {
  return (
    <div className="experience">
      <h3>Expériences</h3>
      <div className="exp-1">
        <h4>Développeur Front-End ITDM Group</h4>
        <h5>02/2021-04/2021</h5>
        <ul className="works">
          <li>Création de toute la partie Front End d'un site</li>
          <ul className="qualifications">Utilisation de :
            <li>React</li>
            <li>Next.js</li>
            <li>SCSS</li>
            <li>Typescript</li>
            <li>Framer-Motion</li>
          </ul>
          <li>Rectification de plusieurs sites sous WordPress</li>
        </ul>
      </div>

      <div className="exp-4">
        <h4>Commercial / Responsable commercial</h4>
        <h5>2008-2020</h5>
        <ul className="works">
          <li>Schoettle68 de 2015 à 2020</li>
          <ul className="qualifications">
            <li>Vente BtoB et BtoC</li>
            <li>Responsabilité du show-room (agencement, CA)</li>
            <li>Travail d'équipe</li>
            <li>Gestion du planning de l'agence</li>
            <li>Gestion de l'équipe comptoir</li>
          </ul>
        </ul>
        <ul className="works">
          <li>Unil-Opal lubrifiants de 2012 à 2015</li>
          <ul className="qualifications">
            <li>Responsable secteur Alsace</li>
            <li>Management de distributeurs (AD, Schmitt etc...)</li>
            <li>Management grand compte (ville de Strasbourg, Mulhouse agglomération)</li>
            <li>Autonomie</li>
          </ul>
        </ul>
        <ul className="works">
          <li>Alliance automobile 2008 à 2012</li>
          <ul className="qualifications"></ul>
            <li>Vente de produits techniques en BtoB</li>
            <li>Augmentation du CA de 450k€ à 1300k€</li>
        </ul>
        <ul className="works">
          <li>LCL 2008 Conseiller d'accueil banque</li>
          <ul className="qualifications"></ul>
            <li>Accueil des clients au guichet</li>
            <li>Vente de produit type livret</li>
            <li>Phoning</li>
        </ul>
      </div>

      <div className="exp-3">
        <h4>Chauffeur PL Sopravit</h4>
        <h5>2003-2008</h5>
        <ul class="works">
          <li>Ventes additionnelles</li>
          <li>Gestion des tournées</li>
          <li>Chargement déchargement</li>
          <li>Préparation des commandes</li>
        </ul>
      </div>

      <div className="exp-2">
        <h4>Armée de Terre</h4>
        <h5>1998-2003</h5>
        <ul className="works">
          <li>Chasseur alpin à Chambéry</li>
            <ul className="qualifications">
              <li>Résistance au stress</li>
              <li>Travail d'équipe</li>
            </ul>
          <li>Maître chiens à Suippes</li>
            <ul className="qualifications">
              <li>Dressage</li>
              <li>Port du costume d'attaque</li>
            </ul>
          <li>Corps Européen de Strasbourg</li>
            <ul className="qualifications">
              <li>Maître chiens</li>
              <li>Formation de chauffeur VL</li>
              <li>Chauffeur PL</li>
            </ul>
        </ul>
      </div>
    </div>
  );
};

export default ExperiencesBlock;