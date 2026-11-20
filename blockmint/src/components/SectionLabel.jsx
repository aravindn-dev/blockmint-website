export default function SectionLabel({ children, tone = 'dark', className = '' }) {
  return (
    <span className={`label ${tone === 'dark' ? 'text-muted' : 'text-muted-dark'} ${className}`}>
      <span className={`h-px w-6 ${tone === 'dark' ? 'bg-copper' : 'bg-copper-deep'}`} aria-hidden="true" />
      {children}
    </span>
  )
}
