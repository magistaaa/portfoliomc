'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './components/ThemeProvider'
import Background from './components/Background'
import TransitionWrapper from './components/TransitionWrapper'
import { ParallaxProvider } from './components/ParallaxProvider'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    document.body.className = `${inter.className} bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100`
  }, [])

  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <ThemeProvider>
          <ParallaxProvider>
            <Background />
            <TransitionWrapper>
              {children}
            </TransitionWrapper>
          </ParallaxProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

