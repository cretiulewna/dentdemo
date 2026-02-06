'use client'

import { useEffect, useRef } from 'react'

export function Tooth3D() {
  const toothRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!toothRef.current) return

    let rotationY = 0

    const animate = () => {
      rotationY += 0.5
      if (toothRef.current) {
        toothRef.current.style.transform = `rotateY(${rotationY}deg) rotateX(10deg)`
      }
      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div className="flex items-center justify-center perspective-1000">
      <div
        ref={toothRef}
        className="w-20 h-24 relative preserve-3d transition-transform duration-100"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Tooth SVG */}
        <svg
          viewBox="0 0 100 140"
          className="w-full h-full drop-shadow-2xl"
          style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))' }}
        >
          {/* Tooth shape */}
          <defs>
            <linearGradient id="toothGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#E8E8E8" />
            </linearGradient>
          </defs>
          
          {/* Main tooth body */}
          <path
            d="M 50 10 
               C 35 10, 25 20, 25 35
               C 25 45, 20 60, 20 75
               C 20 95, 25 110, 30 125
               C 32 132, 38 140, 45 140
               C 48 140, 50 138, 50 135
               C 50 138, 52 140, 55 140
               C 62 140, 68 132, 70 125
               C 75 110, 80 95, 80 75
               C 80 60, 75 45, 75 35
               C 75 20, 65 10, 50 10 Z"
            fill="url(#toothGradient)"
            stroke="#D0D0D0"
            strokeWidth="2"
          />
          
          {/* Highlight */}
          <ellipse
            cx="42"
            cy="30"
            rx="8"
            ry="12"
            fill="white"
            opacity="0.6"
          />
          
          {/* Root divider */}
          <line
            x1="50"
            y1="120"
            x2="50"
            y2="140"
            stroke="#D0D0D0"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  )
}
