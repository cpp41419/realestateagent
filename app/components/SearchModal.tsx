'use client'

import { useState, useEffect } from 'react'
import { Search, X, Clock, ArrowRight } from 'lucide-react'

interface SearchResult {
  id: string
  title: string
  excerpt: string
  category: string
  url: string
  publishDate: string
}

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

const mockSearchResults: SearchResult[] = [
  {
    id: '1',
    title: 'Why Everyone Hates Real Estate Agents',
    excerpt: 'An evidence-based deconstruction revealing the enigma of consumer resentment versus market necessity.',
    category: 'Opinion',
    url: '/',
    publishDate: '2024-12-15'
  },
  {
    id: '2',
    title: 'The Stockholm Syndrome of Australian Property',
    excerpt: 'A psychological excavation of Australia\'s property paradox.',
    category: 'Investigation',
    url: '/spine',
    publishDate: '2025-01-15'
  },
  {
    id: '3',
    title: 'The $8.4 Billion Commission Extraction Machine',
    excerpt: 'Breaking down the mathematics of modern real estate commissions.',
    category: 'Analysis',
    url: '/analysis/commission-extraction',
    publishDate: '2024-11-28'
  }
]

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    if (query.length > 2) {
      setIsLoading(true)
      // Simulate API call
      setTimeout(() => {
        const filtered = mockSearchResults.filter(
          result =>
            result.title.toLowerCase().includes(query.toLowerCase()) ||
            result.excerpt.toLowerCase().includes(query.toLowerCase())
        )
        setResults(filtered)
        setIsLoading(false)
      }, 300)
    } else {
      setResults([])
      setIsLoading(false)
    }
  }, [query])

  const handleClose = () => {
    setQuery('')
    setResults([])
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative min-h-screen flex items-start justify-center p-4 pt-16">
        <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center p-6 border-b border-gray-200">
            <Search className="w-6 h-6 text-gray-400 mr-4" />
            <input
              type="text"
              placeholder="Search articles, investigations, and analysis..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 text-lg bg-transparent focus:outline-none placeholder-gray-500"
              autoFocus
            />
            <button
              onClick={handleClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto">
            {query.length === 0 && (
              <div className="p-8 text-center">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Search Our Investigations
                </h3>
                <p className="text-gray-600">
                  Find articles about real estate, property market analysis, and industry investigations.
                </p>
              </div>
            )}

            {query.length > 0 && query.length <= 2 && (
              <div className="p-8 text-center text-gray-600">
                Type at least 3 characters to search...
              </div>
            )}

            {isLoading && (
              <div className="p-8 text-center">
                <div className="animate-spin w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full mx-auto"></div>
                <p className="text-gray-600 mt-4">Searching...</p>
              </div>
            )}

            {!isLoading && query.length > 2 && results.length === 0 && (
              <div className="p-8 text-center">
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No results found
                </h3>
                <p className="text-gray-600">
                  Try different keywords or browse our <a href="/articles" className="text-red-600 hover:underline">articles page</a>.
                </p>
              </div>
            )}

            {!isLoading && results.length > 0 && (
              <div className="divide-y divide-gray-100">
                {results.map((result) => (
                  <a
                    key={result.id}
                    href={result.url}
                    onClick={handleClose}
                    className="block p-6 hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center mb-2">
                          <span className="inline-block px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded mr-3">
                            {result.category}
                          </span>
                          <span className="text-sm text-gray-500">
                            {new Date(result.publishDate).toLocaleDateString('en-AU', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors mb-2 line-clamp-1">
                          {result.title}
                        </h3>
                        <p className="text-gray-600 line-clamp-2">
                          {result.excerpt}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors ml-4 flex-shrink-0" />
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {results.length > 0 && (
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>{results.length} result{results.length !== 1 ? 's' : ''} found</span>
                <a
                  href="/articles"
                  onClick={handleClose}
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  View all articles →
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}