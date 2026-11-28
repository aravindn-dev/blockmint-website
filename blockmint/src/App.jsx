import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Services from './components/Services'
import WhyBlockMint from './components/WhyBlockMint'
import Approach from './components/Approach'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { nav } from './config/site'

export default function App() {
  useEffect(() => {
    // 1. If someone visits with a legacy hash like /#services, clean it up to /services
    if (window.location.hash) {
      const hashId = window.location.hash.replace('#', '')
      const matched = nav.find((n) => n.id === hashId)
      const cleanPath = matched ? matched.href : `/${hashId}`
      window.history.replaceState(null, '', cleanPath)

      const el = document.getElementById(hashId)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 150)
      }
      return
    }

    // 2. Direct path access like /services or /contact
    const currentPath = window.location.pathname.replace(/\/+$/, '') || '/'
    if (currentPath !== '/') {
      const matched = nav.find((n) => n.href === currentPath)
      if (matched) {
        const el = document.getElementById(matched.id)
        if (el) {
          setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 150)
        }
      }
    }

    // 3. Browser Back / Forward button navigation
    const onPopState = () => {
      const path = window.location.pathname.replace(/\/+$/, '') || '/'
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
      <Footer />
    </>
  )
}
