'use client'

import { useState, useEffect } from 'react'

export const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const bodyHeight = document.body.clientHeight

      if (scrollY > windowHeight * 0.2 && scrollY < bodyHeight - windowHeight * 1.2) {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return isVisible
}

