import React from "react";

import "./Experience.scss";

const entries = [
  {
    company: "AlanDick & Co. (E.A) Ltd",
    role: "Power and IT Support Engineer",
    tag: "Current role",
    accent: "accent",
    summary:
      "I support server infrastructure, networking, VMware environments, and live operational systems while also handling deployment work tied to site reliability.",
    highlights: [
      "Maintain networking and infrastructure continuity in operational environments.",
      "Deploy IoT integrations such as routers, fuel probes, and DC meters.",
      "Support power-facing systems and the technical stack around them.",
    ],
  },
  {
    company: "Netline Technologies Limited",
    role: "Head of Operations",
    tag: "Operations leadership",
    accent: "muted",
    summary:
      "I led technical operations while also building the company website and helping improve the surrounding infrastructure footprint.",
    highlights: [
      "Designed and launched the company website.",
      "Oversaw networking, electro-mechanical installations, and uptime-focused work.",
      "Balanced delivery leadership with continued software growth.",
    ],
    link: "https://netline-technologies.vercel.app/",
  },
  {
    company: "Freelance",
    role: "Web and Software Projects",
    tag: "Independent work",
    accent: "muted",
    summary:
      "I have built websites, product interfaces, and software concepts that sharpen both my engineering discipline and design sensitivity.",
    highlights: [
      "Built hosted web projects and portfolio experiences.",
      "Worked on app concepts and product-facing user interfaces.",
      "Used each build to improve visual quality and delivery speed.",
    ],
  },
  {
    company: "Moi University",
    role: "BEng Electrical & Telecommunications Engineering",
    tag: "Education",
    accent: "accent",
    summary:
      "My academic background gave me a systems-first foundation that still shapes how I approach software, infrastructure, and field deployment work.",
    highlights: [
      "Built a strong engineering base in electrical and telecommunications systems.",
      "Developed the problem-solving mindset behind my software work.",
      "Graduated with a broader technical lens than a software-only path.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience app__section" id="experience">
      <div className="section-shell">
        <div className="section-heading">
          <p className="section-kicker">Experience</p>
          <h2 className="section-title">
            Experience and education that support the full story.
          </h2>
          <p className="section-copy">
            The software projects matter, but so do the engineering environments that
            shaped them. This section ties the two together.
          </p>
        </div>

        <div className="experience__timeline">
          {entries.map((entry, index) => (
            <article
              className={`experience__card experience__card--${entry.accent}`}
              key={entry.company}
            >
              <span className="experience__number">0{index + 1}</span>

              <div className="experience__content">
                <div className="experience__meta">
                  <span className="experience__tag">{entry.tag}</span>
                  {entry.link ? (
                    <a
                      className="experience__link"
                      href={entry.link}
                      rel="noreferrer"
                      target="_blank"
                    >
                      View related project
                    </a>
                  ) : null}
                </div>

                <h3>
                  <span>{entry.company}</span>
                  {entry.role}
                </h3>

                <p>{entry.summary}</p>

                <ul>
                  {entry.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
