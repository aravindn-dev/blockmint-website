import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import { differentiators } from '../data/content'

export default function WhyBlockMint() {
  return (
    <section id="why" className="relative bg-bm-dark py-24 text-white sm:py-32 border-t border-bm-border">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-25" aria-hidden="true" />
      <div className="container-site relative grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal className="lg:sticky lg:top-32">
            <SectionLabel>Why BlockMint</SectionLabel>
            <h2 className="h-section mt-6">
              Technology That Moves{' '}
              <span className="bg-gradient-to-r from-bm-cyan to-bm-green bg-clip-text text-transparent">
                Business Forward.
              </span>
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-bm-text">
              Four principles that shape how we work with every individual, startup and organisation.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-x-10 sm:grid-cols-2 lg:col-span-7">
          {differentiators.map((d, i) => (
            <Reveal key={d.id} delay={(i % 2) * 0.1} className={i > 1 ? 'sm:mt-6' : ''}>
              <div className="group relative border-t border-bm-border pb-10 pt-8">
                <span
                  className="absolute -top-px left-0 h-[2px] w-0 bg-gradient-to-r from-bm-cyan to-bm-green transition-all duration-700 group-hover:w-full shadow-[0_0_8px_rgba(0,231,251,0.5)]"
                  aria-hidden="true"
                />
                <span className="block text-[3.25rem] font-light leading-none tracking-tight text-bm-border transition-colors duration-500 group-hover:text-bm-cyan">
                  {d.id}
                </span>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-bm-cyan">
                  {d.title}
                </h3>
                <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-bm-text">{d.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
