'use client'

import { useState } from 'react'
import { Menu, X, Search, MoreHorizontal } from 'lucide-react'
import SearchModal from './SearchModal'
import ThemeToggle from './ThemeToggle'

interface NavigationHeaderProps {
  isScrolled: boolean
}

export default function NavigationHeader({ isScrolled }: NavigationHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const openSearch = () => {
    setIsSearchOpen(true)
  }

  const closeSearch = () => {
    setIsSearchOpen(false)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-xl shadow-sm border-b border-gray-100' 
          : 'bg-gradient-to-b from-black/30 to-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className={`font-display font-black text-lg md:text-xl transition-all duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white text-shadow-strong'
            }`}>
              Truth Tribune
            </h1>
            <div className={`hidden sm:block ml-3 text-xs font-medium transition-colors duration-300 ${
              isScrolled ? 'text-gray-500' : 'text-white/80'
            }`}>
              Real Estate Investigation
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center space-x-8">
              <a 
                href="/articles" 
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-gray-900' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                Articles
              </a>
              <a 
                href="#analysis" 
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-gray-900' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                Analysis
              </a>
              <a 
                href="#investigation" 
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-gray-900' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                Investigation
              </a>
              <a 
                href="#data" 
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-gray-900' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                Data
              </a>
              <a 
                href="/spine" 
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-red-700 hover:text-red-900' 
                    : 'text-red-300 hover:text-red-100'
                }`}
              >
                Psychology Report
              </a>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-2">
            {/* Search Button */}
            <button 
              onClick={openSearch}
              className={`p-2.5 rounded-lg transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'hover:bg-gray-100 text-gray-600 hover:text-gray-900' 
                  : 'hover:bg-white/10 text-white/80 hover:text-white backdrop-blur-sm'
              }`}
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Theme Toggle */}
            <div className={`${isScrolled ? '' : 'opacity-80'}`}>
              <ThemeToggle />
            </div>

            {/* More Options */}
            <button 
              className={`hidden md:flex p-2.5 rounded-lg transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'hover:bg-gray-100 text-gray-600 hover:text-gray-900' 
                  : 'hover:bg-white/10 text-white/80 hover:text-white backdrop-blur-sm'
              }`}
              aria-label="More options"
            >
              <MoreHorizontal className="w-4 h-4" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`lg:hidden p-2.5 rounded-lg transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'hover:bg-gray-100 text-gray-600 hover:text-gray-900' 
                  : 'hover:bg-white/10 text-white/80 hover:text-white backdrop-blur-sm'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className={`py-4 border-t transition-colors duration-300 ${
            isScrolled ? 'border-gray-200' : 'border-white/20'
          }`}>
            <div className="flex flex-col space-y-4">
              <a 
                href="/articles" 
                className={`text-sm font-medium transition-all duration-300 hover:translate-x-2 ${
                  isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Articles
              </a>
              <a 
                href="#analysis" 
                className={`text-sm font-medium transition-all duration-300 hover:translate-x-2 ${
                  isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Analysis
              </a>
              <a 
                href="#investigation" 
                className={`text-sm font-medium transition-all duration-300 hover:translate-x-2 ${
                  isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Investigation
              </a>
              <a 
                href="#data" 
                className={`text-sm font-medium transition-all duration-300 hover:translate-x-2 ${
                  isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Data
              </a>
              <a 
                href="/spine" 
                className={`text-sm font-medium transition-all duration-300 hover:translate-x-2 ${
                  isScrolled ? 'text-red-700 hover:text-red-900' : 'text-red-300 hover:text-red-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Psychology Report
              </a>
              
              {/* Mobile Divider and Share Options */}
              <div className={`pt-4 mt-4 border-t transition-colors duration-300 ${
                isScrolled ? 'border-gray-200' : 'border-white/20'
              }`}>
                <div className="flex items-center space-x-4">
                  <span className={`text-xs font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-gray-500' : 'text-white/60'
                  }`}>
                    Share Article
                  </span>
                  <div className="flex items-center space-x-2">
                    <button 
                      className={`p-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                        isScrolled 
                          ? 'hover:bg-gray-100 text-gray-600' 
                          : 'hover:bg-white/10 text-white/80 backdrop-blur-sm'
                      }`}
                      aria-label="Share on social media"
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      <SearchModal isOpen={isSearchOpen} onClose={closeSearch} />
    </header>
  )
}