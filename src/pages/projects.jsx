import React from 'react'
import '../css/Project.css'

function Projects() {
  // Array of project data with names, descriptions, and video sources
  const projectData = [
    { name: 'Project 1', description: 'HTML and CSS based website', videoSrc: '1.mp4' },
    { name: 'Project 2', description: 'E-commerce product page', videoSrc: '2.mp4' },
    { name: 'Project 3', description: 'Portfolio website with animations', videoSrc: '3.mp4' },
    { name: 'Project 4', description: 'Landing page for a product', videoSrc: '4.mp4' },
    { name: 'Project 5', description: 'Simple to-do list web app', videoSrc: '5.mp4' },
    { name: 'Project 6', description: 'Blog website with a modern layout', videoSrc: '6.mp4' },
    { name: 'Project 7', description: 'Recipe website with Bootstrap grid', videoSrc: '7.mp4' },
    { name: 'Project 8', description: 'Responsive web design using Bootstrap', videoSrc: '8.mp4' },
    { name: 'Project 9', description: 'Custom landing page with interactive features', videoSrc: '9.mp4' },
    { name: 'Project 10', description: 'Photography website with galleries', videoSrc: '10.mp4' },
    { name: 'Project 11', description: 'Restaurant website with menu and reservation', videoSrc: '11.mp4' },
  ];

  return (
    <div className='container c-project text-center py-5'>
      <h1>Projects</h1>
      <div className='row g-4'>
        {projectData.map((project, i) => (
          <div className='col-lg-4 col-md-6 col-sm-12' key={i}>
            <div className="card h-100">
              <video className="ratio ratio-16x9" src={project.videoSrc} controls />
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
                <a href="#">GitHub Repository</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;
