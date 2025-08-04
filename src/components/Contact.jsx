import React from 'react'

const Contact = () => {
  const contactInfo = {
    email: 'alec1.zhou@gmail.com',
    phone: '240-421-7224',
    address: '6701 Honesty Dr • Bethesda, MD 20817',
    linkedin: 'https://linkedin.com/in/alec-zhou-a59863286/',
    github: 'https://github.com/azhou555'
  }

  return (
    <section className="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact</h2>
        
        <p className="contact-description">
          I'm always interested in new opportunities and collaborations. 
          Feel free to reach out if you'd like to connect!
        </p>
        
        <div className="contact-content">
          <div className="contact-item">
            <div className="contact-info">
              <h4>Email</h4>
              <a href={`mailto:${contactInfo.email}`} className="contact-link">
                {contactInfo.email}
              </a>
            </div>
            <a 
              href={`mailto:${contactInfo.email}`} 
              className="social-link"
            >
              Email
            </a>
          </div>
          
          <div className="contact-item">
            <div className="contact-info">
              <h4>LinkedIn</h4>
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                linkedin.com/in/alec-zhou-a59863286/
              </a>
            </div>
            <a 
              href={contactInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              LinkedIn
            </a>
          </div>
          
          <div className="contact-item">
            <div className="contact-info">
              <h4>GitHub</h4>
              <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="contact-link">
                github.com/azhou555
              </a>
            </div>
            <a 
              href={contactInfo.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              GitHub
            </a>
          </div>
          
          <div className="contact-item">
            <div className="contact-info">
              <h4>Phone</h4>
              <a href={`tel:${contactInfo.phone}`} className="contact-link">
                {contactInfo.phone}
              </a>
            </div>
            <span className="social-link-placeholder">Call</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact