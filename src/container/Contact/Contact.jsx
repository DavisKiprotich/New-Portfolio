import React from 'react';

import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Roy Kiprop</h2>
          <h3>Full Stack Developer</h3>
          <p>
            I'm always interested in hearing about new projects and opportunities. Let's
            collaborate to bring your ideas to life!
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <span className="icon">📧</span>
              <span>Email</span>
              <p>roykiprop590@gmail.com</p>
            </div>
            <div className="contact-item">
              <span className="icon">📞</span>
              <span>Phone</span>
              <p>+254 711 470 560</p>
            </div>
          </div>
          <div className="social-links">
            <h4>Let's Connect:</h4>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">🔗</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">❌</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">🐙</a>
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