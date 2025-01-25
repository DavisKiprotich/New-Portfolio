import React from 'react'


import './Experience.scss'

const Experience = () => {
  return (
    <section className="work-experience">
      <h2 className="section-title">My Work Experience</h2>
      <div className="experience-cards">
        <div className="card">
          <span className="card-number">01</span>
          <h3 className="card-title">
            <span className="highlight-green">Pesaflow Limited</span>, Full stack Elixir Developer
          </h3>
          <p className="card-description">
            Currently working as a full stack software developer. Stack includes Elixir, Phoenix, and Vue.js.
          </p>
        </div>

        <div className="card">
          <span className="card-number">02</span>
          <h3 className="card-title">
            <span className="highlight-blue">The Open Institute</span>, Software Developer
          </h3>
          <p className="card-description">
            I work as a software developer for a digital health project. Developed and trained a <span className="highlight-blue">chatbot</span> for community health workers.
          </p>
        </div>

        <div className="card">
          <span className="card-number">03</span>
          <h3 className="card-title">
            <span className="highlight-pink">Freelancer</span>, Software Developer
          </h3>
          <p className="card-description">
            I have developed and deployed several projects for clients. I have worked with clients from all over the world, e.g., <span className="highlight-pink">10xbeast</span>, <span className="highlight-pink">Mwamba Rugby</span>, <span className="highlight-pink">Raila Odinga</span>, etc.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Experience;