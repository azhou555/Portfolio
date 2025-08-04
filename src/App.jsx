import React, { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './assets/main.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="App">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {activeSection === 'home' && <Hero />}
        {activeSection === 'about' && <About />}
        {activeSection === 'experience' && <Experience />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'contact' && <Contact />}
      </main>
    </div>
  )
}

export default App