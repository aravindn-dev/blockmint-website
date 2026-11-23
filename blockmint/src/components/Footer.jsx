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
    <footer className="bg-bm-dark border-t border-bm-border">
      <div className="container-site">
        <div className="grid gap-10 py-14 md:grid-cols-12 md:items-start">
          <div className="md:col-span-6">
            <Logo />
            <p className="mt-5 max-w-sm text-[14.5px] leading-relaxed text-bm-text">
              Artificial Intelligence, Blockchain, Software Development, Taxation &amp; Business Consultancy, Educational Training, and Digital Marketing.
            </p>
          </div>
          <nav aria-label="Footer" className="md:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-label text-bm-cyan">Navigation</p>
            <ul className="mt-4 grid grid-cols-2 gap-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[15px] text-bm-silver transition-colors hover:text-bm-cyan">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-2 md:text-right">
            <a
              href="#home"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-bm-border bg-bm-card text-white transition-all duration-300 hover:-translate-y-1 hover:border-bm-cyan hover:text-bm-cyan hover:shadow-[0_0_16px_rgba(0,231,251,0.3)]"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-bm-border py-7 text-[13px] text-bm-text sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © 2026 BlockMint Technology Services. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy-policy" className="transition-colors hover:text-bm-cyan">Privacy Policy</a>
            <a href="#terms" className="transition-colors hover:text-bm-cyan">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>

      {/* Oversized cyber wordmark */}
      <div className="overflow-hidden border-t border-bm-border/40" aria-hidden="true">
        <p className="container-site select-none whitespace-nowrap py-3 text-center text-[17vw] font-extrabold leading-[0.8] tracking-[-0.04em] lg:text-[13rem]">
          <span className="text-white/[0.03]">BLOCK</span>
          <span className="text-bm-cyan/[0.05]">MINT</span>
        </p>
      </div>
    </footer>
  )
}
