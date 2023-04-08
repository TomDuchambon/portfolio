import { NavLink } from 'react-router-dom'
import Lines from '.././Lines'
import './index.scss'
import Lightbulbs from '../Lightbulbs';

const Home = () => {

  return (
    <div className="container home-page">
      <Lines className="line-home"/>
      < Lightbulbs className="lightbulbs-home" />
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
