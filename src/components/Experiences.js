import React from 'react';

const ExperiencesBlock = () => {
  return (
    <div>
      <h3>Expériences</h3>
      <div className="experience">
        <div className="dev">
          <h5>Développeur Front-End</h5>
          <h6>02/2021-04/2021</h6>
          <ul className="works">
            <li>ITDM Group</li>
            <ul className="qualifications">
              <li>- Création de toute la partie Front End d'un site</li>
              <li>- Rectification de plusieurs sites sous WordPress</li>
              <ul className="use">Utilisation de :
                <li>- React</li>
                <li>- Next.js</li>
                <li>- SCSS</li>
                <li>- Typescript</li>
                <li>- Framer-Motion</li>
              </ul>
            </ul>
          </ul>
        </div>

        <div className="sale">
          <h5>Responsable commercial</h5>
          <h6>2008-2020</h6>
          <ul className="works">
            <li>Schoettle68 de 2015 à 2020</li>
            <ul className="qualifications">
              <li>- Vente BtoB et BtoC</li>
              <li>- Responsabilité du show-room (agencement, CA)</li>
              <li>- Travail d'équipe</li>
              <li>- Gestion du planning de l'agence</li>
              <li>- Gestion de l'équipe comptoir</li>
            </ul>
          </ul>
          <ul className="works">
            <li>Unil-Opal lubrifiants de 2012 à 2015</li>
            <ul className="qualifications">
              <li>- Responsable secteur Alsace</li>
              <li>- Management de distributeurs (AD, Schmitt)</li>
              <li>- Grand compte (ville de Strasbourg, Mulhouse agglomération)</li>
              <li>- Autonomie</li>
            </ul>
          </ul>
          <ul className="works">
            <li>Alliance automobile de 2008 à 2012</li>
            <ul className="qualifications">
              <li>- Vente de produits techniques en BtoB</li>
              <li>- Augmentation du CA de 450k€ à 1300k€</li>
            </ul>
          </ul>
          <ul className="works">
            <li>LCL en 2008</li>
            <ul className="qualifications">
              <li>- Accueil des clients au guichet</li>
              <li>- Vente de produit type livret</li>
              <li>- Phoning</li>
            </ul>
          </ul>
        </div>

        <div className="driver">
          <h5>Chauffeur PL</h5>
          <h6>2003-2008</h6>
          <ul className="works">
            <li>Sopravit</li>
            <ul class="qualifications">
              <li>- Ventes additionnelles</li>
              <li>- Gestion des tournées</li>
              <li>- Chargement déchargement</li>
              <li>- Préparation des commandes</li>
            </ul>
          </ul>
        </div>

        <div className="army">
          <h5>Armée de Terre</h5>
          <h6>1998-2003</h6>
          <ul className="works">
            <li>Chasseur alpin à Chambéry</li>
              <ul className="qualifications">
                <li>- Résistance au stress</li>
                <li>- Travail d'équipe</li>
              </ul>
            <li>Maître chiens à Suippes</li>
              <ul className="qualifications">
                <li>- Dressage</li>
                <li>- Port du costume d'attaque</li>
              </ul>
            <li>Corps Européen de Strasbourg</li>
              <ul className="qualifications">
                <li>- Maître chiens</li>
                <li>- Formation de chauffeur VL</li>
                <li>- Chauffeur PL</li>
              </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperiencesBlock;