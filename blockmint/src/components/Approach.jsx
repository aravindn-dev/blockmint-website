import { motion, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import { steps } from '../data/content'

export default function Approach() {
  const reduce = useReducedMotion()
  return (
    <section id="approach" className="relative overflow-hidden bg-bm-black py-24 sm:py-32 border-t border-bm-border">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-25" aria-hidden="true" />
      <div className="container-site relative">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <SectionLabel>Our Approach</SectionLabel>
            <h2 className="h-section mt-6">
              From Ideas to{' '}
              <span className="bg-gradient-to-r from-bm-cyan to-bm-green bg-clip-text text-transparent">
                Implementation.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="max-w-md text-base leading-relaxed text-bm-text lg:ml-auto">
              A clear, four-step way of working that keeps every engagement practical and focused on outcomes.
            </p>
          </Reveal>
        </div>

        <ol className="relative mt-16 grid gap-0 lg:mt-20 lg:grid-cols-4 lg:gap-8">
          {/* horizontal connector (desktop) */}
          <motion.span
            aria-hidden="true"
            className="absolute left-7 right-0 top-7 hidden h-[2px] origin-left bg-gradient-to-r from-bm-cyan via-bm-green to-transparent lg:block shadow-[0_0_8px_rgba(0,231,251,0.4)]"
            initial={reduce ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '0px 0px -20% 0px' }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal as="li" key={s.id} delay={0.15 * i} className="relative flex gap-6 pb-12 last:pb-0 lg:block lg:pb-0">
                {/* vertical connector (mobile) */}
                {i < steps.length - 1 && (
                  <span className="absolute bottom-0 left-7 top-14 w-[2px] bg-gradient-to-b from-bm-cyan to-bm-border lg:hidden" aria-hidden="true" />
                )}
                <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border border-bm-border bg-bm-dark text-bm-cyan shadow-[0_0_18px_rgba(0,231,251,0.2)]">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div className="pt-2 lg:pt-8">
                  <p className="text-[11px] font-semibold tracking-label text-bm-cyan">STEP {s.id}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">{s.title}</h3>
                  <p className="mt-3 max-w-[16rem] text-[15px] leading-relaxed text-bm-text">{s.text}</p>
                </div>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
