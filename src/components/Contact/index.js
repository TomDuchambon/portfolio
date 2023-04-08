import { useRef } from 'react';
import London from '../../assets/images/london.png'
import Lines from '.././Lines'
import emailjs from '@emailjs/browser'
import Profile from '../../assets/images/profile.png'
import './index.scss'
import Lightbulbs from '../Lightbulbs';

const Contact = () => {
  const refForm = useRef()

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
        < Lightbulbs />
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
          <form autocomplete="off" ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className='half'>
                <input type="text" name='name' placeholder='Name' required />
              </li>
              <li className='half'>
                <input type="text" name='email' placeholder='Email' required />
              </li>
              <li>
                <input placeholder='Subject' type='text' name='subject' required />
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
