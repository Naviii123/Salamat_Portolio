export default function SectionHead({ no, title, id }) {
  return (
    <header className="section-head">
      <span className="section-no" aria-hidden="true">{no}</span>
      <h2 id={id}>{title}</h2>
    </header>
  )
}
