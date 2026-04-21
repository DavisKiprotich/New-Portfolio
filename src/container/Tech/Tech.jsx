import React, { useEffect, useRef, useState } from "react";
import { FiActivity, FiCode, FiServer, FiSmartphone } from "react-icons/fi";

import "./Tech.scss";

const toolGroups = [
  {
    title: "Software systems",
    copy:
      "The core software stack I rely on across web and mobile work, covering interface delivery, application structure, and the backend-facing logic that supports real products.",
    icon: FiCode,
    tone: "frontend",
    items: [
      { label: "React & modern UI builds", context: "Frontend delivery", level: 94 },
      { label: "JavaScript & TypeScript", context: "Core stack", level: 90 },
      { label: "HTML, CSS & Sass", context: "Interface craft", level: 92 },
      { label: "Node.js & API integration", context: "Backend-facing work", level: 78 },
      { label: "Responsive product systems", context: "Web and mobile thinking", level: 88 },
    ],
  },
  {
    title: "Mobile delivery",
    copy:
      "Mobile work centered on React Native, Expo, and app structure that can move cleanly from build stage to public store release.",
    icon: FiSmartphone,
    tone: "mobile",
    items: [
      { label: "React Native", context: "App builds", level: 89 },
      { label: "Expo workflow", context: "Faster shipping", level: 86 },
      { label: "Store release prep", context: "Publishing ready", level: 81 },
      { label: "App architecture", context: "Maintainable flows", level: 79 },
      { label: "Documentation", context: "Clear handover", level: 82 },
    ],
  },
  {
    title: "Infrastructure & release",
    copy:
      "The tools I use around version control, automation, and operational delivery when software needs a steadier path into deployment.",
    icon: FiServer,
    tone: "infrastructure",
    items: [
      { label: "Git & GitHub", context: "Daily workflow", level: 91 },
      { label: "CI/CD pipelines", context: "Delivery discipline", level: 77 },
      { label: "Docker", context: "Build environments", level: 71 },
      { label: "Jenkins", context: "Pipeline labs", level: 73 },
      { label: "VMware & cloud exposure", context: "Ops context", level: 75 },
    ],
  },
  {
    title: "Field systems & support",
    copy:
      "Operational work across networking, monitoring, and power-facing environments where uptime, visibility, and site support matter.",
    icon: FiActivity,
    tone: "field",
    items: [
      { label: "Networking", context: "Operational support", level: 87 },
      { label: "Router setup", context: "Site readiness", level: 83 },
      { label: "Monitoring & telemetry", context: "Live visibility", level: 80 },
      { label: "Fuel probes & DC meters", context: "Field integration", level: 74 },
      { label: "Power & IT support", context: "Response handling", level: 85 },
    ],
  },
];

const focusNotes = [
  {
    label: "4 lanes",
    text: "Web, mobile, infrastructure, and field systems all show up in the same portfolio.",
  },
  {
    label: "Practical",
    text: "I choose tools around delivery, maintainability, and the realities of how the work will be used.",
  },
  {
    label: "Engineering-backed",
    text: "The software stack is strengthened by operational exposure, deployment awareness, and system thinking.",
  },
];

const Tech = () => {
  const sectionRef = useRef(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const sectionNode = sectionRef.current;

    if (!sectionNode || isAnimated) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAnimated(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.28,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(sectionNode);

    return () => {
      observer.disconnect();
    };
  }, [isAnimated]);

  return (
    <section
      className={`tools app__section ${isAnimated ? "is-animated" : ""}`}
      id="tech"
      ref={sectionRef}
    >
      <div className="section-shell tools__layout">
        <div className="section-heading tools__heading">
          <p className="section-kicker">Tools & Platforms</p>
          <h2 className="section-title">
            A toolkit shaped by software delivery and operational work.
          </h2>
          <p className="section-copy">
            These are the technologies and environments that most often show up in my
            projects, engineering support, and day-to-day delivery work.
          </p>

          <div className="tools__signal soft-panel">
            {focusNotes.map((note) => (
              <div className="tools__signal-row" key={note.label}>
                <strong>{note.label}</strong>
                <p>{note.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="tools__grid">
          {toolGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                className={`tools__card tools__card--${group.tone}`}
                key={group.title}
              >
                <div className="tools__card-head">
                  <span className="tools__card-icon">
                    <Icon />
                  </span>

                  <div className="tools__card-copy">
                    <h3>{group.title}</h3>
                    <p>{group.copy}</p>
                  </div>
                </div>

                <div className="tools__metrics">
                  {group.items.map((item, index) => (
                    <div className="tools__metric" key={item.label}>
                      <div className="tools__metric-head">
                        <span>{item.label}</span>
                        <em>{item.context}</em>
                      </div>

                      <div className="tools__metric-bar" aria-hidden="true">
                        <span
                          style={{
                            "--tools-level": `${item.level}%`,
                            transitionDelay: `${index * 90}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tech;
