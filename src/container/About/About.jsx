import React from "react";

import "./About.scss";

const profileCards = [
  {
    title: "Education",
    text: "BEng in Electrical & Telecommunications Engineering from Moi University.",
  },
  {
    title: "Working style",
    text: "I like shipping solutions that are practical, maintainable, and grounded in real operating conditions.",
  },
  {
    title: "Software angle",
    text: "Web and mobile products are a major part of my portfolio, especially when usability and responsiveness matter.",
  },
  {
    title: "Field angle",
    text: "IoT, networking, cloud, power systems, and site support give me a broader engineering lens than a software-only profile.",
  },
];

const About = () => {
  return (
    <section className="about-section app__section" id="about">
      <div className="section-shell about-section__grid">
        <div className="about-section__story">
          <p className="section-kicker">About</p>
          <h2 className="section-title">
            I work best where engineering thinking meets usable software.
          </h2>

          <p className="section-copy">
            My background is rooted in electrical and telecommunications engineering,
            which means I naturally think about systems, reliability, deployment context,
            and how things behave outside the ideal case.
          </p>

          <p className="section-copy">
            On the software side, I build web platforms, mobile app concepts, and
            digital interfaces that are clean, responsive, and useful. On the field
            side, I bring experience in IoT integrations, network support, VMware,
            cloud exposure, and Power &amp; IT operations.
          </p>

          <p className="section-copy">
            That mix lets me contribute to both the visible product and the technical
            environment around it, which is exactly how I want this portfolio to feel:
            honest, modern, and grounded in real work.
          </p>
        </div>

        <div className="about-section__cards">
          {profileCards.map((card) => (
            <article className="about-section__card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
