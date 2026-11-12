import React, { useState, useEffect, useRef } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Notes from './components/Notes'
import NotePost from './components/NotePost'
import Contact from './components/Contact'
import './assets/main.css'

function App() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const postMatch = hash.match(/^#\/notes\/(.+)$/)
  const isPost = !!postMatch

  const savedScroll = useRef(0)
  const wasPost = useRef(false)

  useEffect(() => {
    if (isPost && !wasPost.current) {
      savedScroll.current = window.scrollY
      window.scrollTo(0, 0)
    } else if (!isPost && wasPost.current) {
      window.scrollTo(0, savedScroll.current)
    }
    wasPost.current = isPost
  }, [isPost])

  return (
    <div className="App">
      <Navigation />
      <main>
        {postMatch ? (
          <NotePost slug={postMatch[1]} />
        ) : (
          <>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Notes />
            <Contact />
          </>
        )}
      </main>
    </div>
  )
}

export default App
