import React from 'react'
import './Footer.scss'
import {FaPhoneAlt} from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Roy Kiprop</h3>
          <p>Passionate developer crafting innovative digital solutions with modern technologies.</p>
          <div className="social-links">
            {/* <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a> */}
            {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a> */}
            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a> */}
          </div>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="quick-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skillset">SkillSet</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact Info</h3>
          <div className="contact-info">
            <div className="contact-item">
              <FaPhoneAlt/>
              <span>+254 727 111 264</span>
            </div>
            <div className="contact-item">
              <MdAttachEmail/>
              <span>davyzkorir@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Kiprotich Davis. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer