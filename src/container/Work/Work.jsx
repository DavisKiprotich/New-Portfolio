import React, { useState } from "react";
import { FaApple, FaGithub, FaGooglePlay } from "react-icons/fa";
import { FiArrowUpRight, FiChevronDown, FiChevronUp, FiLock } from "react-icons/fi";

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
    previewImage: "/project-previews/davidzilla-creatives.png",
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
    previewImage: "/project-previews/netline-technologies.png",
    previewLabel: "Live site preview",
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
    previewImage: "/project-previews/react-calculator.png",
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
    previewImage: "/project-previews/todo-list-simplified.png",
    previewLabel: "Live site preview",
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
    previewImage: "/project-previews/zk-secure-shop-ke.png",
    previewLabel: "Live site preview",
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
    previewImage: "/project-previews/tea-direct-kenya.png",
    previewLabel: "Live site preview",
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
    previewImage: "/project-previews/storease-playstore.svg",
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
    previewImage: "/project-previews/sermon-mate-playstore.png",
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
    previewImage: "/project-previews/babybite-playstore.svg",
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
    previewImage: "/project-previews/fastflow-playstore.svg",
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
    previewImage: "/project-previews/pdfimager-playstore.svg",
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
    sourcePrivate: true,
    showPreview: false,
    caseStudy: {
      challenge:
        "Remote sites needed faster visibility across fuel, power, and operating status without relying only on physical follow-up.",
      role:
        "Handled deployment support around routers, fuel probes, DC meters, and the field setup needed to make live monitoring practical.",
      evidence: [
        "Routers configured to support remote monitoring links.",
        "Fuel probe and DC meter integrations applied in live environments.",
        "Operational monitoring visibility tied back to real site status and response.",
      ],
      outcome:
        "Improved remote visibility and faster issue follow-up for operational teams, while keeping sensitive client configurations private.",
    },
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
    sourcePrivate: true,
    showPreview: false,
    caseStudy: {
      challenge:
        "Power-facing environments needed clearer connected monitoring so issues could be surfaced earlier and site blind spots reduced.",
      role:
        "Integrated monitoring components and supported the communication path between field devices and reporting visibility.",
      evidence: [
        "Connected monitoring points across power-system environments.",
        "Device-level visibility for live engineering deployments.",
        "Client-facing integration work documented as private operational delivery.",
      ],
      outcome:
        "Enabled better monitoring around power conditions and stronger site-level visibility in practical operating environments.",
    },
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
    sourceUrl: "https://github.com/DavisKiprotich/CI-CD-Pipeline",
    showPreview: false,
    caseStudy: {
      challenge:
        "Software delivery needed a more repeatable path from code changes to build and deployment.",
      role:
        "Built and tested a CI/CD workflow to strengthen automation, release consistency, and delivery discipline.",
      evidence: [
        "Pipeline configuration and automation workflow kept in source control.",
        "Hands-on Jenkins and CI practice reflected in the repository.",
        "Delivery steps structured for repeatable builds and checks.",
      ],
      outcome:
        "Improved confidence in repeatable software delivery and strengthened the IT side of the portfolio.",
    },
  },
  {
    title: "Power & IT Support Operations",
    category: "power-it",
    categoryLabel: "Power & IT (IoT)",
    label: "Operational engineering",
    summary:
      "Work spanning network support, VMware, system continuity, and power-facing environments where uptime and response matter.",
    stack: ["Networking", "VMware", "Support operations"],
    sourcePrivate: true,
    showPreview: false,
    caseStudy: {
      challenge:
        "Operational environments required dependable support across networking, VMware, and continuity-sensitive systems.",
      role:
        "Supported infrastructure continuity, troubleshooting, and day-to-day technical operations in live environments.",
      evidence: [
        "Networking and VMware support within operational contexts.",
        "Continuity-focused work around power-facing systems and uptime.",
        "Client-sensitive artefacts and configurations intentionally kept private.",
      ],
      outcome:
        "Helped sustain uptime, faster issue response, and more stable day-to-day operations in engineering environments.",
    },
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
  const [expandedCaseStudy, setExpandedCaseStudy] = useState(null);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const toggleCaseStudy = (title) => {
    setExpandedCaseStudy((current) => (current === title ? null : title));
  };

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
          {filteredProjects.map((project) => {
            const isCaseStudyOpen = expandedCaseStudy === project.title;

            return (
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
                  {project.previewImage ? (
                    <div className="project-card__preview-frame">
                      <img alt="" src={project.previewImage} />
                    </div>
                  ) : (
                    <div className="project-card__preview-surface">
                      <span />
                      <span />
                      <span />
                    </div>
                  )}

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

                {project.caseStudy ? (
                  <button
                    className={`project-card__link project-card__link--button ${
                      isCaseStudyOpen ? "is-active" : ""
                    }`}
                    onClick={() => toggleCaseStudy(project.title)}
                    type="button"
                  >
                    {isCaseStudyOpen ? <FiChevronUp /> : <FiChevronDown />}
                    Overview
                  </button>
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

              {project.caseStudy && isCaseStudyOpen ? (
                <div className="project-card__case-study">
                  <span className="project-card__case-kicker">Case study overview</span>

                  <div className="project-card__case-row">
                    <h4>Challenge</h4>
                    <p>{project.caseStudy.challenge}</p>
                  </div>

                  <div className="project-card__case-row">
                    <h4>My role</h4>
                    <p>{project.caseStudy.role}</p>
                  </div>

                  <div className="project-card__case-row">
                    <h4>Proof</h4>
                    <ul>
                      {project.caseStudy.evidence.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-card__case-row">
                    <h4>Outcome</h4>
                    <p>{project.caseStudy.outcome}</p>
                  </div>
                </div>
              ) : null}

              {project.note ? <p className="project-card__note">{project.note}</p> : null}
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
