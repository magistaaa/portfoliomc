'use client'

import { useEffect, useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '' }) => {
  const isVisible = useScrollAnimation()
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setAnimate(true)
    }
  }, [isVisible])

  return (
    <div
      className={`transform transition-all duration-1000 ${
        animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default AnimatedSection

