import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <motion.main
      className="min-h-screen flex flex-col items-center justify-center text-center px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="font-sans text-[clamp(1.5rem,4vw,3rem)] font-normal leading-[1.2] mb-4">
        아직 준비 중인 페이지예요.
      </h1>
      <p className="text-muted text-[14px] leading-[1.8] max-w-[400px] mb-10">
        해당 프로젝트는 현재 업로드 준비 중이에요.<br />곧 만나볼 수 있어요!
      </p>
      <button
        onClick={() => navigate('/')}
        className="text-[13px] text-fg border-b border-border pb-px hover:border-fg transition-colors tracking-[0.05em]"
      >
        ← 메인으로 돌아가기
      </button>
    </motion.main>
  )
}