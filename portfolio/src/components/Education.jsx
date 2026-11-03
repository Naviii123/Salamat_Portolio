import SectionHead from './SectionHead.jsx'
import { profile } from '../data/profile.js'

export default function Education() {
  const e = profile.education
  return (
    <section id="education" className="section alt" aria-labelledby="edu-h">
      <div className="wrap">
        <SectionHead no="04" title="Education" id="edu-h" />
        <div className="edu-grid">
          <div>
            <h3>{e.school}</h3>
            <p className="edu-degree">{e.degree}</p>
            <p className="muted">{e.unit} · {e.years}</p>
            <p className="muted">{e.note}</p>
          </div>
          <div>
            <h4>Academic Achievements</h4>
            <ul className="plain">{profile.achievements.map((a) => <li key={a}>{a}</li>)}</ul>
          </div>
          <div>
            <h4>Coursework and Training</h4>
            <ul className="plain compact">{profile.coursework.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  )
}
