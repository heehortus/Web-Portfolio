export default function Navbar({ name }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-16 py-5 bg-bg/85 backdrop-blur-md border-b border-border">
      <span className="text-[13px] tracking-[0.12em] uppercase text-muted font-medium">
        {name}
      </span>
      <div className="hidden md:flex gap-8">
        {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-[13px] text-muted tracking-[0.05em] hover:text-fg transition-colors duration-200"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  )
}
