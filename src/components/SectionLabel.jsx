export default function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-4 text-[11px] tracking-[0.18em] uppercase text-accent font-medium mb-12">
      {children}
      <span className="w-10 h-px bg-accent flex-shrink-0" />
    </div>
  )
}
