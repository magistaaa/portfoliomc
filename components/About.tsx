'use client'

import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { ParallaxSection } from './ParallaxSection'

const About = () => {
  const isVisible = useScrollAnimation()

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <ParallaxSection speed={5}>
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        </ParallaxSection>
        <div 
          className={`max-w-3xl mx-auto transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <ParallaxSection speed={10}>
            <p className="text-lg mb-6">
              I'm a frontend developer with a passion for creating beautiful and functional web applications. 
              With [X] years of experience in the field, I specialize in React, Next.js, and Tailwind CSS.
            </p>
          </ParallaxSection>
          <ParallaxSection speed={15}>
            <p className="text-lg mb-6">
              My goal is to build user-friendly interfaces that not only look great but also provide an 
              excellent user experience. I'm always eager to learn new technologies and improve my skills.
            </p>
          </ParallaxSection>
          <ParallaxSection speed={20}>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              and sharing my knowledge through blog posts and community events.
            </p>
          </ParallaxSection>
        </div>
      </div>
    </section>
  )
}

export default About

