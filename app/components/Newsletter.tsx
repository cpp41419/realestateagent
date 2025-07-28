'use client'

import { useState } from 'react'
import { Mail, Check, AlertCircle } from 'lucide-react'

interface NewsletterProps {
  theme?: 'light' | 'dark'
  className?: string
}

export default function Newsletter({ theme = 'dark', className = '' }: NewsletterProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    setStatus('loading')
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setMessage('Thank you for subscribing! Check your email for confirmation.')
      setEmail('')
    }, 1500)
  }

  const isDark = theme === 'dark'

  return (
    <section className={`py-16 ${isDark ? 'bg-gradient-to-r from-red-900 to-black text-white' : 'bg-gray-50 text-gray-900'} ${className}`}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/20 rounded-full mb-6">
            <Mail className="w-8 h-8 text-red-400" />
          </div>
          
          <h2 className={`font-display text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            The Truth Tribune Weekly
          </h2>
          
          <p className={`text-xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Get our latest investigations, market analysis, and industry insights delivered straight to your inbox. 
            No spam, just the hard truths about Australian property.
          </p>

          {status === 'success' ? (
            <div className="max-w-md mx-auto">
              <div className={`p-6 rounded-lg ${isDark ? 'bg-green-900/30 border border-green-800' : 'bg-green-50 border border-green-200'}`}>
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-green-300' : 'text-green-800'}`}>
                  Successfully Subscribed!
                </h3>
                <p className={`${isDark ? 'text-green-400' : 'text-green-700'}`}>
                  {message}
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className={`mt-4 text-sm ${isDark ? 'text-green-300 hover:text-green-200' : 'text-green-700 hover:text-green-600'} underline`}
                >
                  Subscribe another email
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      isDark 
                        ? 'bg-white/10 border-white/20 text-white placeholder-white/60 focus:bg-white/20 focus:border-white/40' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-red-500'
                    } focus:ring-2 focus:ring-red-400 focus:outline-none`}
                    disabled={status === 'loading'}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`px-8 py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                    status === 'loading' ? 'animate-pulse' : ''
                  }`}
                >
                  {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              
              {status === 'error' && (
                <div className={`mt-4 flex items-center justify-center text-sm ${isDark ? 'text-red-300' : 'text-red-600'}`}>
                  <AlertCircle className="w-4 h-4 mr-2" />
                  {message}
                </div>
              )}
            </form>
          )}

          <div className={`mt-8 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            <p>
              By subscribing, you agree to our{' '}
              <a href="/privacy" className={`${isDark ? 'text-red-300 hover:text-red-200' : 'text-red-600 hover:text-red-700'} underline`}>
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="/terms" className={`${isDark ? 'text-red-300 hover:text-red-200' : 'text-red-600 hover:text-red-700'} underline`}>
                Terms of Service
              </a>
            </p>
            <p className="mt-2">
              ✉️ Weekly insights • 📊 Exclusive data • 🎯 Industry analysis • 🚫 No spam
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}