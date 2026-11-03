import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

const rootElement = document.documentElement
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

rootElement.classList.add('js')

if (!reducedMotion) {
  try {
    if (!window.sessionStorage.getItem('portfolio-intro-played')) {
      window.sessionStorage.setItem('portfolio-intro-played', 'true')
      rootElement.classList.add('intro-pending')
      window.setTimeout(() => rootElement.classList.remove('intro-pending'), 1100)
    }
  } catch (error) {
    console.warn('Portfolio intro skipped because session storage is unavailable.', error)
  }
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
