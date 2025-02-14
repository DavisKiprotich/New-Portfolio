import React from 'react'


import './Experience.scss'

const Experience = () => {
  return (
    <section className="work-experience">
      <h2 className="section-title-wk">My Work Experience</h2>
      <div className="experience-cards">
        <div className="card">
          <span className="card-number">01</span>
          <h3 className="card-title">
            <span className="highlight-green">AlanDick & Co(E.A) Ltd</span>, Power and IT Support Engineer
          </h3>
          <p className="card-description">
          I am responsible for maintaining and managing the server infrastructure 
          and networking within my company, ensuring seamless operations. 
          Additionally, I oversee cloud infrastructure utilizing VMware vSphere virtualization. 
          My role also involves IoT deployments for site monitoring, which includes 
          configuring routers, installing fuel probes, integrating DC meters, and servicing rectifiers. 
          These efforts collectively contribute to a stable and efficient working environment within the telecommunications industry.
          </p>
        </div>

        <div className="card">
          <span className="card-number">02</span>
          <h3 className="card-title">
            <span className="highlight-blue">Netline Technologies Limited</span>, Head of Operations
          </h3>
          <p className="card-description">
          Led the design and creation of the <a className='no-underline' href='https://netline.co.ke/' target="_blank"><span className="highlight-blue ">Company Website</span></a> using WordPress, 
          while also overseeing the maintenance of networking infrastructure and electro-mechanical installations. 
          Ensured operational efficiency and system reliability across all aspects of the company’s technical operations.
          I also took an active role in upgrading the network infrastructure while continuously enhancing my frontend web development skills.
          </p>
        </div>

        <div className="card">
          <span className="card-number">03</span>
          <h3 className="card-title">
            <span className="highlight-pink">Freelancer</span>, Software Developer
          </h3>
          <p className="card-description">
            I have developed and deployed several projects . I have worked with clients from all over the world, e.g., 
            <a className='no-underline' href='#' target="_blank"><span className="highlight-pink ">myblog</span></a>, 
            <a className='no-underline' href='#' target='_blank'><span className="highlight-pink"></span></a>,  etc.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Experience;