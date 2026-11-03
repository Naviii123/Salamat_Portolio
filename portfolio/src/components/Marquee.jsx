import { profile } from '../data/profile.js'

function MarqueeRun() {
  return (
    <div className="marquee-run">
      {profile.marqueeTopics.map((topic, index) => (
        <span className="marquee-item" key={`${topic}-${index}`}>
          {topic}
          {index < profile.marqueeTopics.length - 1 && <span className="marquee-diamond">◆</span>}
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="marquee-band" aria-hidden="true">
      <div className="marquee-track">
        <MarqueeRun />
      </div>
    </div>
  )
}
