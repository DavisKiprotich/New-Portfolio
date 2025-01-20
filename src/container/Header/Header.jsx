import React from "react";
import "./Header.scss";
import Typical from "react-typical";
import { FaLinkedin, FaGithub, FaPhoneAlt,  } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";

const Header = () => {
  return (
    <header class="header">
        <div class="header-content">
            <h4>LET'S BUILD SOMETHING BEAUTIFUL</h4>
            <h1>Hi, I am <span class="highlight">KIPROTICH DAVIS</span></h1>
            <h2>I am a 
              <span class="role">
                {" "}
                <span>
                  {" "}
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Front End Developer",
                      1000,
                      "Networking Engineer",
                      1000,
                      "IOT Solutions Engineer",
                      1000,
                      "Cloud Engineering Enthusiast",
                      1000,
                      "Ethical Hacking Enthusiast",
                      1000,
                    ]}
                  />
                </span>
              </span>
            </h2>
            <p>I am a full-stack developer with 4 years of experience, trained at Microverse and Moringa. I specialize in building scalable web applications using Elixir, Phoenix, and React JS. From startups to enterprise solutions, I’ve delivered projects that prioritize user experience and performance. I also create content around tech to help developers grow. Let’s create something impactful together.</p>
            <div class="social-icons">
                <a href="#" className="icon linkedin"><FaLinkedin /></a>
                <a href="#" className="icon github"><FaGithub /></a>
                <a href="#" className="icon twitter"><FaSquareXTwitter /></a>
                <a href="#" className="icon phone"><FaPhoneAlt /></a>
                <a href="#" className="icon email"><MdAttachEmail /></a>
                {/* <a href="#" className="icon tiktok">&#xf16d;</a> */}
            </div>
        </div>
    </header>
  );
};

export default Header;
