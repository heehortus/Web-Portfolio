import SectionLabel from "./SectionLabel";

export default function Projects({ projects }) {
  return (
    <section id="projects" className="min-h-screen mx-auto px-6 md:px-16 py-24">
      <div className="flex justify-center mb-12">
        <SectionLabel>Projects</SectionLabel>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            className="group block overflow-hidden transition-colors duration-300"
          >
            <div className="w-full overflow-hidden bg-card h-[260px]">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted text-[13px] tracking-widest uppercase">
                  No image
                </div>
              )}
            </div>

            <div className="p-6 flex justify-between items-start">
              <div>
                <div className="font-medium text-[16px] mb-1">
                  {project.name}
                </div>
                <div className="text-[13px] text-muted">{project.desc}</div>
                <div className="flex flex-wrap gap-2 mt-3">
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
              <span className="text-[20px] text-muted group-hover:text-fg group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200 ml-4 flex-shrink-0">
                ↗
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
