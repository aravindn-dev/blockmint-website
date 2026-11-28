import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Logo from './Logo'
import { nav, whatsappLink } from '../config/site'
import { scrollToSection } from '../utils/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('/')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the section currently in view & sync clean URL (no hash)
  useEffect(() => {
    const els = nav.map((n) => document.getElementById(n.id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const matched = nav.find((n) => n.id === e.target.id)
            if (matched) {
              setActive(matched.href)
              if (window.location.pathname !== matched.href && !window.location.hash) {
                window.history.replaceState({ sectionId: matched.id }, '', matched.href)
              }
            }
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? 'border-b border-bm-border bg-bm-dark/90 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container-site flex h-[72px] items-center justify-between">
          <a
            href="/"
            aria-label="BlockMint Technology Services — home"
            onClick={(e) => {
              e.preventDefault()
              setOpen(false)
              scrollToSection('home', '/')
            }}
          >
            <Logo />
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id, item.href)
                }}
                className={`relative rounded-full px-4 py-2 text-[13.5px] font-medium transition-colors duration-300 ${
                  active === item.href ? 'text-white' : 'text-bm-text hover:text-white'
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-4 -bottom-0.5 h-[2px] origin-left bg-gradient-to-r from-bm-cyan to-bm-green transition-transform duration-500 ${
                    active === item.href ? 'scale-x-100' : 'scale-x-0'
                  }`}
                  aria-hidden="true"
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact', '/contact')
              }}
              className="btn-primary hidden !py-2.5 !px-5 sm:inline-flex group"
            >
              Let&rsquo;s Talk
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-bm-border text-white lg:hidden hover:border-bm-cyan/50"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 bottom-0 top-[72px] z-40 flex flex-col bg-bm-dark/95 backdrop-blur-2xl lg:hidden"
          >
            <nav aria-label="Mobile" className="container-site flex flex-1 flex-col pt-6">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    setOpen(false)
                    scrollToSection(item.id, item.href)
                  }}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i + 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center justify-between border-b border-bm-border py-5 text-[1.75rem] font-semibold tracking-tight text-white hover:text-bm-cyan"
                >
                  {item.label}
                  <span className="text-xs font-medium tracking-label text-bm-cyan">0{i + 1}</span>
                </motion.a>
              ))}
              <div className="mt-auto grid gap-3 pb-10 pt-8">
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault()
                    setOpen(false)
                    scrollToSection('contact', '/contact')
                  }}
                  className="btn-primary w-full"
                >
                  Let&rsquo;s Talk <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-ghost w-full">
                  WhatsApp Enquiry
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
