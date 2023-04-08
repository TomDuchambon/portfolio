import Lines from '.././Lines'
import './index.scss'
import Picasso from '../../assets/images/picasso.png'
import Lightbulbs from '../Lightbulbs';

const Projects = () => {

  return (
    <div className="container projects-page">
      <Lines className="line-back"/>
        < Lightbulbs />
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
