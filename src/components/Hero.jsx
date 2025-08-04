import React from 'react'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Alec Zhou</h1>
          <h2 className="hero-subtitle">Computer Science & Mathematics Student</h2>
          <p className="hero-description">
            Full-stack developer and AI enthusiast pursuing Computer Science and Applied Mathematics at the University of Maryland. 
            Passionate about building innovative solutions and automating complex processes.
          </p>
          <div className="hero-links">
            <a 
              href="https://linkedin.com/in/alec-zhou-a59863286/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero-link"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/azhou555" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero-link"
            >
              GitHub
            </a>
            <a 
              href="mailto:alec1.zhou@gmail.com" 
              className="hero-link"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero