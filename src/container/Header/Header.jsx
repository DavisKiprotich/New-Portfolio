import React from "react";
import { FiArrowRight, FiBriefcase, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";

import passport from "../../assets/passport-nobg.png";
import "./Header.scss";

const heroFacts = [
  {
    value: "BEng",
    label: "Electrical & Telecommunications Engineering",
  },
  {
    value: "Moi",
    label: "University graduate with practical field and software exposure",
  },
  {
    value: "4 lanes",
    label: "Web, mobile, IoT, and Power & IT delivery",
  },
  {
    value: "Kenya",
    label: "Based in Nairobi and open to collaborative builds",
  },
];

const socialLinks = [
  {
    href: "https://linkedin.com/in/kiprotich-davis-652b49243/",
    icon: <FaLinkedin />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/DavisKiprotich/",
    icon: <FaGithub />,
    label: "GitHub",
  },
  {
    href: "https://x.com/werigan_non/",
    icon: <FaSquareXTwitter />,
    label: "X",
  },
  {
    href: "mailto:davyzkorir@gmail.com",
    icon: <MdAttachEmail />,
    label: "Email",
  },
];

const Header = () => {
  return (
    <header className="hero app__section" id="home">
      <div className="section-shell hero__grid">
        <div className="hero__lead">
          <p className="hero__eyebrow">Electrical &amp; Telecommunications Engineer</p>

          <h1 className="hero__name">
            Kiprotich
            <span>Davis.</span>
          </h1>

          <h2 className="hero__role">Engineer who also builds software.</h2>

          <p className="hero__summary">
            I am a Moi University graduate building practical solutions across web
            platforms, mobile products, IoT systems, and Power &amp; IT environments.
            My work sits at the intersection of engineering reliability and clean
            digital execution.
          </p>

          <div className="hero__actions">
            <a className="hero__button hero__button--primary" href="#work">
              View projects
              <FiArrowRight />
            </a>

            <a className="hero__button hero__button--secondary" href="#contact">
              Start a conversation
            </a>
          </div>

          <div className="hero__meta">
            <span>
              <FiMapPin />
              Nairobi, Kenya
            </span>
            <span>
              <FiBriefcase />
              Open to freelance, product, and engineering opportunities
            </span>
          </div>

          <div className="hero__socials">
            {socialLinks.map((link) => (
              <a
                aria-label={link.label}
                className="hero__social"
                href={link.href}
                key={link.label}
                rel="noreferrer"
                target="_blank"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="hero__portrait">
          <div className="hero__portrait-panel">
            <img src={passport} alt="Portrait of Kiprotich Davis" />
          </div>
        </div>

        <aside className="hero__aside soft-panel">
          <span className="hero__aside-label">Introduction</span>
          <h3>Software delivery backed by engineering context.</h3>
          <p>
            I don&apos;t approach products as visuals alone. I think about deployment,
            uptime, devices, infrastructure, and how a solution behaves in the real world.
          </p>

          <ul>
            <li>Web development for hosted products and company sites</li>
            <li>Mobile app work with source-ready project structure</li>
            <li>IoT deployments for monitoring and field visibility</li>
            <li>Power &amp; IT support spanning networking, VMware, and operations</li>
          </ul>

          <a className="hero__aside-link" href="#about">
            Learn more
            <FiArrowRight />
          </a>
        </aside>
      </div>

      <div className="section-shell hero__facts">
        {heroFacts.map((fact) => (
          <article className="hero__fact" key={fact.label}>
            <strong>{fact.value}</strong>
            <p>{fact.label}</p>
          </article>
        ))}
      </div>
    </header>
  );
};

export default Header;
