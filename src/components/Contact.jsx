import SectionLabel from './SectionLabel'

export default function Contact({ data }) {
  return (
    <section id="contact" className="border-t border-border max-w-[1100px] mx-auto px-16 py-24 text-center">
      <div className="flex justify-center">
        <SectionLabel>Contact</SectionLabel>
      </div>

      <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] tracking-tight mt-0 mb-6">
        Let's make something<br />
        <em className="text-muted not-italic">worth making.</em>
      </h2>

      <p className="text-muted text-[16px] mb-10 max-w-[400px] mx-auto">
        Open to new projects, collaborations, and conversations about design.
      </p>

      <a
        href={`mailto:${data.email}`}
        className="inline-block px-7 py-3 bg-fg text-bg text-[13px] font-medium tracking-[0.05em] hover:opacity-80 transition-opacity mb-10"
      >
        {data.email}
      </a>

      <div className="flex justify-center gap-8 flex-wrap">
        {data.social.map((link) => (
          <a
            key={link.label}
            href={link.url}
            className="text-[13px] text-muted tracking-[0.05em] border-b border-border pb-px hover:text-fg hover:border-fg transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}
