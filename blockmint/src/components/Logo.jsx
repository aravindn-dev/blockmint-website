export function LogoMark({ className = 'h-9 w-9', alt = 'BlockMint' }) {
  return (
    <img
      src="/logo-mark.png"
      alt={alt}
      className={`${className} object-contain`}
      width={44}
      height={44}
      loading="eager"
    />
  )
}

export default function Logo({ className = '', markOnly = false, tone = 'dark', hideQuote = false }) {
  if (markOnly) {
    return <LogoMark className="h-9 w-9" />
  }
  return (
    <span className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      <LogoMark className="h-10 w-10 sm:h-11 sm:w-11 shrink-0" />
      <span className="flex flex-col min-w-0">
        <span className="text-[16px] sm:text-[18px] font-extrabold tracking-[0.14em] leading-none">
          <span className="text-white">BLOCK</span>
          <span className="bg-gradient-to-r from-[#00E7FB] to-[#A1F309] bg-clip-text text-transparent">MINT</span>
        </span>
        <span className="mt-1 text-[7.5px] sm:text-[8.5px] font-semibold tracking-[0.32em] text-[#B8C0CC] leading-none">
          TECHNOLOGY SERVICES
        </span>
        {!hideQuote && (
          <span className="mt-1 text-[8px] sm:text-[9.5px] font-medium italic tracking-normal text-bm-cyan leading-tight">
            Build Something Today That Inspires Tomorrow.
          </span>
        )}
      </span>
    </span>
  )
}
