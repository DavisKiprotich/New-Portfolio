import React from "react";

import "./Tech.scss";

const toolGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Mobile & product",
    items: [
      "React Native",
      "Expo",
      "TypeScript apps",
      "App architecture",
      "UI structure",
      "Documentation",
    ],
  },
  {
    title: "Infrastructure",
    items: ["Git", "Docker", "Jenkins", "AWS", "VMware vSphere", "CI/CD"],
  },
  {
    title: "Field systems",
    items: ["Networking", "Router setup", "Fuel probes", "DC meters", "Kali Linux", "Support operations"],
  },
];

const Tech = () => {
  return (
    <section className="tools app__section" id="tech">
      <div className="section-shell tools__layout">
        <div className="section-heading tools__heading">
          <p className="section-kicker">Tools & Platforms</p>
          <h2 className="section-title">
            A toolkit shaped by software delivery and operational work.
          </h2>
          <p className="section-copy">
            These are the technologies and environments that most often show up in my
            projects and day-to-day engineering work.
          </p>
        </div>

        <div className="tools__groups">
          {toolGroups.map((group) => (
            <article className="tools__group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="pill-list">
                {group.items.map((item) => (
                  <span className="pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
