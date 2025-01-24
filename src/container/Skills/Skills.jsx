import React from "react";
import { FaCode } from "react-icons/fa";
import { BsRouter } from "react-icons/bs";
import { FaPenToSquare } from "react-icons/fa6";
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
            JavaScript, and modern frameworks like React, Next.js, Tailwind CSS,
            and Phoenix LiveView.
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
            I have a strong understanding of backend development, including
            database design and API development. My experience includes working
            with Elixir and the Phoenix framework for building robust, scalable
            applications.
          </p>
        </div>

        <div class="skill-card">
          <div class="icon">
            <i class="fas fa-pencil-alt">
              <FaPenToSquare />
            </i>
          </div>
          <h3 class="skill-title">Technical Writing</h3>
          <p class="skill-description">
            I have a strong understanding of the content writing process. My
            focus is on clarity, relevance, and SEO optimization. I ensure the
            content aligns with the target audience and business goals.
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
            I have a solid grasp of database design, specializing in efficient
            and scalable data storage. My focus is on optimizing performance
            while maintaining data integrity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
