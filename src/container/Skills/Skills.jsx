import React from "react";
import { FiCpu, FiGlobe, FiSmartphone, FiZap } from "react-icons/fi";

import "./Skills.scss";

const focusAreas = [
  {
    icon: <FiGlobe />,
    title: "Web Development",
    description:
      "Responsive websites, company platforms, dashboards, and portfolio experiences with modern frontend tooling.",
    previewLabel: "Hosted builds",
    previewCaption: "Responsive launches with stronger visual storytelling",
    accentColor: "#f2b53d",
    glow: "242, 181, 61",
    accent: true,
  },
  {
    icon: <FiSmartphone />,
    title: "Mobile Development",
    description:
      "Mobile application work structured for real product delivery, store-ready publishing, and source-backed portfolio presentation.",
    previewLabel: "Store-ready apps",
    previewCaption: "Play Store delivery with product-first thinking",
    accentColor: "#8cb5ff",
    glow: "140, 181, 255",
  },
  {
    icon: <FiCpu />,
    title: "Systems Integration",
    description:
      "Field integrations involving routers, fuel probes, DC meters, and connected monitoring setups for operational visibility.",
    previewLabel: "Connected systems",
    previewCaption: "Monitoring flows, device links, and operational visibility",
    accentColor: "#79d6c0",
    glow: "121, 214, 192",
  },
  {
    icon: <FiZap />,
    title: "Power & IT (IoT)",
    description:
      "Networking, VMware, cloud exposure, CI/CD workflows, and technical support shaped by infrastructure and power environments.",
    previewLabel: "Operational support",
    previewCaption: "Infrastructure, uptime, and deployment context",
    accentColor: "#f3c46a",
    glow: "243, 196, 106",
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
            software, connected systems, and technical operations that best represents
            my work.
          </p>
        </div>

        <div className="focus__grid">
          {focusAreas.map((item) => (
            <article
              className={`focus__card ${item.accent ? "focus__card--accent" : ""}`}
              key={item.title}
              style={{
                "--focus-accent": item.accentColor,
                "--focus-glow": item.glow,
              }}
            >
              <div className="focus__copy">
                <span className="focus__icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <div className="focus__preview" aria-hidden="true">
                <div className="focus__preview-surface">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="focus__preview-copy">
                  <span>{item.previewLabel}</span>
                  <strong>{item.previewCaption}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
