import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Navbar({ name }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNav = (id) => {
    navigate('/', { state: { scrollTo: id } })
    setOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-16 py-5 backdrop-blur-md border-b border-border">
      <span className="text-[13px] tracking-[0.12em] uppercase text-muted font-medium">
        {name}
      </span>

      {/* 데스크탑 메뉴 */}
      <div className="hidden md:flex gap-8 items-center">
        {["Projects", "Contact"].map((item) => (
          <button
            key={item}
            onClick={() => handleNav(item.toLowerCase())}
            className="text-[13px] text-muted tracking-[0.05em] hover:text-accent transition-colors duration-200"
          >
            {item}
          </button>
        ))}
        <a
          href="public/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] px-4 py-2 border border-fg text-fg hover:bg-fg hover:text-bg transition-colors duration-200 tracking-[0.05em]"
        >
          Resume ↗
        </a>
      </div>

      {/* 햄버거 버튼 */}
      <button
        className="md:hidden flex flex-col gap-[5px]"
        onClick={() => setOpen(!open)}
      >
        <span className={`w-5 h-px bg-fg transition-all duration-300 ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
        <span className={`w-5 h-px bg-fg transition-all duration-300 ${open ? "opacity-0" : ""}`} />
        <span className={`w-5 h-px bg-fg transition-all duration-300 ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
      </button>

      {/* 모바일 메뉴 */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-full left-0 right-0 w-full flex flex-col gap-4 px-6 py-6 border-b border-border"
            style={{
              backgroundColor: 'rgba(25,25,25,0.85)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)'
            }}
          >
            {["Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => handleNav(item.toLowerCase())}
                className="text-[15px] text-muted tracking-[0.05em] hover:text-accent transition-colors duration-200 text-left"
              >
                {item}
              </button>
            ))}
            <a
              href="public/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] text-muted tracking-[0.05em] hover:text-accent transition-colors duration-200"
            >
              Resume ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}