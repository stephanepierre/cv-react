import React, { Component } from 'react';
import { portfolioData } from '../../data/portfolioData';
import Project from './Project';
import {motion} from 'framer-motion';

class ProjectList extends Component {
  state={
    projects: portfolioData,
    radios: [
      {id: 1, value: "all"},
      {id: 2, value: "html"},
      {id: 3, value: "css"},
      {id: 4, value: "javascript"},
      {id: 5, value: "react"},
      {id: 6, value: "next.js"},
      {id: 7, value: "framer-motion"},
      {id: 8, value: "scss"},
      {id: 9, value: "typescript"},
      {id: 10, value: "bootstrap"},
      {id: 11, value: "tailwind"},
    ],
    selectedRadio: 'all'
  };

  handleRadio = (e) => {
    let radio = e.target.value;
    this.setState({selectedRadio: radio})
  }

  render() {
    let {projects, radios, selectedRadio} = this.state;

    return (
      <motion.div 
        className="portfolioContent"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{
          scale:1,
          duration: 1.5
        }}
      >
        <ul className="radioDisplay">
          {
            radios.map((radio) => {
              return (
                <li key={radio.id}>
                  <label htmlFor={radio.value}>{radio.value}
                    <input 
                      type="radio" 
                      name="radio" 
                      checked={radio.value === selectedRadio} 
                      value={radio.value}
                      id={radio.value}
                      onChange={this.handleRadio} />
                    <span className="checkmark"></span>
                  </label>
                </li>
              )
            })
          }
        </ul>

        <div className="projects">
          {
            projects
              .filter(item => item.languages.includes(selectedRadio))
              .map(item => {
              return (
                <Project
                key={item.id}
                item={item} />
              )
            })
          }
        </div>
      </motion.div>
    );
  }
}

export default ProjectList;
