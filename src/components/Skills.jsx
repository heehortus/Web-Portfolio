import SectionLabel from './SectionLabel'

export default function Skills({ skills }) {
  return (
    <section id="skills" className="border-t border-border max-w-[1100px] mx-auto px-16 py-24">
      <SectionLabel>Skills</SectionLabel>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2px] mt-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="p-8 bg-card border border-border hover:bg-[#f5f3ef] transition-colors duration-200"
          >
            <div className="w-9 h-9 flex items-center justify-center border border-border text-[13px] text-muted mb-5">
              {skill.abbr}
            </div>
            <h3 className="font-medium text-[15px] mb-2">{skill.name}</h3>
            <p className="text-[13px] text-muted leading-[1.6]">{skill.desc}</p>
            <div className="mt-4 flex flex-wrap gap-[6px]">
              {skill.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-[11px] px-[10px] py-[3px] bg-bg text-muted border border-border tracking-[0.04em]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
