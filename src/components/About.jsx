import React from 'react'

const About = () => {
  const mathCourses = [
    'Advanced Calculus',
    'Discrete Structures',
    'Theory and Methods of Statistics',
    'Linear Algebra'
  ]

  const csCourses = [
    'Algorithms',
    'Operating Systems',
    'Distributed Systems',
    'Database Design',
    'Compilers',
    'Deep Learning'
  ]

  const languages = [
    'Java', 'Python', 'TypeScript', 'JavaScript', 'Rust',
    'C', 'C++', 'SQL', 'HTML', 'CSS'
  ]

  const tools = [
    'Spring Boot', 'FastAPI', 'React', 'Next.js', 'Node.js', 'LangChain',
    'PyTorch', 'Pandas', 'Azure', 'AWS', 'Docker', 'Git', 'CI/CD'
  ]

  const databases = [
    'MySQL', 'PostgreSQL', 'SQLite', 'MongoDB', 'Redis'
  ]

  const operatingSystems = [
    'Linux', 'Unix'
  ]

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          <div className="about-card">
            <h3>Education</h3>
            <div className="education-info">
              <h4>University of Maryland - College Park</h4>
              <p className="degree">Computer Science & Mathematics: Applied Math Track</p>
              <p className="gpa">GPA: 3.88/4.0</p>
              <p className="graduation">Expected Graduation: May 2027</p>
            </div>
          </div>

          <div className="about-card">
            <h3>Relevant Coursework</h3>
            <div className="coursework">
              <div className="course-category">
                <h4>Mathematics</h4>
                <ul>
                  {mathCourses.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              </div>
              <div className="course-category">
                <h4>Computer Science</h4>
                <ul>
                  {csCourses.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="about-card">
            <h3>Technical Skills</h3>
            <div className="skills">
              <div className="skill-category">
                <h4>Languages</h4>
                <div className="skill-tags">
                  {languages.map((lang, index) => (
                    <span key={index} className="skill-tag">{lang}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h4>Frameworks, Cloud & Tools</h4>
                <div className="skill-tags">
                  {tools.map((tool, index) => (
                    <span key={index} className="skill-tag">{tool}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h4>Databases</h4>
                <div className="skill-tags">
                  {databases.map((db, index) => (
                    <span key={index} className="skill-tag">{db}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h4>Operating Systems</h4>
                <div className="skill-tags">
                  {operatingSystems.map((os, index) => (
                    <span key={index} className="skill-tag">{os}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
