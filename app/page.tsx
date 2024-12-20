import dynamic from 'next/dynamic'
import Header from './components/Header'
import Hero from './components/Hero'
import Statistics from './components/Statistics'

const About = dynamic(() => import('./components/About'), { ssr: false })
const Projects = dynamic(() => import('./components/Projects'), { ssr: false })
const Skills = dynamic(() => import('./components/Skills'), { ssr: false })
const Contact = dynamic(() => import('./components/Contact'), { ssr: false })
const Footer = dynamic(() => import('./components/Footer'), { ssr: false })

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Statistics />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

