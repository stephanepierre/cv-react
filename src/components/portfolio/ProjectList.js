import React, { Component } from 'react';
import { portfolioData } from '../../data/portfolioData';
import Project from './Project';

class ProjectList extends Component {
  state={
    projects: portfolioData,
    radios: [
      {id: 1, value: "html"},
      {id: 2, value: "css"},
      {id: 3, value: "javascript"},
      {id: 4, value: "react"},
      {id: 5, value: "next.js"},
      {id: 6, value: "framer-motion"},
      {id: 7, value: "scss"},
      {id: 8, value: "typescript"},
      {id: 9, value: "bootstrap"},
      {id: 10, value: "tailwind"},
    ],
    selectedRadio: 'javascript'
  };

  handleRadio = (e) => {
    let radio = e.target.value;
    this.setState({selectedRadio: radio})
  }

  render() {
    let {projects, radios, selectedRadio} = this.state;

    return (
      <div className="portfolioContent">
        <ul className="radioDisplay">
          {
            radios.map((radio) => {
              return (
                <li key={radio.id}>
                  <input 
                    type="radio" 
                    name="radio" 
                    checked={radio.value === selectedRadio} 
                    value={radio.value}
                    id={radio.value}
                    onChange={this.handleRadio} />
                    <label htmlFor={radio.value}>{radio.value}</label>
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
      </div>
    );
  }
}

export default ProjectList;
