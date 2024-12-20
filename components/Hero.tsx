'use client'

import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'
import { ParallaxSection } from './ParallaxSection'

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 1000 },
  })

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center" style={{backgroundImage: "url('/hero-background.jpg')"}}>
      <ParallaxSection speed={-10} className="absolute inset-0 z-0">
        <div className="parallax">
          <div className="scroller">
            <span className="text-primary-500">Frontend</span>
            <span className="text-secondary-500">Developer</span>
            <span className="text-primary-500">UI/UX</span>
            <span className="text-secondary-500">Designer</span>
          </div>
        </div>
      </ParallaxSection>
      <div className="container mx-auto px-4 z-10">
        <animated.div ref={ref} style={fadeIn} className="text-center">
          <ParallaxSection speed={-5}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
              Hi, I'm <span className="text-primary-500">[Your Name]</span>
            </h1>
          </ParallaxSection>
          <ParallaxSection speed={5}>
            <p className="text-xl md:text-2xl mb-8 text-white">
              Crafting beautiful and functional web experiences
            </p>
          </ParallaxSection>
          <ParallaxSection speed={10}>
            <a
              href="#contact"
              className="bg-primary-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-600 transition-colors"
            >
              Get in touch
            </a>
          </ParallaxSection>
        </animated.div>
      </div>
    </div>
  )
}

export default Hero

