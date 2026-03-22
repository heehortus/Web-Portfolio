import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { lazy, Suspense } from 'react'

export default function ProjectDetail({ projects }) {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  const MDXContent = lazy(() => import(`../projects/${slug}.mdx`))

  if (!project) return (
    <div className="min-h-screen flex items-center justify-center text-muted">
      프로젝트를 찾을 수 없어요.
    </div>
  )

  return (
    <motion.main
      className="relative z-10 min-h-screen max-w-[900px] mx-auto px-6 md:px-16 pt-40 pb-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Link
        to="/"
        className="text-[13px] text-muted tracking-[0.05em] hover:text-fg transition-colors duration-200 flex items-center gap-2 mb-16"
      >
        ← Back
      </Link>

      <div className="mb-12">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[11px] px-[10px] py-[3px] bg-bg text-muted border border-border">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="font-sans text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.1] tracking-tight mb-4">
          {project.name}
        </h1>
        <p className="text-muted text-[16px] leading-[1.7] max-w-[800px]">
          {project.desc}
        </p>
      </div>

      {project.image && (
        <div className="w-full mb-16 overflow-hidden" style={{ backgroundColor: project.bg || '#1a1916' }}>
          <img src={project.image} alt={project.name} className="w-full object-contain max-h-[500px]" />
        </div>
      )}

      {/* MDX 내용 */}
      <div className="prose prose-invert max-w-[800px]">
        <Suspense fallback={<div className="text-muted">Loading...</div>}>
          <MDXContent />
        </Suspense>
      </div>
    </motion.main>
  )
}