'use client'

import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 88 },
  { name: "TypeScript", level: 80 },
  { name: "React", level: 85 },
  { name: "Next.js", level: 82 },
  { name: "Tailwind CSS", level: 88 },
  { name: "Node.js", level: 75 },
  { name: "Git", level: 85 },
  { name: "Responsive Design", level: 90 }
]

const Skills = () => {
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
    <section id="skills" ref={ref} className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">My Skills</h2>
        <animated.div style={fadeIn} className="max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-lg font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                <span className="text-lg font-medium text-primary-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <animated.div
                  className="bg-primary-500 h-2.5 rounded-full"
                  style={{
                    width: inView ? `${skill.level}%` : '0%',
                    config: { duration: 1000, delay: index * 100 },
                  }}
                ></animated.div>
              </div>
            </div>
          ))}
        </animated.div>
      </div>
    </section>
  )
}

export default Skills

