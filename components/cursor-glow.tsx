'use client'

import { useEffect, useState } from 'react'

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const hideOnTouch = () => setIsVisible(false)

    window.addEventListener('mousemove', updatePosition)
    window.addEventListener('touchstart', hideOnTouch)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      window.removeEventListener('touchstart', hideOnTouch)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="pointer-events-none fixed z-50 hidden md:block"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="w-8 h-8 bg-primary/10 rounded-full blur-xl animate-pulse" />
    </div>
  )
}
