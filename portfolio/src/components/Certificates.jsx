import SectionHead from './SectionHead.jsx'
import { certificates } from '../data/certificates.js'

export default function Certificates() {
  return (
    <section id="certificates" className="section alt" aria-labelledby="certificates-h">
      <div className="wrap">
        <SectionHead no="05" title="Certificates" id="certificates-h" />
        <ul className="certificate-grid">
          {certificates.map((certificate, index) => (
            <li className="certificate-card" key={certificate.url}>
              <span className="certificate-no">{String(index + 1).padStart(2, '0')}</span>
              <h3>{certificate.name}</h3>
              <a href={certificate.url} target="_blank" rel="noopener noreferrer">
                View credential <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
