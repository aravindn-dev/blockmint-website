import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, X, Shield, FileText } from 'lucide-react'
import { privacyPolicy, termsAndConditions } from '../data/legal'

export default function LegalModal({ type, onClose }) {
  const isPrivacy = type === 'privacy'
  const doc = isPrivacy ? privacyPolicy : termsAndConditions
  const Icon = isPrivacy ? Shield : FileText

  useEffect(() => {
    document.body.style.overflow = type ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [type, onClose])

  return (
    <AnimatePresence>
      {type && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex flex-col bg-bm-black/95 backdrop-blur-2xl"
        >
          {/* Top Sticky Bar */}
          <div className="sticky top-0 z-10 flex h-[72px] items-center justify-between border-b border-bm-border bg-bm-dark/90 px-5 sm:px-10 backdrop-blur-xl">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-full border border-bm-border bg-bm-card px-4 py-2 text-sm font-semibold text-bm-silver transition-colors hover:border-bm-cyan hover:text-bm-cyan"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Website
            </button>
            <div className="flex items-center gap-2">
              <span className="hidden text-xs text-bm-text sm:inline">Press ESC to close</span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="grid h-10 w-10 place-items-center rounded-full border border-bm-border bg-bm-card text-white transition-colors hover:border-bm-cyan hover:text-bm-cyan"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Document Content */}
          <div className="flex-1 overflow-y-auto px-5 py-12 sm:px-10 lg:py-16">
            <div className="mx-auto max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl border border-bm-border bg-bm-card text-bm-cyan shadow-[0_0_16px_rgba(0,231,251,0.25)]">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-label text-bm-cyan">Official Document</span>
                  <p className="text-xs text-bm-text">Last Updated: {doc.lastUpdated}</p>
                </div>
              </div>

              <h1 className="h-display mt-6 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                {doc.title}
              </h1>

              <div className="mt-10 divide-y divide-bm-border/60 border-t border-bm-border">
                {doc.sections.map((sec) => (
                  <div key={sec.title} className="py-8">
                    <h2 className="text-xl font-semibold text-white tracking-tight sm:text-2xl">
                      {sec.title}
                    </h2>
                    <p className="mt-4 whitespace-pre-line text-[15px] leading-relaxed text-bm-text sm:text-[15.5px]">
                      {sec.content}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 rounded-3xl border border-bm-border bg-bm-card p-6 sm:p-8 text-center">
                <p className="text-sm text-bm-silver font-medium">
                  Have questions regarding our {doc.title.toLowerCase()}?
                </p>
                <a
                  href="mailto:info@blockmint.in"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-bm-cyan hover:underline"
                >
                  Contact info@blockmint.in
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
