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
          <h2 className="about-title">I'm Tom Duchambon</h2>
          <h3 className="about-subtitle">Full Stack Software Engineer</h3>
          <p className="about-text">
            London based with a background in the arts, music and fashion.
            Passionate about design and technology.
            Some of my recent projects including a mobile app called "Mélo" that acts as a digital promoter for emerging artists.
            Currently teaching at Le Wagon coding bootcamp and working on my own projects.
            Open to new opportunities. Feel free to contact me by turning the right bulb on !
            </p>
        </div>
    </div>
  )
}

export default About;
