import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Plus } from 'lucide-react'
import { whatsappLink } from '../config/site'

export default function ServiceCard({ service, wide }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const Icon = service.icon

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-ink-2 p-6 transition-all duration-500 sm:p-8 ${
        open ? 'border-copper/40' : 'border-line hover:-translate-y-1 hover:border-white/25'
      }`}
    >
      {/* hover sheen line */}
      <span
        className="absolute inset-x-8 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-copper to-transparent transition-transform duration-700 group-hover:scale-x-100"
        aria-hidden="true"
      />

      <div className="flex items-start justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-ink text-white transition-colors duration-500 group-hover:border-copper/40 group-hover:text-copper">
          <Icon className="h-[22px] w-[22px]" strokeWidth={1.4} />
        </span>
        <span className="text-[13px] font-semibold tabular-nums text-muted">{service.id}</span>
      </div>

      <div className={`mt-8 ${wide ? 'lg:grid lg:grid-cols-2 lg:gap-10' : ''}`}>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10.5px] font-semibold uppercase tracking-label text-muted">{service.pillar}</span>
            {service.note && (
              <span className="rounded-full border border-copper/30 px-2.5 py-0.5 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-copper-soft">
                {service.note}
              </span>
            )}
          </div>
          <h3 className="mt-3 text-[1.35rem] font-semibold leading-snug tracking-tight text-white sm:text-2xl">
            {service.title}
          </h3>
        </div>
        <p className="mt-3 text-[15px] leading-relaxed text-muted lg:mt-0 lg:self-end">{service.description}</p>
      </div>

      {wide && !open && (
        <ul className="mt-8 hidden flex-wrap gap-2 lg:flex" aria-label="Capabilities preview">
          {service.capabilities.map((c) => (
            <li key={c} className="rounded-full border border-line px-3.5 py-1.5 text-[12.5px] text-white/75">
              {c}
            </li>
          ))}
        </ul>
      )}

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-6">
              <p className="text-[10.5px] font-semibold uppercase tracking-label text-muted">Key capabilities</p>
              <ul className={`mt-3 grid border-t border-line ${wide ? 'lg:grid-cols-2 lg:gap-x-8' : ''}`}>
                {service.capabilities.map((c) => (
                  <li key={c} className="flex items-center gap-3 border-b border-line py-3 text-[14.5px] text-white/90">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-copper" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink(`Hello BlockMint, I would like to enquire about ${service.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-copper transition-colors hover:text-copper-soft"
              >
                Enquire about this service <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-auto pt-7">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center justify-between border-t border-line pt-5 text-left text-sm font-semibold text-white"
        >
          <span>
            {open ? 'Show less' : 'Explore Services'}
            <span className="ml-2 font-medium text-muted">· {service.capabilities.length} capabilities</span>
          </span>
          <span
            className={`grid h-9 w-9 place-items-center rounded-full border transition-all duration-500 ${
              open ? 'rotate-45 border-copper bg-copper text-ink' : 'border-line group-hover:border-copper/50 group-hover:text-copper'
            }`}
          >
            <Plus className="h-4 w-4" />
          </span>
        </button>
      </div>
    </article>
  )
}
