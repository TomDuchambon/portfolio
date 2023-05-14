import Lines from '.././Lines'
import Chair from '../../assets/images/about-chair.png'
import './index.scss'
import Lightbulbs from '../Lightbulbs';

const About = () => {

  return (
    <div className="container about-page">
       <Lines className="line-back"/>
        < Lightbulbs />
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
            Some of my recent projects include a mobile app called "Mélo" that acts as a digital promoter for emerging artists.
            Currently teaching at Le Wagon coding bootcamp and working on my own projects.
            Open to new opportunities. Feel free to contact me by turning the right bulb on !
            </p>
        </div>
    </div>
  )
}

export default About;
