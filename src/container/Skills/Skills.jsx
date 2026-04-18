import React from "react";
import { FiCpu, FiGlobe, FiSmartphone, FiZap } from "react-icons/fi";

import "./Skills.scss";

const focusAreas = [
  {
    icon: <FiGlobe />,
    title: "Web Development",
    description:
      "Responsive websites, company platforms, dashboards, and portfolio experiences with modern frontend tooling.",
    accent: true,
  },
  {
    icon: <FiSmartphone />,
    title: "Mobile Development",
    description:
      "Mobile application work structured for real product delivery, store-ready publishing, and source-backed portfolio presentation.",
  },
  {
    icon: <FiCpu />,
    title: "IoT Systems",
    description:
      "Field integrations involving routers, fuel probes, DC meters, and connected monitoring setups for operational visibility.",
  },
  {
    icon: <FiZap />,
    title: "Power & IT",
    description:
      "Networking, VMware, cloud exposure, CI/CD workflows, and technical support shaped by infrastructure and power environments.",
  },
];

const Skills = () => {
  return (
    <section className="focus app__section" id="skills">
      <div className="section-shell">
        <div className="section-heading focus__heading">
          <p className="section-kicker">Core Focus</p>
          <h2 className="section-title">
            Four areas define how I work and what I build.
          </h2>
          <p className="section-copy">
            The portfolio is not centered on only one lane. It reflects the mix of
            software, field systems, and technical operations that best represents my work.
          </p>
        </div>

        <div className="focus__grid">
          {focusAreas.map((item) => (
            <article
              className={`focus__card ${item.accent ? "focus__card--accent" : ""}`}
              key={item.title}
            >
              <span className="focus__icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
