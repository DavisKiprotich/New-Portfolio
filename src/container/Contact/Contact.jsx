import React from 'react';
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact-section">
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
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" placeholder="Hello, I would like to talk about..."></textarea>
            </div>
            <button type="submit" className="send-button">
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section> 
  )
}

export default Contact