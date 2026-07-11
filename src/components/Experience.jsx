import React from "react";
import {
  professionalExperience,
  leadershipExperience,
} from "@/data/experiences";
const Experience = () => {
  (professionalExperience, leadershipExperience);

  return (
    <section className="experience">
      <div className="experience-container">
        <h2 className="section-title">Experience</h2>

        <div className="experience-section">
          <h3 className="experience-category-title">Professional Experience</h3>
          {professionalExperience.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <div className="experience-title">
                  <h4>{exp.position}</h4>
                  <h5>{exp.company}</h5>
                </div>
                <div className="experience-meta">
                  <span className="experience-location">{exp.location}</span>
                  <span className="experience-duration">{exp.duration}</span>
                </div>
              </div>
              <ul className="experience-responsibilities">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="experience-section">
          <h3 className="experience-category-title">Leadership Experience</h3>
          {leadershipExperience.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <div className="experience-title">
                  <h4>{exp.position}</h4>
                  <h5>{exp.organization}</h5>
                </div>
                <div className="experience-meta">
                  <span className="experience-location">{exp.location}</span>
                  <span className="experience-duration">{exp.duration}</span>
                </div>
              </div>
              <ul className="experience-responsibilities">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
