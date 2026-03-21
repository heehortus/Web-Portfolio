export default function Navbar({ name }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-16 py-5 backdrop-blur-md border-b border-border">
      <span className="text-[13px] tracking-[0.12em] uppercase text-muted font-medium">
        {name}
      </span>
      <div className="hidden md:flex gap-8 items-center">
        {['Projects', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-[13px] text-muted tracking-[0.05em] hover:text-accent transition-colors duration-200"
          >
            {item}
          </a>
        ))}
        <a
          href="public/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] px-4 py-2 border border-fg text-fg hover:bg-fg hover:text-bg transition-colors duration-200 tracking-[0.05em]"
        >
          Resume ↗
        </a>
      </div>
    </nav>
  )
}