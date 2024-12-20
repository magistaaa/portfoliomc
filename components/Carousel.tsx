'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  '/placeholder.svg?height=600&width=1200&text=Project+1',
  '/placeholder.svg?height=600&width=1200&text=Project+2',
  '/placeholder.svg?height=600&width=1200&text=Project+3',
]

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Carousel Image ${index + 1}`}
          fill
          style={{
            objectFit: 'cover',
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
          }}
        />
      ))}
    </div>
  )
}

export default Carousel

