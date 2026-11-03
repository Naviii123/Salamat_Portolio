import SectionHead from './SectionHead.jsx'
import { profile } from '../data/profile.js'

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-h">
      <div className="wrap">
        <SectionHead no="01" title="About" id="about-h" />
        <div className="about-grid">
          <div>{profile.about.map((p) => <p key={p}>{p}</p>)}</div>
          <blockquote>{profile.summary}</blockquote>
        </div>
      </div>
    </section>
  )
}
