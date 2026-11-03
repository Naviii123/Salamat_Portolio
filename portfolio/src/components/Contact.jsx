import SectionHead from './SectionHead.jsx'
import { profile } from '../data/profile.js'

export default function Contact() {
  const { email, phone, github, linkedin } = profile.contact
  return (
    <section id="contact" className="section" aria-labelledby="contact-h">
      <div className="wrap">
        <SectionHead no="06" title="Contact" id="contact-h" />
        <p className="contact-lead">Looking for an OJT placement? I'd be glad to hear from you.</p>
        <ul className="contact-list">
          <li><span>Email</span><a href={`mailto:${email}`}>{email}</a></li>
          <li><span>Phone</span><a href={`tel:${phone}`}>{phone}</a></li>
          <li><span>GitHub</span><a href={github} target="_blank" rel="noopener noreferrer">github.com/Naviii123</a></li>
          <li><span>LinkedIn</span><a href={linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/ivan-louis-salamat</a></li>
        </ul>
      </div>
    </section>
  )
}
