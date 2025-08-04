import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: 'Music App',
      status: 'Present',
      description: 'Full stack monorepo Node.js application with React frontend and Express backend',
      technologies: ['Node.js', 'React', 'Express', 'Redis', 'PostgreSQL', 'AWS S3', 'Docker', 'Prisma'],
      features: [
        'Utilizes Redis for caching, rate limiting, and session management',
        'Authentication and account management capabilities using Google OAuth and hashed password storage',
        'File storage via AWS S3 and Docker containers with Redis and Prisma configured PostgreSQL'
      ],
      deployLink: null // Placeholder for future deployment link
    },
    {
      title: 'Travel App',
      status: 'June 2025 – Present',
      description: 'Full stack travel app with Spring Boot, React, MySQL, and Google OAuth',
      technologies: ['Spring Boot', 'React', 'MySQL', 'Google OAuth', 'OpenAI API'],
      features: [
        'Development of RESTful API and CI/CD pipeline in combination with comprehensive SQL database',
        'OpenAI API integration for enhanced planning, suggestions, and front-facing chatbot features'
      ],
      deployLink: null // Placeholder for future deployment link
    },
    {
      title: 'Super Sudoku',
      status: 'February 2025',
      description: 'Programming a Sudoku app using Py-Sudoku for puzzle generation and PyQt6 for interface',
      technologies: ['Python', 'PyQt6', 'Py-Sudoku', 'Langchain', 'OpenAI LLM'],
      features: [
        'Uses Langchain library and OpenAI LLM for RAG that allows for assistance in puzzle solving'
      ],
      deployLink: null, // Placeholder for future deployment link
      isDownload: true
    }
  ]

  return (
    <section className="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-status">{project.status}</span>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                <h4>Technologies</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-features">
                <h4>Key Features</h4>
                <ul>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="project-actions">
                {project.deployLink ? (
                  <a 
                    href={project.deployLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                  >
                    View Live
                  </a>
                ) : (
                  <span className="project-link-placeholder">
                    {project.isDownload ? 'Download Coming Soon' : 'Deployment Coming Soon'}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects