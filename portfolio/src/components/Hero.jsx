import { profile } from '../data/profile.js'

export default function Hero() {
  const nameParts = profile.name.toUpperCase().split(' ')
  const lastName = nameParts.pop()
  const cvUrl = `${import.meta.env.BASE_URL}Ivan_Salamat_Resume.pdf`

  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="hero-shape" aria-hidden="true" />
      <div className="hero-portrait-frame">
        <img
          className="hero-portrait"
          src={`${import.meta.env.BASE_URL}images/ivanphotoresume.png`}
          alt="Portrait of Ivan Louis D. Salamat"
        />
      </div>
      <div className="wrap hero-inner">
        <p className="availability hero-enter hero-availability"><span aria-hidden="true" />{profile.availability}</p>
        <h1>
          <span className="hero-name-line hero-name-first">{nameParts.join(' ')}</span>
          <span className="hero-name-line hero-name-last">{lastName}</span>
        </h1>
        <p className="hero-role hero-enter hero-role-enter">{profile.headline}</p>
        <p className="hero-tag hero-enter hero-tag-enter">{profile.tagline}</p>
        <div className="btn-row hero-enter hero-buttons">
          <a className="btn btn-primary" href={cvUrl} target="_blank" rel="noopener noreferrer">View My CV</a>
          <a className="btn btn-primary" href="#projects">View My Projects</a>
          <a className="btn btn-ghost" href="#contact">Contact Me</a>
        </div>
      </div>
    </section>
  )
}
