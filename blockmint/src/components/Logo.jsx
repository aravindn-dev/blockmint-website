export function LogoMark({ className = 'h-9 w-9', alt = 'BlockMint' }) {
  return (
    <img
      src="/logo-mark.png"
      alt={alt}
      className={`${className} object-contain`}
      width={40}
      height={40}
      loading="eager"
    />
  )
}

export default function Logo({ className = '', markOnly = false, tone = 'dark' }) {
  if (markOnly) {
    return <LogoMark className="h-9 w-9" />
  }
  return (
    <span className={`inline-flex items-center gap-3 select-none ${className}`}>
      <LogoMark className="h-10 w-10 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="text-[18px] font-extrabold tracking-[0.14em]">
          <span className="text-white">BLOCK</span>
          <span className="bg-gradient-to-r from-[#00E7FB] to-[#A1F309] bg-clip-text text-transparent">MINT</span>
        </span>
        <span className="mt-1 text-[8.5px] font-semibold tracking-[0.32em] text-[#B8C0CC]">
          TECHNOLOGY SERVICES
        </span>
      </span>
    </span>
  )
}
