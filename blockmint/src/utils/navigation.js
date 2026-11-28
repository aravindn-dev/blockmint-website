import { nav } from '../config/site'

/**
 * Smoothly scrolls to a section and updates the browser URL path (without any #).
 */
export function scrollToSection(sectionId, path = null) {
  const targetPath = path || (nav.find((n) => n.id === sectionId)?.href ?? `/${sectionId}`)

  if (sectionId === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Update browser address bar without reload or hash
  if (window.location.pathname !== targetPath) {
    window.history.pushState({ sectionId }, '', targetPath)
  }
}
