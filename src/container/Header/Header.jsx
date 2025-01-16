import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import Typical from "react-typical";
import { images } from "../../constants";

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👊🏽</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Kiprotich Davis</h1>
            </div>
          </div>

          <div className="app__flex">
            <span className="primary-text">
              {" "}
              <h6>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Front End Developer",
                    800,
                    "Networking Engineer",
                    800,
                    "Electrical Engineer",
                    800,
                    "Cloud Engineering Enthusiast",
                    800,
                    "Ethical Hacking Enthusiast",
                    800,
                  ]}
                />
              </h6>
            </span>
          </div>
          </div>
        {/* </div> */}
      </motion.div>
      
      <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    </div>
  );
};

export default Header;
