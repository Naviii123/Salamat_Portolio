import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Certificates from './components/Certificates.jsx'
import Contact from './components/Contact.jsx'
import { useScrollAnimations } from './hooks/useScrollAnimations.js'
import Marquee from './components/Marquee.jsx'

export default function App() {
  useScrollAnimations()
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <div className="page-entrance-slab" aria-hidden="true" />
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <footer className="footer"><div className="wrap">© {new Date().getFullYear()} Ivan Louis D. Salamat</div></footer>
    </>
  )
}
