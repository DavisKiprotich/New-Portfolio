import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { HiMenuAlt4, HiX } from "react-icons/hi";

import "./Navbar.scss";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Focus" },
  { id: "work", label: "Projects" },
  { id: "tech", label: "Tools" },
  { id: "certifications", label: "Certificates" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const closeMenu = () => setToggle(false);

  return (
    <nav className="app__navbar">
      <div className="section-shell app__navbar-inner">
        <a className="app__navbar-brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">KD</span>
          <span className="brand-copy">
            <strong>Kiprotich Davis</strong>
            <small>Engineer who builds software</small>
          </span>
        </a>

        <ul className="app__navbar-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a className="navbar__link" href={`#${item.id}`}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a className="app__navbar-cta" href="#contact">
          Let&apos;s talk
          <FiArrowUpRight />
        </a>

        <button
          aria-label="Open navigation menu"
          className="app__navbar-menu-button"
          onClick={() => setToggle(true)}
          type="button"
        >
          <HiMenuAlt4 />
        </button>
      </div>

      <AnimatePresence>
        {toggle ? (
          <motion.div
            animate={{ opacity: 1 }}
            className="app__navbar-overlay"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={closeMenu}
          >
            <motion.aside
              animate={{ x: 0 }}
              className="app__navbar-drawer"
              exit={{ x: "100%" }}
              initial={{ x: "100%" }}
              onClick={(event) => event.stopPropagation()}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="app__navbar-drawer-header">
                <div className="drawer-brand">
                  <span className="brand-mark">KD</span>
                  <div>
                    <strong>Kiprotich Davis</strong>
                    <small>Engineer who builds software</small>
                  </div>
                </div>

                <button
                  aria-label="Close navigation menu"
                  className="app__navbar-close"
                  onClick={closeMenu}
                  type="button"
                >
                  <HiX />
                </button>
              </div>

              <ul className="app__navbar-drawer-links">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} onClick={closeMenu}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <a className="app__navbar-drawer-cta" href="#contact" onClick={closeMenu}>
                Start a conversation
                <FiArrowUpRight />
              </a>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
