import React from 'react';
import FirstCv from '../media/images/monPremierCv.PNG';
import IconHtml from '../media/images/icons/icon-html.png';
import IconCss from '../media/images/icons/icon-css.png';
import IconBootstrap from '../media/images/icons/icon-bootstrap.png';
import IconNext from '../media/images/icons/icon-nextjs.png';
import IconReact from '../media/images/icons/icon-reactJs.png';
import IconTailwind from '../media/images/icons/icon-tailwind.png';
import SiteCrypto from '../media/images/site-crypto.PNG';
import IconFramerMotion from '../media/images/icons/icon-framerMotion.png';
import IconTypescript from '../media/images/icons/icon-typescript.png';
import IconSass from '../media/images/icons/icon-sass.png';
import SiteBenJo from '../media/images/siteBen.PNG';
import IconJavaScript from '../media/images/icons/icon-js.png';
import SiteNouveauCv from '../media/images/nouveauCv.PNG';




export const portfolioData = [
  {
    id: 1,
    name: 'le-cv-de-steph.com',
    languages: ['html', 'css', 'bootstrap'],
    languagesIcons: [IconHtml , IconCss, IconBootstrap],
    source: 'https://github.com/stephanepierre/cv-de-steph',
    info:"Voici le premier site que j'ai créé, il apportait plus d'informations sur moi, mon parcours, mes aspirations. Je l'ai créé avec HTML, CSS et Bootstrap. Il m'a fallu environ 70h pour le faire, entre les textes, les choix d'images, la présentation et le codage. J'ai beaucoup aimé le faire car c'était mon premier vrai projet et il m'a permis de mettre en application ce que j'avais appris.",
    picture: FirstCv
  },
  {
    id: 2,
    name: 'Crypto Watch',
    languages: ['react', 'next.js', 'tailwind'],
    languagesIcons: [IconReact, IconNext , IconTailwind],
    source: 'https://github.com/stephanepierre/formation-rest.js',
    info:"Afin de m'entrainer à utiliser React et Next.js, j'ai réalisé ce site grâce à un tuto. J'y est également utilisé pour la première fois Tailwind que j'ai trouvé assez sympa d'utilisation.",
    picture: SiteCrypto
  },
  {
    id: 3,
    name: 'Site sous licence',
    languages: ['react', 'scss', 'framer-motion', 'typescript', 'next.js'],
    languagesIcons: [IconReact, IconSass, IconFramerMotion, IconTypescript, IconNext],
    source: 'https://github.com/stephanepierre?tab=repositories',
    info:"Lors de mon stage j'ai créé toute la partie front-end d'un site. celui-ci n'étant pas encore en ligne je ne peux malheureusement pas indiquer son nom ni mettre de photo. J'ai utilisé React.js, SCSS, Next.Js, Framer-motion et typescript. Il faut savoir que je n'avais jamais utilisé aucun de ces langages avant ce projet et je suis assez fière du résultat.",
    picture: SiteBenJo
  },
  {
    id: 4,
    name: 'Mon nouveau  site CV',
    languages: ['react', 'scss', 'framer-motion', 'javascript'],
    languagesIcons: [IconReact, IconSass, IconFramerMotion, IconJavaScript],
    source: 'https://github.com/stephanepierre?tab=repositories',
    info:"Lors de mon stage j'ai créé toute la partie front-end d'un site. celui-ci n'étant pas encore en ligne je ne peux malheureusement pas indiquer son nom ni mettre de photo. J'ai utilisé React.js, SCSS, Next.Js, Framer-motion et typescript. Il faut savoir que je n'avais jamais utilisé aucun de ces langages avant ce projet et je suis assez fière du résultat.",
    picture: SiteNouveauCv
  },

]

 