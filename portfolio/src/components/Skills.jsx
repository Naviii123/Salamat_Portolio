import SectionHead from './SectionHead.jsx'
import { profile } from '../data/profile.js'

export default function Skills() {
  return (
    <section id="skills" className="section alt" aria-labelledby="skills-h">
      <div className="wrap">
        <SectionHead no="02" title="Skills" id="skills-h" />
        <div className="skills-grid">
          {profile.skills.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul>{group.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
