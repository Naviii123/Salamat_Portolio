const labels = { game: 'GAME SCREENSHOT', web: 'WEBSITE SCREENSHOT', mobile: 'MOBILE APP SCREENSHOT' }

export default function ImagePlaceholder({ type = 'web' }) {
  return (
    <div className={`placeholder ${type}`} role="img" aria-label="Project image placeholder">
      <svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <polygon points="120,0 200,0 200,120 70,120" fill="#0B1E36" />
        <line x1="0" y1="120" x2="110" y2="0" stroke="#168BFF" strokeWidth="1.2" />
        <rect x="150" y="18" width="26" height="26" fill="none" stroke="#55C8F5" strokeWidth="1" />
        <polygon points="14,14 34,14 14,34" fill="#168BFF" />
      </svg>
      <div className="placeholder-text">
        <strong>SCREENSHOT TO BE ADDED</strong>
        <span>{labels[type]}</span>
      </div>
    </div>
  )
}
