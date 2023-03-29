import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb} from '@fortawesome/free-solid-svg-icons'
import Lines from '.././Lines'
import './index.scss'

const Home = () => {
  const [isYellow, setIsYellow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsYellow(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container home-page">
      <Lines className="line-home"/>
      <div className="lightbulb-container">
        <NavLink exact="true" activeclassname="active" to="/projects">
        <FontAwesomeIcon icon={faLightbulb} className="lightbulb left-bulb"/>
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/home">
        <FontAwesomeIcon icon={faLightbulb} className={`lightbulb middle-bulb ${isYellow ? 'yellow' : ''}`} />
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/contact">
        <FontAwesomeIcon icon={faLightbulb} className="lightbulb right-bulb" />
        </NavLink>
        </div>
            <div className="links">
              <NavLink exact="true" className="projects-link" activeclassname="active" to="/projects">Projects</NavLink>
              <NavLink exact="true" className="about-link" activeclassname="active" to="/about" >About</NavLink>
              <NavLink exact="true" className="contact-link" activeclassname="active" to="/contact" >Contact</NavLink>
            </div>
          <div className="round-menu">
          </div>
        <div className="triangle-menu-container">
        </div>
      <div className="half-screen-red">
      </div>
    </div>
  )
}


export default Home
