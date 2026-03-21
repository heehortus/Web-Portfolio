import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const ITEM_WIDTH = 480
const GAP = 24

export default function Projects({ projects }) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const totalDistance = (projects.length - 1) * (ITEM_WIDTH + GAP)
  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance])
  const leftPadding = `calc(50vw - ${ITEM_WIDTH / 2}px)`

  return (
    <div id="projects" ref={containerRef} style={{ height: `${projects.length * 100}vh` }} className="relative">
      <div
        className="sticky top-0 h-screen flex flex-col justify-center overflow-visible"
        style={{ paddingLeft: leftPadding }}
      >
        {/* 섹션 라벨 — 뷰포트 중앙 */}
        <div
          className="py-6 mb-6 flex justify-center"
          style={{ width: '100vw', marginLeft: `calc(-1 * (50vw - ${ITEM_WIDTH / 2}px))` }}
        >
          <div className="flex items-center gap-4 text-[11px] tracking-[0.18em] uppercase text-accent font-medium">
            Projects
            <span className="w-10 h-px bg-accent flex-shrink-0" />
          </div>
        </div>

        {/* 갤러리 */}
        <motion.div className="flex" style={{ x, gap: GAP }}>
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              className="group flex-shrink-0 border border-border hover:border-fg transition-colors duration-300 overflow-hidden"
              style={{ width: ITEM_WIDTH, height: 600 }}
            >
              <div className="w-full overflow-hidden bg-card" style={{ height: 420 }}>
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
                  <div className="font-medium text-[16px] mb-1">{project.name}</div>
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
        </motion.div>
      </div>
    </div>
  )
}