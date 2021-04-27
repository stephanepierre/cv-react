import React, { Component } from 'react';
import IconPlus from '../../media/images/icons/icon-plus.png'

class Project extends Component {
  state = {
    showInfo: false
  }

  handleInfo = () => {
    this.setState({
      showInfo:!this.state.showInfo
    })
  }


  render() {
    let {name, languagesIcons, source, info, picture} = this.props.item;

    return (
      <div className="project">
        <div className="icons">
          {languagesIcons.map(icon => 
            <img src={icon} key={icon} alt="imgIcons" className="imgIcons"></img>
          )}
        </div>
        <h3>{name}</h3>
        <img src={picture} alt="imgSite" onClick={this.handleInfo} className="imgSite"/>
        <span className="infos" onClick={this.handleInfo}>
          <img className="imgIconPlus" src={IconPlus} alt="iconPlus"></img>
        </span>


{/* .............popUp............................ */}
        {
          this.state.showInfo && (
            <div className="showInfos">
              <div className="infosContent">
                <div className="head">
                  <h2>{name}</h2>
                  <div className="sourceCode">
                    <a href={source} rel="noopener noreferrer" className="button" target="_blank">Code source</a>
                  </div>
                </div>
                <p className="text">{info}</p>
                <div className="button return" onClick={this.handleInfo}>Retourner sur la page</div>
              </div>
            </div>

          )
        }

{/* ..................end popUp....................... */}

      </div>
    );
  }
}

export default Project;
