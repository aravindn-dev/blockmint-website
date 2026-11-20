import { Eye, Target } from 'lucide-react'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-paper py-24 text-text-light sm:py-32">
      <div className="grid-lines-light pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,transparent,#000_30%,#000_70%,transparent)]" aria-hidden="true" />
      <div className="container-site relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <SectionLabel tone="light">About Us</SectionLabel>
            <h2 className="mt-6 text-[2.4rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[4.4rem]">
              Building the Foundation for <span className="text-copper-deep">Tomorrow.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-[15.5px] leading-[1.75] text-[#3d3a35] sm:text-base lg:col-span-5 lg:pt-14">
            <p>
              BlockMint Technology Services aims to bridge the gap between technology, business requirements and
              professional skill development.
            </p>
            <p>
              By bringing together multiple service capabilities, we seek to create an accessible ecosystem where
              individuals, startups and established organisations can find practical solutions for their evolving
              needs.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 sm:mt-20 lg:grid-cols-12 lg:gap-5">
          <Reveal className="lg:col-span-7">
            <article className="relative flex h-full flex-col justify-between overflow-hidden rounded-4xl bg-ink p-8 text-white sm:p-12">
              <span className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" aria-hidden="true" />
              <span className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-copper/25" aria-hidden="true" />
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-line text-copper">
                  <Target className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <span className="label text-muted">Our Mission</span>
              </div>
              <p className="mt-14 max-w-xl text-2xl font-medium leading-snug tracking-tight sm:text-[2rem] sm:leading-[1.25]">
                &ldquo;To deliver accessible technology solutions, professional services and quality education that
                support business and individual growth.&rdquo;
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-5">
            <article className="flex h-full flex-col justify-between rounded-4xl border border-ink/15 bg-paper-2 p-8 sm:p-12">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-copper-deep">
                  <Eye className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <span className="label text-muted-dark">Our Vision</span>
              </div>
              <p className="mt-14 text-xl font-medium leading-snug tracking-tight sm:text-2xl sm:leading-[1.35]">
                &ldquo;To build a trusted, technology-driven organisation that empowers businesses and individuals
                through innovation, knowledge and reliable professional services.&rdquo;
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
