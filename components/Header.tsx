'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeProvider'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          My Portfolio
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#about" className="hover:text-blue-500 transition-colors">About</Link>
          <Link href="#projects" className="hover:text-blue-500 transition-colors">Projects</Link>
          <Link href="#skills" className="hover:text-blue-500 transition-colors">Skills</Link>
          <Link href="#contact" className="hover:text-blue-500 transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
          </button>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-800 py-4">
          <Link href="#about" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">About</Link>
          <Link href="#projects" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Projects</Link>
          <Link href="#skills" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Skills</Link>
          <Link href="#contact" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Contact</Link>
        </nav>
      )}
    </header>
  )
}

export default Header

