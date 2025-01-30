import React from 'react'
import './Work.scss'

const Work = () => {
  const projects = [
    {
      title: "Raila Odinga for AU",
      description: "An official website for Raila Odinga AU chairmanship campaign.",
      technologies: ["Tailwind CSS", "React Js", "SEO"],
      image: "https://via.placeholder.com/400x200",
      link: "#"
    },
    {
      title: "NexusScale",
      description:
        "This is a website that allows users to order templates for sending messages to their loved ones, making it easier to express feelings and stay connected with their loved ones.",
      technologies: ["AI", "Rest API", "FastApi"],
      image: "https://via.placeholder.com/400x200",
      link: "#"
    },
    {
      title: "Hazina Africa",
      description:
        "Hazina Africa is a fintech startup focused on delivering AI-powered financial solutions to address diverse market needs across Africa.",
      technologies: ["Django", "Rest API"],
      image: "https://via.placeholder.com/400x200",
      link: "#"
    }
  ];
  return (

    <section className="projects-container">
      <div className="header">Projects Showcase</div>
      <div className="card-container">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <img src={project.image} alt={`${project.title} Image`} />
            <div className="card-content">
              <div className="card-title">{project.title}</div>
              <div className="card-description">{project.description}</div>
              <div className="technologies">
                {project.technologies.map((tech, i) => (
                  <span className="tech-tag" key={i}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="card-footer">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                🔗
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="view-more">
        <a href="https://github.com/yourgithubprofile" target="_blank" rel="noopener noreferrer">
          View Other Projects
        </a>
      </div>
    </section>
  )
}

export default Work