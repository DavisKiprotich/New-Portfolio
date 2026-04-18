import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import "./Footer.scss";

const socialLinks = [
  { href: "https://github.com/DavisKiprotich/", icon: <FaGithub />, label: "GitHub" },
  {
    href: "https://linkedin.com/in/kiprotich-davis-652b49243",
    icon: <FaLinkedin />,
    label: "LinkedIn",
  },
  { href: "https://x.com/werigan_non", icon: <FaSquareXTwitter />, label: "X" },
];

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="section-shell site-footer__inner">
        <span className="site-footer__brand">KD</span>
        <p className="site-footer__message">
          Engineer who builds software across web, mobile, IoT, and Power &amp; IT.
        </p>
        <p className="site-footer__note">Thanks for scrolling, that&apos;s all folks.</p>

        <div className="site-footer__socials">
          {socialLinks.map((link) => (
            <a
              aria-label={link.label}
              className="site-footer__social"
              href={link.href}
              key={link.label}
              rel="noreferrer"
              target="_blank"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <p className="site-footer__copyright">
          &copy; {new Date().getFullYear()} Kiprotich Davis. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
