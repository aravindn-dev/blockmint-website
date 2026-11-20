import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import { differentiators } from '../data/content'

export default function WhyBlockMint() {
  return (
    <section id="why" className="relative bg-paper py-24 text-text-light sm:py-32">
      <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal className="lg:sticky lg:top-32">
            <SectionLabel tone="light">Why BlockMint</SectionLabel>
            <h2 className="h-section mt-6">Technology That Moves Business Forward.</h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted-dark">
              Four principles that shape how we work with every individual, startup and organisation.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-x-10 sm:grid-cols-2 lg:col-span-7">
          {differentiators.map((d, i) => (
            <Reveal key={d.id} delay={(i % 2) * 0.1} className={i > 1 ? 'sm:mt-6' : ''}>
              <div className="group relative border-t border-ink/15 pb-10 pt-8">
                <span
                  className="absolute -top-px left-0 h-px w-0 bg-copper-deep transition-all duration-700 group-hover:w-full"
                  aria-hidden="true"
                />
                <span className="block text-[3.25rem] font-light leading-none tracking-tight text-ink/20 transition-colors duration-500 group-hover:text-copper-deep">
                  {d.id}
                </span>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">{d.title}</h3>
                <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-muted-dark">{d.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
