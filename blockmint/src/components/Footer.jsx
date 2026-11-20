import { ArrowUp } from 'lucide-react'
import Logo from './Logo'
import { brand } from '../config/site'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-ink">
      <div className="container-site">
        <div className="grid gap-10 border-t border-line py-14 md:grid-cols-12 md:items-start">
          <div className="md:col-span-6">
            <Logo />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted">{brand.tagline}</p>
          </div>
          <nav aria-label="Footer" className="md:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-label text-muted">Navigation</p>
            <ul className="mt-4 grid grid-cols-2 gap-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[15px] text-white/85 transition-colors hover:text-copper">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-2 md:text-right">
            <a
              href="#home"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-line text-white transition-all duration-300 hover:-translate-y-1 hover:border-copper hover:text-copper"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-line py-7 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © 2026 BlockMint Technology Services. All Rights Reserved.</p>
          <div className="flex gap-6">
            {/* Point these to the policy pages once they are published */}
            <a href="#privacy-policy" className="transition-colors hover:text-white">Privacy Policy</a>
            <a href="#terms" className="transition-colors hover:text-white">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>

      {/* Oversized wordmark */}
      <div className="overflow-hidden" aria-hidden="true">
        <p className="container-site select-none whitespace-nowrap pb-2 text-center text-[17vw] font-extrabold leading-[0.8] tracking-[-0.05em] text-white/[0.03] lg:text-[13.5rem]">
          BLOCKMINT
        </p>
      </div>
    </footer>
  )
}
