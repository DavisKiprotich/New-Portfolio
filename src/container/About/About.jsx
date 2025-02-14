import React from "react";
import "./About.scss";
import profile from "../../assets/profile.png";

const About = () => {
  // Sample code to display

  return (
    <div class="about">
      <h2 class="about-title">Who am I?</h2>
      <div class="about-content">
        <div class="about-text">
          <p>
            I am an <span class="highlight">Experienced Engineer</span> and{" "}
            <span class="highlight">Frontend Developer</span> with expertise
            in
            <span class="highlight"> Next JS</span>,{" "}
            <span class="highlight">Tailwind CSS</span>, and{" "}
            <span class="highlight">React JS</span>. I am also proficient in{" "}
            <span class="highlight">Cloud Computing and Networking</span>.
          </p>
          <p>
            Over the last four years, I have gained considerable professional
            experience in the tech industry in Penetration Testing, 
            VMware vSphere virtualization, Bash scripting, penetration testing, and IoT.
          </p>
          <p>
            Through my experiences, I have discovered my passion for
            mentoring, and building impactful software solutions.
          </p>
        </div>
        <div class="about-image">
          <img src={profile} alt="profile pic" />
        </div>
      </div>
    </div>
  );
};

export default About;
