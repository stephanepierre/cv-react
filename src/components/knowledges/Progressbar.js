import React from 'react';

const Progressbar = (props) => {
  return (
    <div className={props.className}>
      <h4>{props.title}</h4> 
      <div className="months">
        <span>Mois d'expériences</span>
        <span>12 mois</span>
        <span>24 mois</span>
      </div>
      <div>
        {
          props.languages.map((item) => {
            let xpMonths = 12;
            let progressBar = item.xp / xpMonths * 100 + '%';

            return(
              <div key={item.id} className="languagesList">
                <li>{item.value}</li>
                <div className="progressBar" style={{width:progressBar}}></div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Progressbar;