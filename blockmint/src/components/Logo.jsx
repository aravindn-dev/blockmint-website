/**
 * TEMPORARY LOGO
 * ------------------------------------------------------------------
 * Replace this component's contents (or swap <LogoMark /> for an <img>)
 * once the official BlockMint logo is final. Every place on the site
 * renders <Logo />, so nothing else needs to change.
 */

export function LogoMark({ className = 'h-8 w-8', tone = 'dark' }) {
  const top = tone === 'dark' ? '#F5F2EA' : '#2A2A2A'
  const left = tone === 'dark' ? '#A6A29C' : '#171717'
  const right = tone === 'dark' ? '#5E5A54' : '#4A4741'
  const seam = tone === 'dark' ? '#111111' : '#F5F2EA'
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      {/* cube faces */}
      <path d="M16 3 28 10 16 17 4 10Z" fill={top} />
      <path d="M4 10 16 17v13L4 23Z" fill={left} />
      <path d="M28 10 16 17v13l12-7Z" fill={right} />
      {/* the minted block */}
      <path d="M16 10 22 13.5 16 17 10 13.5Z" fill="#D99A52" />
      {/* seams that split the cube into blocks */}
      <g stroke={seam} strokeWidth="1.1" strokeLinecap="round">
        <path d="M22 6.5 10 13.5M10 6.5l12 7M4 16.5l12 7 12-7M10 13.5v13M22 13.5v13" />
      </g>
    </svg>
  )
}

export default function Logo({ tone = 'dark', className = '' }) {
  const isDark = tone === 'dark'
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark tone={tone} className="h-9 w-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className={`text-[17px] font-extrabold tracking-[0.14em] ${isDark ? 'text-white' : 'text-text-light'}`}>
          BLOCKMINT
        </span>
        <span className={`mt-1 text-[8.5px] font-semibold tracking-[0.32em] ${isDark ? 'text-muted' : 'text-muted-dark'}`}>
          TECHNOLOGY SERVICES
        </span>
      </span>
    </span>
  )
}
