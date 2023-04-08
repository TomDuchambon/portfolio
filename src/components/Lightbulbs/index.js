import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb} from '@fortawesome/free-solid-svg-icons'
import { NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';

const Lightbulbs = () => {

  const [isYellow, setIsYellow] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsYellow(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="lightbulb-container">
        <NavLink exact="true" activeclassname="active" to="/projects">
        <FontAwesomeIcon icon={faLightbulb} className={`lightbulb left-bulb ${isYellow ? 'yellow-left' : ''}`}/>
        </NavLink>
        {location.pathname === "/about" || location.pathname === "/contact" ? (
          <NavLink exact activeClassName="active" to="/home">
            <FontAwesomeIcon icon={faLightbulb} className={`lightbulb middle-bulb ${isYellow ? "yellow-mid" : ""}`} />
          </NavLink>
        ) : (
          <NavLink exact activeClassName="active" to="/about">
            <FontAwesomeIcon icon={faLightbulb} className={`lightbulb middle-bulb ${isYellow ? "yellow-mid" : ""}`} />
          </NavLink>
        )}
        <NavLink exact="true" activeclassname="active" to="/contact">
        <FontAwesomeIcon icon={faLightbulb} className={`lightbulb right-bulb ${isYellow ? 'yellow-right' : ''}`} />
        </NavLink>
        </div>
  )
}

export default Lightbulbs
