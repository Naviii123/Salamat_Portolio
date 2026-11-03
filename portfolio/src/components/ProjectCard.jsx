import { useState } from 'react'
import ImagePlaceholder from './ImagePlaceholder.jsx'

// Live URL is the primary button when present; otherwise the repository is primary.
function getLinks(p) {
  const all = []
  if (p.liveUrl) all.push({ label: 'VIEW LIVE PROJECT', href: p.liveUrl })
  if (p.githubUrl) all.push({ label: 'VIEW SOURCE CODE', href: p.githubUrl })
  if (p.externalUrl) all.push({ label: p.externalLabel || 'EXTERNAL PAGE', href: p.externalUrl })
  return all
}

export default function ProjectCard({ project: p, index }) {
  const [broken, setBroken] = useState(false)
  const links = getLinks(p)
  const showImage = p.image && !broken

  return (
    <article className={`project ${p.kind}`} aria-labelledby={`${p.id}-name`}>
      <div className={`project-media ${p.mediaType}`}>
        {showImage ? (
          <img className={p.imageFit ? `image-${p.imageFit}` : undefined} src={p.image} alt={p.imageAlt} loading="lazy" decoding="async" onError={() => setBroken(true)} />
        ) : (
          <ImagePlaceholder type={p.mediaType} />
        )}
      </div>

      <div className="project-body">
        <p className="project-meta">
          <span className="project-no">{String(index + 1).padStart(2, '0')}</span>
          <span className={`badge ${p.kind}`}>{p.kindLabel}</span>
        </p>
        <h3 id={`${p.id}-name`}>{p.name}</h3>
        <p className="project-cat">{p.category}{p.year ? ` · ${p.year}` : ''}</p>
        <p>{p.description}</p>

        {p.features?.length > 0 && (
          <>
            <h4>Features</h4>
            <ul className="plain">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
          </>
        )}

        {p.contributions?.length > 0 && (
          <>
            <h4>My Contributions</h4>
            <ul className="plain">{p.contributions.map((c) => <li key={c}>{c}</li>)}</ul>
          </>
        )}

        {p.attribution && <p className="attribution">{p.attribution}</p>}

        <ul className="tech" aria-label="Technologies">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>

        {links.length > 0 && (
          <div className="btn-row">
            {links.map((l, i) => (
              <a key={l.href} className={`btn ${i === 0 ? 'btn-primary' : 'btn-ghost'}`} href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
