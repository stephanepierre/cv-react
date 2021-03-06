import React, { Component } from 'react';
import Progressbar from './Progressbar';

class Languages extends Component {
  state = {
    languages: [
      {id: 1, value: "Html", xp:8},
      {id: 2, value: "Css", xp:8},
      {id: 3, value: "Javascript", xp:7.5},
      {id: 4, value: "PHP", xp:5},
      {id: 4, value: "C++", xp:1},
    ],
    frameworks: [
      {id: 1, value: "Bootstrap", xp:8},
      {id: 2, value: "React", xp:7.5},
      {id: 3, value: "Sass", xp:6},
      {id: 4, value: "Framer-Motion", xp:4},
      {id: 5, value: "Next.Js", xp:7},
    ],
  }

  render() {
    let {languages, frameworks} = this.state;

    return (
      <div className="languagesFrameworks">
        <Progressbar 
          languages={languages}
          className="languagesDisplay"
          title="Langages"
        />
        <Progressbar 
          languages={frameworks}
          className="frameworksDisplay"
          title="Frameworks & Bibliothèques"
        />
      </div>
    );
  }
}

export default Languages;
