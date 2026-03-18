import SectionLabel from './SectionLabel'

export default function About({ data }) {
  return (
    <section id="about" className="max-w-[1100px] mx-auto px-16 py-24">
      <SectionLabel>About me</SectionLabel>

      <div className="grid grid-cols-2 gap-20 items-start">
        {/* Left — headline + stats */}
        <div>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] leading-[1.2] tracking-tight">
            Designing with <em className="text-muted not-italic">intention</em>,<br />
            building with care.
          </h2>

          <div className="grid grid-cols-2 gap-8 mt-12">
            {data.stats.map((s) => (
              <div key={s.label}>
                <div className="font-serif text-[3rem] leading-none mb-1">{s.num}</div>
                <div className="text-[12px] text-muted tracking-[0.08em] uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — bio text */}
        <div className="space-y-4 text-muted text-[15px] leading-[1.8]">
          {data.bio.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
