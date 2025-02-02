import React from "react";
import { FaCode } from "react-icons/fa";
import { BsRouter } from "react-icons/bs";
import { SiKalilinux } from "react-icons/si";
import { TbCloudNetwork } from "react-icons/tb";

import "./Skills.scss";

const Skills = () => {
  return (
    <section class="skillset">
      <h2 class="skillset-title">My Expertise</h2>
      <div class="skills-container">
        <div class="skill-card">
          <div class="icon">
            <i class="fas fa-code">
              <FaCode />
            </i>
          </div>
          <h3 class="skill-title">Frontend Developer</h3>
          <p class="skill-description">
            I have a solid foundation in frontend development and can build
            websites from the ground up. My expertise includes HTML, CSS,
            JavaScript, and modern frameworks like React, Next.js and Tailwind CSS.
          </p>
        </div>

        <div class="skill-card">
          <div class="icon">
            <i class="fas fa-server">
              <BsRouter />
            </i>
          </div>
          <h3 class="skill-title">IoT Solutions</h3>
          <p class="skill-description">
          Proficient in deploying IoT systems, including the installation and configuration of routers, 
          integration of fuel probes for real-time monitoring, and DC meters for energy management. 
          Skilled in implementing smart power systems to enhance efficiency and ensure seamless connectivity in diverse environments.
          </p>
        </div>

        <div class="skill-card">
          <div class="icon">
            <i class="fas fa-pencil-alt">
              <SiKalilinux /> 
            </i>
          </div>
          <h3 class="skill-title">Ethical Hacking</h3>
          <p class="skill-description">
          Experienced in ethical hacking and penetration testing using tools such as Kali Linux and Wireshark, 
          ensuring robust security by identifying vulnerabilities and strengthening system defenses.
          </p>
        </div>

        <div class="skill-card">
          <div class="icon">
            <i class="fas fa-database">
              <TbCloudNetwork />
            </i>
          </div>
          <h3 class="skill-title">Cloud and Networking</h3>
          <p class="skill-description">
          Skilled in cloud infrastructure management, 
          utilizing VMware vSphere for virtualization to 
          optimize resources and streamline operations. 
          Possesses strong networking expertise, ensuring seamless connectivity and 
          maintaining the stability of systems to support business continuity and productivity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
