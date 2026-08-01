import React from "react";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="projects">
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
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
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
                ) : project.repoLink ? (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View on GitHub
                  </a>
                ) : (
                  <span className="project-link-placeholder">
                    {project.isDownload
                      ? "Download Coming Soon"
                      : project.notPublished
                        ? "Not Yet Published"
                        : "No longer deployed"}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
