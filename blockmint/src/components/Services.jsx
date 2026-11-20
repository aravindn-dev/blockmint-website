import { useState } from 'react'
import { LayoutGroup, motion } from 'framer-motion'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import ServiceCard from './ServiceCard'
import { services, pillars } from '../data/content'

const filters = ['All', ...pillars.map((p) => p.name)]

export default function Services() {
  const [filter, setFilter] = useState('All')
  const list = filter === 'All' ? services : services.filter((s) => s.pillar === filter)
  const showWide = filter === 'All'

  return (
    <section id="services" className="relative bg-ink py-24 sm:py-32">
      <div className="container-site">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <SectionLabel>Our Services</SectionLabel>
            <h2 className="h-section mt-6">
              Solutions Designed for a <span className="text-copper">Changing World.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="max-w-md text-base leading-relaxed text-muted sm:text-lg lg:ml-auto">
              Explore our integrated technology, consultancy and education services.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-12">
          <div
            role="tablist"
            aria-label="Filter services by division"
            className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0 [scrollbar-width:none]"
          >
            {filters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`relative shrink-0 rounded-full px-5 py-2.5 text-[13px] font-semibold transition-colors duration-300 ${
                  filter === f ? 'text-ink' : 'border border-line text-muted hover:text-white'
                }`}
              >
                {filter === f && (
                  <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-paper" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
                )}
                <span className="relative">
                  {f}
                  <span className={`ml-1.5 ${filter === f ? 'text-ink/50' : 'text-muted/70'}`}>
                    {f === 'All' ? services.length : services.filter((s) => s.pillar === f).length}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <LayoutGroup>
          <motion.div layout className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {list.map((s, i) => (
              <motion.div
                layout="position"
                key={s.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -8% 0px' }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`h-full ${showWide && s.span ? s.span : ''}`}
              >
                <ServiceCard service={s} wide={showWide && !!s.span} />
              </motion.div>
            ))}
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  )
}
