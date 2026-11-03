import SectionHead from './SectionHead.jsx'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  const visible = projects.filter((p) => p.enabled)
  return (
    <section id="projects" className="section" aria-labelledby="projects-h">
      <div className="wrap">
        <SectionHead no="03" title="Projects" id="projects-h" />
        <div className="project-list">
          {visible.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  )
}
