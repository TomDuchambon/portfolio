import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb} from '@fortawesome/free-solid-svg-icons'
import Lines from '.././Lines'
import './index.scss'
import Picasso from '../../assets/images/picasso.png'

const Projects = () => {
  const [isYellow, setIsYellow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsYellow(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container projects-page">
      <Lines className="line-back"/>
      <div className="lightbulb-container">
        <NavLink exact="true" activeclassname="active" to="/projects">
        <FontAwesomeIcon icon={faLightbulb} className={`lightbulb left-bulb ${isYellow ? 'yellow-left' : ''}`}/>
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/home">
        <FontAwesomeIcon icon={faLightbulb} className={`lightbulb middle-bulb ${isYellow ? 'yellow-mid' : ''}`} />
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/contact">
        <FontAwesomeIcon icon={faLightbulb} className="lightbulb right-bulb" />
        </NavLink>
        </div>
        <img src={Picasso} alt="picasso" className="picasso-img"/>
        <div className="round-menu">
        </div>
        <div className="triangle-menu-container">
        </div>
      <div className="half-screen-blue">
      </div>
      <div className="link-container">
        <a href="https://www.deadgoodcoffee.co.uk/" target="_blank" rel="noreferrer" className='deadgood-link'>Dead Good Coffee</a>
        <vl className="link-separator"></vl>
        <a href="http://melo-app.herokuapp.com/" target="_blank" rel="noreferrer" className='melo-link'>Mélo</a>
        <vl className="link-separator"></vl>
        <a href="https://www.barbaraella.ie/" target="_blank" rel="noreferrer" className='barb-link'>By Barbaraella</a>
      </div>
    </div>
  )
}

export default Projects
