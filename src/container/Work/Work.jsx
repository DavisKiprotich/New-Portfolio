import React from 'react'
import './Work.scss'
import image1 from '../../assets/about04.png'
import image2 from '../../assets/about2.png'
import image3 from '../../assets/about5.png'
import image4 from '../../assets/about3.png'
import image5 from '../../assets/about1.png'


const Work = () => {
  const projects = [
    {
      image: image1, // Replace with actual project image URL
      title: "Urban Threads",
      technologies: ["React", "CSS"],
      link: "https://ever-trendy-website-q8ynmj7gu-daviskiprotich.vercel.app/",
    },
    {
      image: image2,
      title: "Todo List",
      technologies: ["React", "CSS"],
      link: "https://todo-list-simplified.vercel.app/",
    },
    {
      image: image3,
      title: "React Calculator",
      technologies: ["React"],
      link: "https://react-calculator-five-inky.vercel.app/",
    },
    {
      image: image4,
      title: "Portfolio",
      technologies: ["React", "CSS"],
      link: "https://d-zilla-creatives-vvi5.vercel.app/",
    },
    {
      image: image5,
      title: "Landing Pages",
      technologies: ["React", "CSS"],
      link: "https://netline-technologies.vercel.app/",
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