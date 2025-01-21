import React from "react";
import "./About.scss";

const About = () => {
    // Sample code to display
    
    return (
      <div class="about">
  <h2 class="about-title">Who am I?</h2>
  <div class="about-content">
    <div class="about-text">
      <p>
        I am a <span class="highlight">software engineer</span> and <span class="highlight">Full Stack Developer</span> with expertise in 
        <span class="highlight">Elixir</span>, <span class="highlight">Phoenix Live View</span>, and <span class="highlight">React JS</span>.
        I am also a <span class="highlight">Technical Writer</span>.
      </p>
      <p>
        Over the last four years, I have gained considerable professional experience in the technology industry. I am a graduate of
        <span class="highlight">Microverse</span>, a remote international learning institution where I collaborated with developers across the globe.
      </p>
      <p>
        Through my experiences, I have discovered my passion for teaching, mentoring, and building impactful software solutions.
      </p>
    </div>
    <div class="about-image">
      <img src="path-to-your-image.jpg" alt="About me image" />
    </div>
  </div>
</div>

    );
  };

export default About;
