export default function SectionLabel({ children, tone = 'dark', className = '' }) {
  return (
    <span className={`label text-bm-silver ${className}`}>
      <span className="h-[2px] w-6 rounded-full bg-gradient-to-r from-bm-cyan to-bm-green shadow-[0_0_8px_rgba(0,231,251,0.6)]" aria-hidden="true" />
      {children}
    </span>
  )
}
