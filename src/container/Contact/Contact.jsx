import React, { useRef }  from 'react';
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import "./Contact.scss";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_uv42igf', 'template_eyex5t7', form.current, {
        publicKey: 'U3yC0Wy8F6yvOuLKm',
      })
      .then(
        () => {
          toast.success('Rocketed Out');
        },
        (error) => {
          toast.error(error);
        },
      );
      e.target.reset();
  };
  return (
    <section className="contact-section" id='contact'>
      <h2 className='section-title'>Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Kiprotich Davis</h2>
          <p>
            I'm always interested in hearing about new projects and opportunities. Let's
            collaborate to bring your ideas to life!
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <span className="icon"><CiMail /></span>
              <p>davyzkorir@gmail.com</p>
            </div>
            <div className="contact-item">
              <span className="icon"><FaPhone /></span>
              <p>+254 727 111 264</p>
            </div>
          </div>
          <div className="social-links">
            <h4>Let's Connect:</h4>
            <a href="https://linkedin.com/in/kiprotich-davis-652b49243/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://x.com/werigan_non/" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
            <a href="https://github.com/DavisKiprotich/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input className='textarea' type="text" id="name" placeholder="John Doe" name="from_name" required/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input className='textarea' type="email" id="email" placeholder="john@example.com" name="from_email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea name='message'  id="message" placeholder="Hello, I would like to talk about..."></textarea>
            </div>
            <button type="submit" value="Send" className="send-button">
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section> 
  )
}

export default Contact