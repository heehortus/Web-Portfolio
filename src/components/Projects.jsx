import { useState } from 'react'
import SectionLabel from './SectionLabel'

export default function Projects({ projects }) {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="projects" className="border-t border-border max-w-[1100px] mx-auto px-6 md:px-16 py-24">
      <SectionLabel>Projects</SectionLabel>

      <div>
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            className={`
              grid grid-cols-[1fr_auto] items-center gap-8
              py-7 border-b border-border first:border-t first:border-border
              no-underline text-fg
              transition-all duration-200
              ${hovered === project.name ? 'pl-4' : 'pl-0'}
            `}
            onMouseEnter={() => setHovered(project.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <div>
              <div className="font-medium text-[17px]">{project.name}</div>
              <div className="text-[13px] text-muted mt-[3px]">{project.desc}</div>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-[10px] py-[3px] bg-bg text-muted border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div
              className={`
                w-9 h-9 flex items-center justify-center border text-[16px] text-muted flex-shrink-0
                transition-all duration-200
                ${hovered === project.name ? 'bg-fg text-bg border-fg' : 'border-border'}
              `}
            >
              →
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}