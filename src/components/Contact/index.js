import { NavLink } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb} from '@fortawesome/free-solid-svg-icons'
import London from '../../assets/images/london.png'
import Lines from '.././Lines'
import emailjs from '@emailjs/browser'
import Profile from '../../assets/images/profile.png'
import './index.scss'
const Contact = () => {
  const [isYellow, setIsYellow] = useState(false);
  const refForm = useRef()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsYellow(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_spnh9ho',
        'template_1y92kpw',
        refForm.current,
        'J0snU1HJXFnacF_n6'
      )

      .then(
        () => {
          alert('Message sent, I will contact you soon!')
          refForm.current.reset()
        },
        (error) => {
          alert('Message failed to send, please try again')
        }
      )
  }

  return (
    <>
    <div className="container contact-page">
      <Lines className="line-back" />
      <div className="lightbulb-container">
        <NavLink exact="true" activeclassname="active" to="/projects">
          <FontAwesomeIcon icon={faLightbulb} className="lightbulb left-bulb" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/home">
          <FontAwesomeIcon icon={faLightbulb} className="lightbulb middle-bulb" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/contact">
          <FontAwesomeIcon icon={faLightbulb} className={`lightbulb right-bulb ${isYellow ? 'yellow-right' : ''}`} />
        </NavLink>
      </div>
      <>
        <div className="round-menu" />
        <div className="triangle-menu-container" />
      </>
      <img className="profile-img" src={Profile} alt="contact" />
      <div className="half-screen-red" />
      <div className="socials">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/tom-duchambon/" target="_blank" rel="noreferrer">
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://github.com/TomDuchambon" target="_blank" rel="noreferrer">
              Github
            </a>
          </li>
          <li>
            <a href="https://wa.me/33633833586" target="_blank" rel="noreferrer">
              Phone
            </a>
          </li>
      </ul>
          <img src={London} alt="Location" className='london-map' />
    </div><div className='contact-form'>
        <form ref={refForm} onSubmit={sendEmail}>
          <ul>
            <li className='half'>
              <input type="text" name='name' placeholder='Name' required />
            </li>
            <li className='half'>
              <input type="text" name='email' placeholder='Email' required />
            </li>
            <li>
              <input autocomplete="off" placeholder='Subject' type='text' name='subject' required />
            </li>
            <li>
              <textarea placeholder='Message' type='text' name='message' required>
              </textarea>
            </li>
            <li>
              <input type='submit' className='flat-button' value={'SEND'} />
            </li>
          </ul>
        </form>
      </div>
  </div>
  </>
  )
}
export default Contact;
