import React, { useEffect, useRef } from 'react'
import { scrollToId } from '../lib/smoothScroll'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'featured', label: 'Featured' },
  { id: 'projects', label: 'Projects' },
  { id: 'notes', label: 'Notes' },
  { id: 'contact', label: 'Contact' }
]

// Sticky elements offset themselves by --nav-height. The nav wraps to more
// rows on narrow screens, so publish its real height instead of guessing.
function usePublishNavHeight(ref) {
  useEffect(() => {
    const root = document.documentElement
    const ro = new ResizeObserver(([entry]) => {
      root.style.setProperty('--nav-height', `${Math.ceil(entry.borderBoxSize[0].blockSize)}px`)
    })
    ro.observe(ref.current)
    return () => ro.disconnect()
  }, [ref])
}

// On the main page, glide to the section instead of jumping. From a note
// (#/notes/...) the sections aren't rendered yet, so let the link navigate.
function onSectionLink(event, id) {
  if (window.location.hash.startsWith('#/notes/')) return
  if (scrollToId(id)) {
    event.preventDefault()
    history.replaceState(null, '', `#${id}`)
  }
}

const Navigation = () => {
  const navRef = useRef(null)
  usePublishNavHeight(navRef)
  return (
    <nav className="navigation" ref={navRef}>
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home">Alec Zhou</a>
        </div>
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.id} className="nav-item">
              <a className="nav-link" href={`#${item.id}`} onClick={(e) => onSectionLink(e, item.id)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation