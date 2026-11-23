import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import { LogoMark } from './Logo'
import { pillars, audiences } from '../data/content'

export default function Overview() {
  return (
    <section id="overview" className="relative bg-bm-dark py-24 text-white sm:py-32 border-t border-bm-border">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="container-site relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <SectionLabel>Company Overview</SectionLabel>
            <h2 className="h-section mt-6">
              One Organisation.
              <br />
              <span className="bg-gradient-to-r from-bm-cyan to-bm-green bg-clip-text text-transparent">
                Multiple Possibilities.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6 lg:pt-12">
            <div className="max-w-xl space-y-5 text-[15.5px] leading-[1.75] text-bm-text sm:text-base">
              <p className="text-lg font-medium leading-relaxed text-white sm:text-xl">
                BlockMint Technology Services is a multi-service technology and business solutions company focused on
                delivering innovative, reliable and practical services.
              </p>
              <p>
                We offer Artificial Intelligence, Blockchain Technology, Software Development, Taxation and Business
                Consultancy, Educational Training, and Digital Marketing Services.
              </p>
              <p>
                Our aim is to help individuals and businesses access modern technology, professional support and skill
                development through one service-oriented organisation.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Capability map */}
        <Reveal delay={0.1} className="mt-20 sm:mt-24">
          <div className="rounded-4xl border border-bm-border bg-bm-card p-5 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col items-start gap-1 sm:items-center">
              <div className="inline-flex items-center gap-3 rounded-full border border-bm-border bg-bm-dark py-2 pl-2 pr-5 text-white shadow-[0_0_20px_rgba(0,231,251,0.15)]">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-bm-card border border-bm-border">
                  <LogoMark className="h-6 w-6" />
                </span>
                <span className="text-sm font-semibold tracking-wide">BlockMint Technology Services</span>
              </div>
              <p className="mt-2 text-xs font-medium italic tracking-wide text-bm-cyan">
                Build Something Today That Inspires Tomorrow.
              </p>
            </div>

            {/* connectors (desktop) */}
            <div className="relative hidden h-14 sm:block" aria-hidden="true">
              <span className="absolute left-1/2 top-0 h-7 w-px bg-bm-border" />
              <span className="absolute left-[16.66%] right-[16.66%] top-7 h-px bg-bm-border" />
              {[16.66, 50, 83.33].map((l) => (
                <span key={l} className="absolute top-7 h-7 w-px bg-bm-border" style={{ left: `${l}%` }}>
                  <span className="absolute -bottom-1 -left-[3px] h-[7px] w-[7px] rounded-full bg-bm-cyan shadow-[0_0_8px_#00E7FB]" />
                </span>
              ))}
            </div>

            <div className="relative mt-6 grid gap-4 border-l border-bm-border pl-5 sm:mt-0 sm:grid-cols-3 sm:gap-5 sm:border-l-0 sm:pl-0">
              {pillars.map((p, i) => (
                <div
                  key={p.key}
                  className="relative rounded-3xl border border-bm-border bg-bm-dark/70 p-6 transition-all duration-300 hover:border-bm-cyan/50 hover:shadow-[0_8px_24px_rgba(0,231,251,0.1)]"
                >
                  <span className="absolute -left-[24px] top-8 h-[7px] w-[7px] rounded-full bg-bm-cyan sm:hidden shadow-[0_0_8px_#00E7FB]" aria-hidden="true" />
                  <p className="text-[11px] font-semibold tracking-label text-bm-cyan">DIVISION 0{i + 1}</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">{p.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-bm-text">{p.blurb}</p>
                  <ul className="mt-5 divide-y divide-bm-border border-t border-bm-border">
                    {p.services.map((s) => (
                      <li key={s} className="flex items-center justify-between py-2.5 text-[14px] font-medium text-bm-silver">
                        {s}
                        <span className="h-1.5 w-1.5 rounded-full bg-bm-cyan/60" aria-hidden="true" />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-bm-border pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-label text-bm-text">Designed to serve</p>
              <ul className="flex flex-wrap gap-2">
                {audiences.map((a) => (
                  <li key={a} className="rounded-full border border-bm-border bg-bm-dark/50 px-4 py-1.5 text-[13px] font-medium text-bm-silver">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
