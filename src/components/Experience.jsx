import React from 'react'

const Experience = () => {
  const professionalExperience = [
    {
      company: 'Blake Willson Group',
      location: 'Arlington, VA',
      position: 'AI and Process Automation Intern',
      duration: 'June 2025 – Present',
      responsibilities: [
        'Designed and implemented solutions utilizing AI models and frameworks including Langchain',
        'Automated internal processes such as invoice processing and interactions with external APIs using AI methodologies',
        'Researched, proposed, developed AI agents and cloud solutions on Azure and AWS',
        'Developed internal-facing applications to complement automations and enhance user experience'
      ]
    },
    {
      company: 'Oceus Networks',
      location: 'Herndon, VA',
      position: 'Software Engineer Intern',
      duration: 'July 2023 – August 2023',
      responsibilities: [
        'Implemented and maintained a professional website and integrated MySQL database with PHP, JavaScript & Laravel',
        'Implemented an optimized script to parse and reformat large Excel datasheets using Python and Pandas library',
        'Conducted comprehensive functional and integration testing, leading to the successful launch of the application',
        'Participated in code reviews under the guidance of a mentor, incorporating feedback to enhance code quality',
        'Utilized GitHub and Agile methodology for collaborative project management and source control'
      ]
    }
  ]

  const leadershipExperience = [
    {
      organization: 'King Farm Tennis Team/Private Coaching',
      location: 'Rockville & Bethesda, MD',
      position: 'Founder and Coach',
      duration: '2019-Present',
      responsibilities: [
        'Founded a tennis organization, taught lessons, and oversaw 20+ students aged 5-50 in group and private settings'
      ]
    }
  ]

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
  )
}

export default Experience