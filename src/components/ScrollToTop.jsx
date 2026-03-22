import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()
  const isDetail = pathname.startsWith('/project/')

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto'
    document.documentElement.style.scrollSnapType = 'none'
    window.scrollTo(0, 0)

    setTimeout(() => {
      if (!isDetail) {
        document.documentElement.style.scrollBehavior = 'smooth'
        document.documentElement.style.scrollSnapType = 'y mandatory'
      }
    }, 100)
  }, [pathname])

  return null
}