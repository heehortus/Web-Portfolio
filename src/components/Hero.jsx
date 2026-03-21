export default function Hero({ data }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center max-w-[1100px] mx-auto px-16 pt-32 pb-16"
    >
      <p
        className="text-[12px] tracking-[0.15em] uppercase text-accent font-medium mb-6
                   opacity-0 animate-fade-up [animation-delay:200ms]"
      >
        {data.role} — {data.location}
      </p>

      <h1
        className="font-sans text-[clamp(3rem,7vw,6.5rem)] leading-[1.1] tracking-tight
                   opacity-0 animate-fade-up [animation-delay:350ms]"
      >
        디자인과<br />
        목적이 <em className="text-muted not-italic">만나는</em><br />
        공간을 만듭니다.
      </h1>

      <p
        className="mt-8 max-w-[480px] text-muted text-[16px] leading-[1.7]
                   opacity-0 animate-fade-up [animation-delay:500ms]"
      >
        I craft thoughtful, human-centered digital experiences — from brand systems to interactive interfaces.
      </p>

      <div className="mt-10 flex gap-4 items-center opacity-0 animate-fade-up [animation-delay:650ms]">
        <a
          href="#projects"
          className="px-7 py-3 bg-fg text-bg text-[13px] font-medium tracking-[0.05em] hover:opacity-80 transition-opacity"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="text-[13px] text-muted tracking-[0.05em] border-b border-border pb-px hover:text-fg hover:border-fg transition-colors"
        >
          Get in touch →
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-16 flex items-center gap-3 text-[11px] tracking-[0.12em] uppercase text-muted opacity-0 animate-fade-up [animation-delay:900ms]">
        <span
          className="w-10 h-px bg-muted origin-left animate-expand-line [animation-delay:1100ms]"
          style={{ transform: 'scaleX(0)' }}
        />
        Scroll
      </div>

      {/* Decorative number */}
      <span className="absolute right-16 bottom-12 font-sans text-[10rem] leading-none text-fg/[0.06] select-none pointer-events-none">
        01
      </span>
    </section>
  )
}
