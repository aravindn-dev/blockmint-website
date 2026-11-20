import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import HeroVisual from './HeroVisual'
import { contact, placeholders, emailLink, whatsappLink } from '../config/site'

function Detail({ icon: Icon, label, value, placeholder, href }) {
  const content = value || placeholder
  const Tag = value && href ? 'a' : 'div'
  return (
    <Tag
      {...(Tag === 'a' ? { href } : {})}
      className="group flex items-start gap-4 py-6 sm:block sm:px-8 sm:py-8 sm:first:pl-0"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-bm-border bg-bm-dark text-bm-cyan shadow-[0_0_12px_rgba(0,231,251,0.2)] transition-all duration-300 group-hover:border-bm-cyan">
        <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
      </span>
      <div className="sm:mt-6">
        <p className="text-[11px] font-semibold uppercase tracking-label text-bm-silver/70">{label}</p>
        <p className={`mt-2 break-words text-[15px] font-medium transition-colors ${value ? 'text-white group-hover:text-bm-cyan' : 'text-white/70'}`}>
          {content}
        </p>
      </div>
    </Tag>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-bm-black pt-24 sm:pt-32 border-t border-bm-border">
      <div className="grid-lines pointer-events-none absolute inset-0 -z-10 opacity-30" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 top-10 -z-10 hidden w-[460px] opacity-30 lg:block" aria-hidden="true">
        <HeroVisual className="aspect-[400/470] w-full" />
      </div>

      <div className="container-site">
        <Reveal className="max-w-4xl">
          <SectionLabel>Contact</SectionLabel>
          <h2 className="h-display mt-6 text-[2.8rem] sm:text-7xl lg:text-[6rem]">
            Let&rsquo;s Build Something{' '}
            <span className="bg-gradient-to-r from-bm-cyan to-bm-green bg-clip-text text-transparent">
              Meaningful.
            </span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-bm-text sm:text-lg">
            Looking for technology solutions, business services, professional consultancy or educational training?
            Connect with BlockMint Technology Services.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={emailLink()} className="btn-primary group">
              Get in Touch
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-ghost group">
              <MessageCircle className="h-4 w-4 transition-colors group-hover:text-bm-cyan" />
              WhatsApp Enquiry
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            id="contact-details"
            className="mt-20 grid scroll-mt-28 divide-y divide-bm-border border-t border-bm-border sm:mt-24 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
          >
            <Detail icon={Phone} label="Phone" value={contact.phone} placeholder={placeholders.phone} href={`tel:${contact.phone.replace(/\s/g, '')}`} />
            <Detail icon={Mail} label="Email" value={contact.email} placeholder={placeholders.email} href={`mailto:${contact.email}`} />
            <Detail icon={MapPin} label="Address" value={contact.address} placeholder={placeholders.address} />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
