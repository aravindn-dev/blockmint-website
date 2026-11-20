import { Eye, Target } from 'lucide-react'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-bm-dark py-24 text-white sm:py-32 border-t border-bm-border">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-35" aria-hidden="true" />
      <div className="container-site relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <SectionLabel>About Us</SectionLabel>
            <h2 className="mt-6 text-[2.4rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[4.4rem]">
              Building the Foundation for{' '}
              <span className="bg-gradient-to-r from-bm-cyan to-bm-green bg-clip-text text-transparent">
                Tomorrow.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-[15.5px] leading-[1.75] text-bm-text sm:text-base lg:col-span-5 lg:pt-14">
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
            <article className="relative flex h-full flex-col justify-between overflow-hidden rounded-4xl border border-bm-border bg-bm-card p-8 text-white sm:p-12 shadow-[0_16px_48px_rgba(0,0,0,0.5)]">
              <span className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-bm-blue/20" aria-hidden="true" />
              <span className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-bm-cyan/25" aria-hidden="true" />
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-bm-border bg-bm-dark text-bm-cyan shadow-[0_0_14px_rgba(0,231,251,0.25)]">
                  <Target className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <span className="label text-bm-cyan">Our Mission</span>
              </div>
              <p className="mt-14 max-w-xl text-2xl font-medium leading-snug tracking-tight sm:text-[2rem] sm:leading-[1.25]">
                &ldquo;To deliver accessible technology solutions, professional services and quality education that
                support business and individual growth.&rdquo;
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-5">
            <article className="flex h-full flex-col justify-between rounded-4xl border border-bm-border bg-bm-card p-8 sm:p-12 shadow-[0_16px_48px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-bm-border bg-bm-dark text-bm-green shadow-[0_0_14px_rgba(161,243,9,0.25)]">
                  <Eye className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <span className="label text-bm-green">Our Vision</span>
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
