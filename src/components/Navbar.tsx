'use client'

import { useState, useEffect } from 'react'
import { Search, Menu, X, BookOpen, Calculator, Cpu, GitBranch, HelpCircle, GraduationCap, MessageSquare, Home, Database, Sun, Moon, Languages } from 'lucide-react'
import Link from 'next/link'

interface NavbarProps {
  onSearchClick: () => void
}

export default function Navbar({ onSearchClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [isEnglish, setIsEnglish] = useState(true)

  // Theme toggle
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)

    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  // Language toggle
  const toggleLanguage = () => {
    setIsEnglish(!isEnglish)
    // In a real app, this would update all text content
    // For now, we'll just toggle the button state
  }

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Introduction', href: '/introduction', icon: BookOpen },
    { name: 'Explore', href: '/explore', icon: Brain },
    { name: 'Background', href: '/background', icon: BookOpen },
    { name: 'Math', href: '/math', icon: Calculator },
    { name: 'Algorithm', href: '/algorithm', icon: Cpu },
    { name: 'Process', href: '/process', icon: GitBranch },
    { name: 'Resources', href: '/resources', icon: Database },
    { name: 'Quiz', href: '/quiz', icon: GraduationCap },
    { name: 'Q&A', href: '/qa', icon: MessageSquare },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/20 shadow-xl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 pulse-creative">
              <Cpu className="w-6 h-6 text-white drop-shadow-lg" />
            </div>
            <span className="font-bold text-xl gradient-text group-hover:scale-105 transition-transform duration-300">LLM MasterClass</span>
          </Link>

          {/* Creative Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 text-sm font-semibold relative group overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                <item.icon className="w-4 h-4 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Creative Controls */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/70 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 border border-white/30 hover:border-blue-200"
              title={isEnglish ? 'Switch to Chinese' : 'Switch to English'}
            >
              <Languages className="w-4 h-4" />
              <span className="hidden sm:inline text-sm font-medium">{isEnglish ? 'EN' : '中文'}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/70 text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 border border-white/30 hover:border-purple-200"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              <span className="hidden sm:inline text-sm font-medium">{isDark ? 'Light' : 'Dark'}</span>
            </button>

            {/* Search */}
            <button
              onClick={onSearchClick}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/70 text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl group border border-white/30"
            >
              <Search className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="hidden sm:inline text-sm font-medium">Search</span>
              <kbd className="hidden sm:inline px-2 py-0.5 text-xs bg-white/50 text-gray-600 rounded">⌘K</kbd>
            </button>

            {/* Mobile Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-xl bg-white/70 text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/30"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col gap-1 px-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
