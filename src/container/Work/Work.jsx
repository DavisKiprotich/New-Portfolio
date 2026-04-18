import React, { useState } from "react";
import { FaApple, FaGithub, FaGooglePlay } from "react-icons/fa";
import { FiArrowUpRight, FiLock } from "react-icons/fi";

import "./Work.scss";

const projects = [
  {
    title: "DavidZilla Creatives",
    category: "web",
    categoryLabel: "Web",
    label: "Hosted website",
    summary:
      "A creative portfolio experience with stronger typography, section rhythm, and a presentation style that goes beyond a standard template.",
    stack: ["JavaScript", "Frontend UI", "Netlify"],
    liveUrl: "https://elegant-gumdrop-3fbdae.netlify.app/",
    sourceUrl: "https://github.com/DavisKiprotich/DavidZilla-Creatives",
    previewLabel: "Live site preview",
    previewCaption: "Creative storytelling and portfolio-led layout rhythm",
  },
  {
    title: "Netline Technologies",
    category: "web",
    categoryLabel: "Web",
    label: "Company website",
    summary:
      "A WordPress company website built to present services clearly while supporting the digital presence of a technical business.",
    stack: ["WordPress", "Business site", "Company website"],
    liveUrl: "https://www.netline.co.ke/",
    sourceUrl: "https://github.com/DavisKiprotich/Netline-technologies",
    previewLabel: "Company site preview",
    previewCaption: "Service-led structure for a technical business brand",
  },
  {
    title: "React Calculator",
    category: "web",
    categoryLabel: "Web",
    label: "Frontend project",
    summary:
      "A focused React build that demonstrates component state, interaction handling, and clean UI composition.",
    stack: ["React", "JavaScript", "Vercel"],
    liveUrl: "https://react-calculator-five-inky.vercel.app",
    sourceUrl: "https://github.com/DavisKiprotich/React-calculator",
    previewLabel: "Live build preview",
    previewCaption: "State handling and responsive interaction patterns",
  },
  {
    title: "Todo List Simplified",
    category: "web",
    categoryLabel: "Web",
    label: "Utility product",
    summary:
      "A lightweight task app built around usability, transitions, and a simple state-driven experience.",
    stack: ["React", "State management", "Vercel"],
    liveUrl: "https://todo-list-simplified.vercel.app",
    sourceUrl: "https://github.com/DavisKiprotich/Todo-list-simplified",
    previewLabel: "Utility workflow",
    previewCaption: "A clean task flow built around usability and speed",
  },
  {
    title: "ZK Secure Shop KE",
    category: "web",
    categoryLabel: "Web",
    label: "Ecommerce website",
    summary:
      "An ecommerce website for security systems, structured to present products clearly and support a more business-ready storefront experience.",
    stack: ["Ecommerce", "Security systems", "Netlify"],
    liveUrl: "https://zksecureshopke.netlify.app/",
    sourceUrl: "https://github.com/DavisKiprotich/ZK-Secureshop",
    previewLabel: "Hosted storefront",
    previewCaption: "Security systems presented in a clearer buying flow",
  },
  {
    title: "TeaDirect Kenya",
    category: "web",
    categoryLabel: "Web",
    label: "Consumer platform",
    summary:
      "A tea commerce website that allows consumers to purchase tea leaves directly from their favorite factories through a clearer digital experience.",
    stack: ["Ecommerce", "Tea marketplace", "Consumer web"],
    liveUrl: "https://tea-direct-kenya.netlify.app/",
    sourceUrl: "https://github.com/DavisKiprotich/tea-direct-kenya",
    previewLabel: "Source-backed build",
    previewCaption: "A direct-to-consumer tea buying flow with factory choice",
  },
  {
    title: "Storease",
    category: "mobile",
    categoryLabel: "Mobile",
    label: "Play Store app",
    summary:
      "A published mobile application available on the Play Store, included here as part of the software side of the portfolio.",
    stack: ["Mobile app", "Play Store", "Product build"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.daviskiprotich.storease",
    iosPending: true,
    sourceUrl: "https://github.com/DavisKiprotich/Storease",
    previewLabel: "Play Store preview",
    previewCaption: "Mobile product delivery with a public store presence",
    note: "Play Store version is live. Source code is public, and iOS will be added once available.",
  },
  {
    title: "Sermon Mate",
    category: "mobile",
    categoryLabel: "Mobile",
    label: "Play Store app",
    summary:
      "A sermon-focused mobile application published on the Play Store and presented here as part of my mobile product work.",
    stack: ["Mobile app", "Play Store", "App publishing"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.kiprotich.sermonmate",
    iosPending: true,
    sourceUrl: "https://github.com/DavisKiprotich/SermonMate",
    previewLabel: "Play Store preview",
    previewCaption: "Published mobile work structured for real users",
    note: "Play Store version is live. Source code is public, and iOS will be added once available.",
  },
  {
    title: "BabyBite: Mealplanner for Babies",
    category: "mobile",
    categoryLabel: "Mobile",
    label: "Play Store app",
    summary:
      "A baby meal planning application built for practical everyday use and now published on the Play Store.",
    stack: ["Meal planning", "Mobile app", "Play Store"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=app.rork.babybite_guide",
    iosPending: true,
    sourceUrl: "https://github.com/DavisKiprotich/Babybite",
    previewLabel: "Play Store preview",
    previewCaption: "Practical mobile planning experience for parents",
    note: "Play Store version is live. Source code is public, and iOS will be added once available.",
  },
  {
    title: "FastFlow",
    category: "mobile",
    categoryLabel: "Mobile",
    label: "Play Store app",
    summary:
      "A fasting tracker app that also supports weight tracking and hydration planning, published on the Play Store.",
    stack: ["Fasting tracker", "Weight tracking", "Hydration plan"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.kufungatracker.app",
    iosPending: true,
    sourceUrl: "https://github.com/DavisKiprotich/Fasting-Tracker-App",
    previewLabel: "Play Store preview",
    previewCaption: "Health tracking around fasting, weight, and hydration",
    note: "Play Store version is live. Source code is public, and iOS will be added once available.",
  },
  {
    title: "PdfImager",
    category: "mobile",
    categoryLabel: "Mobile",
    label: "Play Store app",
    summary:
      "A PDF-to-Word and image converter app that connects utility-focused product thinking with public mobile delivery.",
    stack: ["PDF conversion", "Utility app", "Play Store"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.karoti.pdfimager",
    iosPending: true,
    sourceUrl: "https://github.com/DavisKiprotich/pdf-imager",
    previewLabel: "Play Store preview",
    previewCaption: "Utility-first conversion workflow with public delivery",
    note: "Play Store version is live. Source code is public, and iOS will be added once available.",
  },
  {
    title: "Site Monitoring Deployments",
    category: "power-it",
    categoryLabel: "Power & IT (IoT)",
    label: "Field deployment",
    summary:
      "Operational integration work around routers, fuel probes, and DC meters used to improve live site monitoring and visibility.",
    stack: ["Routers", "Fuel probes", "DC meters"],
    overviewUrl: "#experience",
    sourcePrivate: true,
    showPreview: false,
    note: "These were real operational deployments, so source and configurations remain private.",
  },
  {
    title: "Smart Power Integrations",
    category: "power-it",
    categoryLabel: "Power & IT (IoT)",
    label: "Connected systems",
    summary:
      "IoT-focused integration work for connected power systems, monitoring, and practical site-level visibility in live environments.",
    stack: ["Monitoring", "Power systems", "Integration"],
    overviewUrl: "#experience",
    sourcePrivate: true,
    showPreview: false,
    note: "Shown as engineering work rather than open-source code because the deployments were client-facing.",
  },
  {
    title: "CI/CD Pipeline Lab",
    category: "power-it",
    categoryLabel: "Power & IT (IoT)",
    label: "IT workflow",
    summary:
      "Hands-on CI/CD work that reflects the IT side of the portfolio and the move toward repeatable delivery practices.",
    stack: ["CI/CD", "Automation", "DevOps"],
    overviewUrl: "https://github.com/DavisKiprotich/CI-CD-Pipeline",
    sourceUrl: "https://github.com/DavisKiprotich/CI-CD-Pipeline",
    showPreview: false,
  },
  {
    title: "Power & IT Support Operations",
    category: "power-it",
    categoryLabel: "Power & IT (IoT)",
    label: "Operational engineering",
    summary:
      "Work spanning network support, VMware, system continuity, and power-facing environments where uptime and response matter.",
    stack: ["Networking", "VMware", "Support operations"],
    overviewUrl: "#experience",
    sourcePrivate: true,
    showPreview: false,
    note: "Operational scripts, configs, and support artefacts are kept private for authenticity and client safety.",
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
  { label: "Power & IT (IoT)", value: "power-it" },
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="projects app__section" id="work">
      <div className="section-shell">
        <div className="projects__toolbar">
          <div className="section-heading projects__heading">
            <p className="section-kicker">Projects</p>
            <h2 className="section-title">
              Public work, software experiments, and real engineering deployments.
            </h2>
            <p className="section-copy">
              Web projects include hosted links and source code where public. Mobile
              projects now include Play Store links, with iOS links marked as coming
              soon. Power &amp; IT work, including IoT deployments, is shown honestly,
              with private deployment notes where public code is not available.
            </p>
          </div>

          <div className="projects__filters">
            {filters.map((filter) => (
              <button
                className={`projects__filter ${
                  activeFilter === filter.value ? "is-active" : ""
                }`}
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                type="button"
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="projects__grid">
          {filteredProjects.map((project) => (
            <article className={`project-card project-card--${project.category}`} key={project.title}>
              <div className="project-card__head">
                <div>
                  <span className="project-card__category">{project.categoryLabel}</span>
                  <h3>{project.title}</h3>
                </div>
                <span className="project-card__label">{project.label}</span>
              </div>

              <p className="project-card__summary">{project.summary}</p>

              {project.showPreview === false ? null : (
                <div className="project-card__preview" aria-hidden="true">
                  <div className="project-card__preview-surface">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="project-card__preview-copy">
                    <span>{project.previewLabel}</span>
                    <strong>{project.previewCaption}</strong>
                  </div>
                </div>
              )}

              <div className="pill-list project-card__stack">
                {project.stack.map((item) => (
                  <span className="pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>

              <div className="project-card__links">
                {project.liveUrl ? (
                  <a className="project-card__link" href={project.liveUrl} rel="noreferrer" target="_blank">
                    <FiArrowUpRight />
                    Live site
                  </a>
                ) : null}

                {project.playStoreUrl ? (
                  <a
                    className="project-card__link"
                    href={project.playStoreUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaGooglePlay />
                    Play Store
                  </a>
                ) : null}

                {project.overviewUrl ? (
                  <a
                    className="project-card__link"
                    href={project.overviewUrl}
                    rel={project.overviewUrl.startsWith("http") ? "noreferrer" : undefined}
                    target={project.overviewUrl.startsWith("http") ? "_blank" : undefined}
                  >
                    <FiArrowUpRight />
                    Overview
                  </a>
                ) : null}

                {project.sourceUrl ? (
                  <a className="project-card__link" href={project.sourceUrl} rel="noreferrer" target="_blank">
                    <FaGithub />
                    Source code
                  </a>
                ) : null}

                {project.iosPending ? (
                  <span className="project-card__link project-card__link--muted">
                    <FaApple />
                    iOS soon
                  </span>
                ) : null}

                {project.sourcePrivate ? (
                  <span className="project-card__link project-card__link--muted">
                    <FiLock />
                    Source private
                  </span>
                ) : null}
              </div>

              {project.note ? <p className="project-card__note">{project.note}</p> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
