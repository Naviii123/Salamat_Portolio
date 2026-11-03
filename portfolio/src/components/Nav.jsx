import { useEffect, useRef, useState } from 'react'

const links = [
  ['01', 'Home', '#home'],
  ['02', 'About', '#about'],
  ['03', 'Skills', '#skills'],
  ['04', 'Projects', '#projects'],
  ['05', 'Education', '#education'],
  ['06', 'Certificates', '#certificates'],
  ['07', 'Contact', '#contact'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const activeIndexRef = useRef(0)
  const linkRefs = useRef([])
  const menuButtonRef = useRef(null)

  function closeMenu() {
    setOpen(false)
    menuButtonRef.current?.focus()
  }

  function activateIndex(index) {
    activeIndexRef.current = index
    setActiveIndex(index)
  }

  useEffect(() => {
    if (!open) return undefined

    linkRefs.current[activeIndexRef.current]?.focus()

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault()
        closeMenu()
        return
      }

      if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return

      event.preventDefault()
      const direction = event.key === 'ArrowDown' ? 1 : -1
      const nextIndex =
        (activeIndexRef.current + direction + links.length) % links.length
      activateIndex(nextIndex)
      linkRefs.current[nextIndex]?.focus()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open])

  useEffect(() => {
    const sectionIndexes = new Map(links.map(([, , href], index) => [href.slice(1), index]))
    const sections = links
      .map(([, , href]) => document.querySelector(href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      () => {
        const marker = window.innerHeight * 0.35
        const currentSection = sections.find((section) => {
          const bounds = section.getBoundingClientRect()
          return bounds.top <= marker && bounds.bottom > marker
        })

        if (currentSection) {
          activateIndex(sectionIndexes.get(currentSection.id))
        }
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a className="brand" href="#home" onClick={closeMenu}>I.L.S<span>/</span></a>
        <button
          ref={menuButtonRef}
          className="menu-btn"
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => (open ? closeMenu() : setOpen(true))}
        >
          Menu
        </button>
      </div>
      {open && (
        <nav id="nav-links" className="nav-overlay" aria-label="Main">
          <div className="nav-overlay-inner">
            <div className="nav-overlay-head">
              <p>SELECT A SECTION</p>
              <button className="nav-close" type="button" onClick={closeMenu}>
                CLOSE <span aria-hidden="true">×</span>
              </button>
            </div>
            <ul>
              {links.map(([number, label, href], index) => (
                <li key={href}>
                  <a
                    ref={(element) => { linkRefs.current[index] = element }}
                    className={activeIndex === index ? 'active' : ''}
                    href={href}
                    onMouseEnter={() => activateIndex(index)}
                    onFocus={() => activateIndex(index)}
                    onClick={() => setOpen(false)}
                  >
                    <span className="nav-number">{number}</span>
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="nav-hint">USE ↑ / ↓ TO NAVIGATE · ENTER TO SELECT</p>
          </div>
        </nav>
      )}
    </header>
  )
}
