'use client'

import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

const Background = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const backgroundAnimation = useAnimation()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    backgroundAnimation.start({
      x: mousePosition.x / -20,
      y: mousePosition.y / -20,
      transition: { type: 'spring', damping: 50 }
    })
  }, [mousePosition, backgroundAnimation])

  return (
    <motion.div
      className="fixed inset-0 z-0 pointer-events-none"
      animate={backgroundAnimation}
    >
      <div className="absolute inset-0 bg-gradient opacity-30"></div>
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
    </motion.div>
  )
}

export default Background

