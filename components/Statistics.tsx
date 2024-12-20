'use client'

import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

const stats = [
  { label: 'Projects Completed', value: 50 },
  { label: 'Happy Clients', value: 30 },
  { label: 'Awards Won', value: 10 },
  { label: 'Years Experience', value: 5 },
]

const Statistics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl font-bold text-primary-500 mb-2">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} />
                ) : (
                  '0'
                )}
                +
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics

