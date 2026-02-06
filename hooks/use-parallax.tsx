'use client'

import { useEffect, useState } from 'react'

export function useParallax(speed = 0.3) {
  const [offset, setOffset] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    mediaQuery.addEventListener('change', handleChange)

    if (mediaQuery.matches) return

    const isMobile = window.innerWidth < 768
    if (isMobile) return

    const handleScroll = () => {
      setOffset(window.scrollY * speed)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [speed])

  return { offset, prefersReducedMotion }
}
