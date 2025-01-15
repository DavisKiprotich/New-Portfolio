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
          {/* <div className="tag-cmp app__flex"> */}
            <span className="primary-text">
              {" "}
              <h3>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Front End Developer",
                    1000,
                    "Networking Engineer",
                    1000,
                    "Electrical Engineer",
                    1000,
                    "Cloud Engineering Enthusiast",
                    1000,
                    "Ethical Hacking Enthusiast",
                    1000,
                  ]}
                />
              </h3>
            </span>
          </div>
        {/* </div> */}
      </motion.div>
    </div>
  );
};

export default Header;
