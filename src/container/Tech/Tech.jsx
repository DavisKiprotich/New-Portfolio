import React from 'react'
import Js from '../../assets/javascript.png';
import HTML from '../../assets/html.png';
import CSS from '../../assets/css.png';
import Kali from '../../assets/Kali Linux.jpg'
import AWS from '../../assets/AWS.jpg'
import Jenkins from '../../assets/Jenkins.jpg'
import git from '../../assets/git.png'
import vmware from '../../assets/VMware.jpg'
import Reactapp from '../../assets/react.png'
import Typescriptapp from '../../assets/typescript.png'
import pythonapp from '../../assets/python.png'
import Docker from '../../assets/Docker..jpg'


import "./Tech.scss";

const Tech = () => {
  return (
    <section class="tech-section">
  <h2 class="tech-title">Technologies</h2>
  <div class="tech-grid">
    <div class="tech-card">
      <img src= {Js} alt="JavaScript Icon" class="tech-icon" />
      <span class="tech-name">JavaScript</span>
    </div>
    <div class="tech-card">
      <img src={HTML} alt="HTML Icon" class="tech-icon" />
      <span class="tech-name">HTML</span>
    </div>
    <div class="tech-card">
      <img src={CSS} alt="CSS Icon" class="tech-icon" />
      <span class="tech-name">CSS</span>
    </div>
    <div class="tech-card">
      <img src={Kali} alt="Kali Icon" class="tech-icon" />
      <span class="tech-name">Kali</span>
    </div>
    <div class="tech-card">
      <img src={AWS} alt="AWS Icon" class="tech-icon" />
      <span class="tech-name">AWS</span>
    </div>
    <div class="tech-card">
      <img src={Jenkins} alt="Jenkins Icon" class="tech-icon" />
      <span class="tech-name">Jenkins</span>
    </div>
    <div class="tech-card">
      <img src={git} alt="git Icon" class="tech-icon" />
      <span class="tech-name">Git</span>
    </div>
    <div class="tech-card">
      <img src={vmware} alt="vmware Icon" class="tech-icon" />
      <span class="tech-name">VMware vSphere</span>
    </div>
    <div class="tech-card">
      <img src={pythonapp} alt="python Icon" class="tech-icon" />
      <span class="tech-name">Python</span>
    </div>
    <div class="tech-card">
      <img src={Typescriptapp} alt="Typescript Icon" class="tech-icon" />
      <span class="tech-name">Typescript</span>
    </div>
    <div class="tech-card">
      <img src={Reactapp} alt="React Icon" class="tech-icon" />
      <span class="tech-name">React</span>
    </div>
    <div class="tech-card">
      <img src={Docker} alt="Docker Icon" class="tech-icon" />
      <span class="tech-name">Docker</span>
    </div>
    
  </div>
</section>

  )
}

export default Tech