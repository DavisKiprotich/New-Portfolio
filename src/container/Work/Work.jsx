import React from 'react'
import './Work.scss'
import image1 from '../../assets/about01.png'
import image2 from '../../assets/about02.png'
import image3 from '../../assets/about03.png'


const Work = () => {
  const projects = [
    {
      image: image1, // Replace with actual project image URL
      title: "Project 1",
      technologies: ["React", "Tailwind CSS"],
      link: "#",
    },
    {
      image: image2,
      title: "Project 2",
      technologies: ["Django", "AI"],
      link: "#",
    },
    {
      image: image3,
      title: "Project 3",
      technologies: ["Vue", "Node.js"],
      link: "#",
    },
  ];
  return (
    <section className="featured-work">
    <h2 className="section-title-fw">Featured Work</h2>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="overlay">
            <h3 className="project-title">{project.title}</h3>
            <p className="technologies">
              {project.technologies.join(" | ")}
            </p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-button">
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>   
  )
}

export default Work