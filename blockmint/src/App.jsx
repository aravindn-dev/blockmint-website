import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Services from './components/Services'
import WhyBlockMint from './components/WhyBlockMint'
import Approach from './components/Approach'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LegalModal from './components/LegalModal'
import { nav } from './config/site'

export default function App() {
  const [legalDoc, setLegalDoc] = useState(null) // 'privacy' | 'terms' | null

  const openLegal = (type) => {
    setLegalDoc(type)
    const targetPath = type === 'privacy' ? '/privacy-policy' : '/terms'
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ legal: type }, '', targetPath)
    }
  }

  const closeLegal = () => {
    setLegalDoc(null)
    if (window.location.pathname === '/privacy-policy' || window.location.pathname === '/terms') {
      window.history.pushState(null, '', '/')
    }
  }

  useEffect(() => {
    // 1. Check if direct URL is /privacy-policy or /terms
    const currentPath = window.location.pathname.replace(/\/+$/, '') || '/'
    if (currentPath === '/privacy-policy') {
      setLegalDoc('privacy')
      return
    }
    if (currentPath === '/terms' || currentPath === '/terms-and-conditions') {
      setLegalDoc('terms')
      return
    }

    // 2. If someone visits with a legacy hash like /#services or /#privacy-policy, clean it up
    if (window.location.hash) {
      const hashId = window.location.hash.replace('#', '')
      if (hashId === 'privacy-policy' || hashId === 'privacy') {
        openLegal('privacy')
        return
      }
      if (hashId === 'terms' || hashId === 'terms-and-conditions') {
        openLegal('terms')
        return
      }

      const matched = nav.find((n) => n.id === hashId)
      const cleanPath = matched ? matched.href : `/${hashId}`
      window.history.replaceState(null, '', cleanPath)

      const el = document.getElementById(hashId)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 150)
      }
      return
    }

    // 3. Direct path access to sections like /services or /contact
    if (currentPath !== '/') {
      const matched = nav.find((n) => n.href === currentPath)
      if (matched) {
        const el = document.getElementById(matched.id)
        if (el) {
          setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 150)
        }
      }
    }

    // 4. Browser Back / Forward button navigation
    const onPopState = () => {
      const path = window.location.pathname.replace(/\/+$/, '') || '/'
      if (path === '/privacy-policy') {
        setLegalDoc('privacy')
        return
      }
      if (path === '/terms' || path === '/terms-and-conditions') {
        setLegalDoc('terms')
        return
      }
      setLegalDoc(null)

      const matched = nav.find((n) => n.href === path) || nav[0]
      if (matched.id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        const el = document.getElementById(matched.id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-bm-cyan focus:px-4 focus:py-2 focus:text-black font-bold"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Overview />
        <Services />
        <WhyBlockMint />
        <Approach />
        <About />
        <Contact />
      </main>
      <Footer onOpenLegal={openLegal} />
      <LegalModal type={legalDoc} onClose={closeLegal} />
    </>
  )
}
