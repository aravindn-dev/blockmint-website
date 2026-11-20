import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import { LogoMark } from './Logo'
import { pillars, audiences } from '../data/content'

export default function Overview() {
  return (
    <section id="overview" className="relative bg-paper py-24 text-text-light sm:py-32">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <SectionLabel tone="light">Company Overview</SectionLabel>
            <h2 className="h-section mt-6">
              One Organisation.
              <br />
              <span className="text-muted-dark">Multiple Possibilities.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6 lg:pt-12">
            <div className="max-w-xl space-y-5 text-[15.5px] leading-[1.75] text-[#3d3a35] sm:text-base">
              <p className="text-lg font-medium leading-relaxed text-text-light sm:text-xl">
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
          <div className="rounded-4xl border border-line-dark bg-white/50 p-5 sm:p-10 lg:p-12">
            <div className="flex flex-col items-start gap-1 sm:items-center">
              <div className="inline-flex items-center gap-3 rounded-full bg-ink py-2 pl-2 pr-5 text-white">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-ink-3">
                  <LogoMark className="h-6 w-6" />
                </span>
                <span className="text-sm font-semibold tracking-wide">BlockMint Technology Services</span>
              </div>
            </div>

            {/* connectors (desktop) */}
            <div className="relative hidden h-14 sm:block" aria-hidden="true">
              <span className="absolute left-1/2 top-0 h-7 w-px bg-ink/25" />
              <span className="absolute left-[16.66%] right-[16.66%] top-7 h-px bg-ink/25" />
              {[16.66, 50, 83.33].map((l) => (
                <span key={l} className="absolute top-7 h-7 w-px bg-ink/25" style={{ left: `${l}%` }}>
                  <span className="absolute -bottom-1 -left-[3px] h-[7px] w-[7px] rounded-full bg-copper-deep" />
                </span>
              ))}
            </div>

            <div className="relative mt-6 grid gap-4 border-l border-ink/20 pl-5 sm:mt-0 sm:grid-cols-3 sm:gap-5 sm:border-l-0 sm:pl-0">
              {pillars.map((p, i) => (
                <div key={p.key} className="relative rounded-3xl border border-line-dark bg-paper p-6">
                  <span className="absolute -left-[24px] top-8 h-[7px] w-[7px] rounded-full bg-copper-deep sm:hidden" aria-hidden="true" />
                  <p className="text-[11px] font-semibold tracking-label text-copper-deep">DIVISION 0{i + 1}</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">{p.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-dark">{p.blurb}</p>
                  <ul className="mt-5 divide-y divide-line-dark border-t border-line-dark">
                    {p.services.map((s) => (
                      <li key={s} className="flex items-center justify-between py-2.5 text-[14px] font-medium">
                        {s}
                        <span className="h-1 w-1 rounded-full bg-ink/30" aria-hidden="true" />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-line-dark pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-label text-muted-dark">Designed to serve</p>
              <ul className="flex flex-wrap gap-2">
                {audiences.map((a) => (
                  <li key={a} className="rounded-full border border-line-dark px-4 py-1.5 text-[13px] font-medium">
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
