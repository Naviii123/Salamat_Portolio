import { useEffect } from 'react'

const revealGroups = [
  { selector: '.section-head', type: 'heading', stagger: 0 },
  { selector: '.about-grid > *', stagger: 55 },
  { selector: '.skills-grid > *', stagger: 60 },
  { selector: '.project-media', type: 'wipe', stagger: 35 },
  { selector: '.project-body', stagger: 35 },
  { selector: '.edu-grid > *', stagger: 55 },
  { selector: '.certificate-grid > *', stagger: 45 },
  { selector: '.contact-lead', stagger: 0 },
  { selector: '.contact-list > li', stagger: 55 },
]

export function useScrollAnimations() {
  useEffect(() => {
    const elements = []
    let observer

    revealGroups.forEach(({ selector, type = 'up', stagger }) => {
      document.querySelectorAll(selector).forEach((element, index) => {
        element.dataset.reveal = type
        element.style.setProperty('--reveal-delay', `${Math.min(index * stagger, 220)}ms`)
        elements.push(element)
      })
    })

    document.querySelectorAll('.skill-group').forEach((group) => {
      group.querySelectorAll('li').forEach((item, index) => {
        item.dataset.skillReveal = ''
        item.style.setProperty('--skill-delay', `${index * 35}ms`)
        elements.push(item)
      })
    })

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.15 },
      )

      elements.forEach((element) => observer.observe(element))
    }

    return () => {
      observer?.disconnect()
      elements.forEach((element) => {
        delete element.dataset.reveal
        delete element.dataset.skillReveal
        element.classList.remove('is-visible')
        element.style.removeProperty('--reveal-delay')
        element.style.removeProperty('--skill-delay')
      })
    }
  }, [])
}
