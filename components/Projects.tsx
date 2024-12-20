'use client'

import Image from 'next/image'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'
import { ParallaxSection } from './ParallaxSection'

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1. This project showcases my skills in React and Next.js.",
    image: "/placeholder.svg?height=300&width=400&text=Project+1",
    link: "#"
  },
  {
    title: "Project 2",
    description: "Project 2 demonstrates my expertise in responsive design and Tailwind CSS.",
    image: "/placeholder.svg?height=300&width=400&text=Project+2",
    link: "#"
  },
  {
    title: "Project 3",
    description: "For Project 3, I built a full-stack application using Next.js and Node.js.",
    image: "/placeholder.svg?height=300&width=400&text=Project+3",
    link: "#"
  },
  {
    title: "Project 4",
    description: "Project 4 is a mobile-first web application with offline capabilities.",
    image: "/placeholder.svg?height=300&width=400&text=Project+4",
    link: "#"
  }
]

const Projects = () => {
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
    <section id="projects" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <ParallaxSection speed={5}>
          <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
        </ParallaxSection>
        <animated.div style={fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ParallaxSection key={index} speed={10 + index * 5}>
              <div
                className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-opacity duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.link}
                      className="bg-primary-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-primary-600 transition-colors"
                    >
                      View Project
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                </div>
              </div>
            </ParallaxSection>
          ))}
        </animated.div>
      </div>
    </section>
  )
}

export default Projects

