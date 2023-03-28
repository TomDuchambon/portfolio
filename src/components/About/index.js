import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb} from '@fortawesome/free-solid-svg-icons'
import Lines from '.././Lines'
import Chair from '../../assets/images/about-chair.png'
import './index.scss'

const About = () => {

  const [isYellow, setIsYellow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsYellow(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container about-page">
       <Lines className="line-back"/>
      <div className="lightbulb-container">
        <NavLink exact="true" activeclassname="active" to="/projects">
        <FontAwesomeIcon icon={faLightbulb} className={`lightbulb left-bulb ${isYellow ? 'yellow-left' : ''}`}/>
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/home">
        <FontAwesomeIcon icon={faLightbulb} className={`lightbulb middle-bulb ${isYellow ? 'yellow-mid' : ''}`} />
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/contact">
        <FontAwesomeIcon icon={faLightbulb} className={`lightbulb right-bulb ${isYellow ? 'yellow-right' : ''}`} />
        </NavLink>
        </div>
        <div className="round-menu">
        </div>
        <div className="triangle-menu-container">
        </div>
        <img src={Chair} alt="Hello there" className='about-chair'></img>
      <div className="half-screen-yellow">
      </div>
        <div className="text-zone">
          <h1 className="about-title">Tom Duchambon</h1>
          <h3 className="about-subtitle">Full Stack Software Engineer</h3>
          <p className="about-text">I am a full stack software engineer with a background in the arts. I have a passion for creating and building things. I am a problem solver and I love to learn new things. I am currently looking for a full time position as a software engineer.</p>
        </div>
    </div>
  )
}

export default About;
