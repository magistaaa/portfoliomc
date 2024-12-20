'use client'

import { Parallax } from 'react-scroll-parallax'
import { ReactNode } from 'react'

interface ParallaxSectionProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function ParallaxSection({ children, speed = 10, className = '' }: ParallaxSectionProps) {
  return (
    <Parallax speed={speed} className={className}>
      {children}
    </Parallax>
  )
}

