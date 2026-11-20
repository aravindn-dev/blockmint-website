import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import HeroVisual from './HeroVisual'
import { pillars } from '../data/content'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const reduce = useReducedMotion()
  const rise = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease },
  })

  return (
    <section id="home" className="relative isolate overflow-hidden bg-bm-black pt-[72px]">
      <div className="grid-lines pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-40 top-16 -z-10 h-[560px] w-[560px] rounded-full bg-gradient-to-tr from-[#0374F8]/20 via-[#00E7FB]/15 to-[#A1F309]/10 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 top-1/2 -z-10 h-[400px] w-[400px] rounded-full bg-[#0374F8]/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="container-site grid min-h-[calc(100svh-72px)] grid-cols-1 items-center gap-6 pb-10 pt-10 lg:grid-cols-12 lg:gap-8 lg:pb-16 lg:pt-6">
        <div className="lg:col-span-7">
          <motion.span {...rise(0.05)} className="label text-bm-silver">
            <span className="h-1.5 w-1.5 rounded-full bg-bm-cyan shadow-[0_0_8px_#00E7FB]" aria-hidden="true" />
            Technology <span className="text-bm-cyan">•</span> Business <span className="text-bm-green">•</span> Education
          </motion.span>

          <motion.h1
            {...rise(0.15)}
            className="h-display mt-6 text-[2.85rem] sm:text-[4.2rem] lg:text-[5.1rem] xl:text-[5.6rem]"
          >
            Building Smarter Businesses{' '}
            <span className="text-bm-silver/80">Through</span>{' '}
            <span className="relative whitespace-nowrap">
              <span className="bg-gradient-to-r from-[#0374F8] via-[#00E7FB] to-[#A1F309] bg-clip-text text-transparent">
                Technology.
              </span>
              <span
                className="absolute -bottom-1 left-0 h-[3px] w-full origin-left bg-gradient-to-r from-[#0374F8] via-[#00E7FB] to-[#A1F309] sm:-bottom-2"
                aria-hidden="true"
              />
            </span>
          </motion.h1>

          <motion.p {...rise(0.3)} className="mt-8 max-w-[34rem] text-base leading-relaxed text-bm-text sm:text-lg">
            From artificial intelligence and software development to business consultancy, professional training and
            digital growth, BlockMint brings essential solutions together under one organisation.
          </motion.p>

          <motion.div {...rise(0.42)} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#services" className="btn-primary group">
              Explore Our Services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="btn-ghost">Let&rsquo;s Discuss Your Project</a>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease }}
          className="mx-auto w-full max-w-[420px] sm:max-w-[480px] lg:col-span-5 lg:max-w-none"
        >
          <HeroVisual className="aspect-[400/470] w-full" />
        </motion.div>
      </div>

      {/* Division strip */}
      <div className="border-t border-bm-border bg-bm-dark/80 backdrop-blur-md">
        <div className="container-site grid grid-cols-1 sm:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.a
              href="#overview"
              key={p.key}
              {...rise(0.6 + i * 0.1)}
              className={`group flex items-start justify-between gap-6 py-6 sm:py-7 ${
                i > 0 ? 'border-t border-bm-border sm:border-l sm:border-t-0 sm:pl-8' : ''
              } ${i < 2 ? 'sm:pr-8' : ''}`}
            >
              <div>
                <p className="text-[11px] font-semibold tracking-label text-bm-cyan">0{i + 1}</p>
                <p className="mt-2 text-[15px] font-semibold text-white group-hover:text-bm-cyan transition-colors">{p.name}</p>
                <p className="mt-1 text-[13px] leading-relaxed text-bm-text">{p.blurb}</p>
              </div>
              <ArrowDown className="mt-1 h-4 w-4 shrink-0 text-bm-text transition-all duration-300 group-hover:translate-y-0.5 group-hover:text-bm-cyan" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
