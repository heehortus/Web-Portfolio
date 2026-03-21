import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current

    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.2
      pos.current.y += (target.current.y - pos.current.y) * 0.2
      dot.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`
      rafRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        width: '16px',
        height: '16px',
        background: '#24e30e',
        borderRadius: '50%',
        marginLeft: '-3px',
        marginTop: '-3px',
      }}
    />
  )
}