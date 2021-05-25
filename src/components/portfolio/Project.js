import React, { Component } from 'react';
import IconPlus from '../../media/images/icons/icon-plus.png';
import {motion} from 'framer-motion';

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
      <motion.div className="project"        
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{
          scale:1,
          duration: 1
        }}
      >
        <div className="icons">
          {languagesIcons.map(icon => 
            <img src={icon} key={icon} alt="imgIcons" className="imgIcons"></img>
          )}
        </div>
        <h3>{name}</h3>
        <img src={picture} alt="imgage-projet" onClick={this.handleInfo} className="imgSite"/>
        <span className="infos" onClick={this.handleInfo}>
          <img className="imgIconPlus" src={IconPlus} alt="iconPlus"></img>
        </span>


{/* .............popUp............................ */}
        {
          this.state.showInfo && (
            <motion.div 
              className="modal"
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{
                scale:1,
                duration: 1
              }}
            >
              <div className="infosContent">
                <div className="head">
                  <h2>{name}</h2>
                  <div className="sourceCode">
                    <a href={source} rel="noopener noreferrer" className="buttonModal" target="_blank">Code source</a>
                  </div>
                </div>
                <p className="text">{info}</p>
                <div className="buttonModal return" onClick={this.handleInfo}>Retourner sur la page</div>
              </div>
            </motion.div>

          )
        }

{/* ..................end popUp....................... */}

      </motion.div>
    );
  }
}

export default Project;
