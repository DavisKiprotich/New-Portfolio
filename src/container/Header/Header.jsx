import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import Typical from "react-typical";
import { images } from "../../constants";

const Header = () => {
  return (
    <header class="header">
        <div class="header-content">
            <h4>LET'S BUILD SOMETHING BEAUTIFUL</h4>
            <h1>Hi, I am <span class="highlight">Michael Munavu</span></h1>
            <h2>I am a <span class="role">Phoenix</span></h2>
            <p>I am a full-stack developer with 4 years of experience, trained at Microverse and Moringa. I specialize in building scalable web applications using Elixir, Phoenix, and React JS. From startups to enterprise solutions, I’ve delivered projects that prioritize user experience and performance. I also create content around tech to help developers grow. Let’s create something impactful together.</p>
            <div class="social-icons">
                <a href="#" class="icon linkedin">&#xf08c;</a>
                <a href="#" class="icon github">&#xf09b;</a>
                <a href="#" class="icon twitter">&#xf099;</a>
                <a href="#" class="icon phone">&#xf095;</a>
                <a href="#" class="icon email">&#xf0e0;</a>
                <a href="#" class="icon tiktok">&#xf16d;</a>
            </div>
        </div>
    </header>
  );
};

export default Header;
