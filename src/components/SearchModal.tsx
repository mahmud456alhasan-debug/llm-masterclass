'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Search, X, BookOpen, Calculator, Cpu, GitBranch, GraduationCap, MessageSquare, Home, Database } from 'lucide-react'
import Link from 'next/link'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

interface SearchResult {
  id: string
  title: string
  snippet: string
}

interface SearchItem {
  title: string
  description: string | React.ReactElement
  icon: any
  href: string
  isApiResult?: boolean
}

// Static navigation items for quick access
const navItems: SearchItem[] = [
  { title: 'Introduction to LLMs', description: 'What are Large Language Models and why they matter', icon: BookOpen, href: '/introduction' },
  { title: 'Explore Deep Dive', description: 'Comprehensive guide to LLMs, history, and applications', icon: Brain, href: '/explore' },
  { title: 'Background Knowledge', description: 'Tokenization, embeddings, and context window', icon: BookOpen, href: '/background' },
  { title: 'Math Background', description: 'Linear algebra, probability, and softmax', icon: Calculator, href: '/math' },
  { title: 'Algorithm - Transformers', description: 'Self-attention mechanism and neural network architecture', icon: Cpu, href: '/algorithm' },
  { title: 'Process Flow', description: 'How LLMs work from input to output', icon: GitBranch, href: '/process' },
  { title: 'Resources', description: 'Models, datasets, frameworks & tools', icon: Database, href: '/resources' },
  { title: 'Quiz', description: 'Test your knowledge with 20+ questions', icon: GraduationCap, href: '/quiz' },
  { title: 'Q&A', description: 'Ask questions about LLMs', icon: MessageSquare, href: '/qa' },
  { title: 'Home', description: 'Welcome to LLM MasterClass', icon: Home, href: '/' },
]

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const [apiResults, setApiResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        if (!isOpen) {
          // This would need to be handled by parent
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Search API call
  const performSearch = async (searchQuery: string) => {
    if (!searchQuery.trim() || searchQuery.length < 2) {
      setApiResults([])
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`)
      const data = await response.json()
      setApiResults(data.results || [])
    } catch (error) {
      console.error('Search error:', error)
      setApiResults([])
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      performSearch(query)
    }, 300) // Debounce search

    return () => clearTimeout(timeoutId)
  }, [query])

  // Combine navigation items and API results
  const getFilteredNavItems = () => {
    if (!query.trim()) return navItems
    return navItems.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    )
  }

  const allResults = [...getFilteredNavItems(), ...apiResults.map(result => ({
    title: result.title,
    description: <span dangerouslySetInnerHTML={{ __html: result.snippet }} />,
    icon: BookOpen,
    href: `#${result.id}`,
    isApiResult: true
  }))]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl glass-card rounded-2xl border border-white/20 shadow-xl overflow-hidden">
        {/* Search Input */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-white/20">
          <Search className="w-5 h-5 text-gray-600" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for topics, concepts, or questions..."
            className="flex-1 bg-transparent text-gray-900 placeholder-gray-500 outline-none text-lg"
          />
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto py-2">
          {isLoading ? (
            <div className="px-6 py-8 text-center text-gray-500">
              <div className="animate-spin w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full mx-auto mb-3"></div>
              <p>Searching...</p>
            </div>
          ) : allResults.length === 0 && query.trim() ? (
            <div className="px-6 py-8 text-center text-gray-500">
              <Search className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No results found for "{query}"</p>
            </div>
          ) : (
            <div className="px-3">
              {/* Show navigation items first when no query */}
              {!query.trim() && (
                <div className="mb-4">
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Quick Access
                  </div>
                  {navItems.slice(0, 6).map((item, index) => (
                    <Link
                      key={`nav-${index}`}
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                        <item.icon className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-gray-900 font-medium">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {/* Show search results */}
              {query.trim() && allResults.length > 0 && (
                <div>
                  {allResults.map((item, index) => (
                    <Link
                      key={`result-${index}`}
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        item.isApiResult
                          ? 'bg-purple-50 group-hover:bg-purple-100'
                          : 'bg-gray-100 group-hover:bg-blue-50'
                      }`}>
                        <item.icon className={`w-5 h-5 transition-colors ${
                          item.isApiResult
                            ? 'text-purple-600 group-hover:text-purple-700'
                            : 'text-gray-600 group-hover:text-blue-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-gray-900 font-medium">{item.title}</h4>
                        <div className="text-sm text-gray-600">
                          {typeof item.description === 'string' ? item.description : item.description}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-white/20 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-4">
            <span><kbd className="px-1.5 py-0.5 bg-gray-200 rounded text-gray-700">↑↓</kbd> navigate</span>
            <span><kbd className="px-1.5 py-0.5 bg-gray-200 rounded text-gray-700">↵</kbd> select</span>
            <span><kbd className="px-1.5 py-0.5 bg-gray-200 rounded text-gray-700">esc</kbd> close</span>
          </div>
        </div>
      </div>
    </div>
  )
}
