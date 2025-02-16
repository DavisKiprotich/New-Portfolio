import React from "react";
import "./Header.scss";
import Typical from "react-typical";
import { FaLinkedin, FaGithub, FaPhoneAlt,  } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";

const Header = () => {
  return (
    <header class="header" id="home">
        <div class="header-content">
            <h4>TURNING YOUR IDEAS INTO REALITY!</h4>
            <h1>Hi, I am <span class="highlight">KIPROTICH DAVIS</span></h1>
            <h2>I focus on 
              <span class="role">
                {" "}
                <span className="highlight-text">
                  {" "}
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Front End Development",
                      2000,
                      "Networking",
                      2000,
                      "IOT Solutions",
                      2500,
                      "Cloud Computing",
                      2500,
                      "Virtualization",
                      2500,
                      "Ethical Hacking",
                      2000,
                    ]}
                  />
                </span>
              </span>
            </h2>
            <p>I am a frontend developer with over 2 years of experience in building responsive and dynamic websites using HTML, CSS, React, and Tailwind CSS. Alongside my web development skills, I have a strong background in networking, IoT solutions, cloud computing, virtualization, CI/CD, and ethical hacking, allowing me to approach projects with a broad technical perspective.</p>
            <div class="social-icons">
                <a href="#" className="icon linkedin"><FaLinkedin /></a>
                <a href="#" className="icon github"><FaGithub /></a>
                <a href="#" className="icon twitter"><FaSquareXTwitter /></a>
                <a href="#" className="icon phone"><FaPhoneAlt /></a>
                <a href="#" className="icon email"><MdAttachEmail /></a>
            </div>
        </div>
    </header>
  );
};

export default Header;
