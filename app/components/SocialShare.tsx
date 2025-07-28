'use client'

import { useState } from 'react'
import { Share2, Facebook, Twitter, Linkedin, Link2, MessageCircle, Mail, Copy, Check } from 'lucide-react'

export default function SocialShare() {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const url = typeof window !== 'undefined' ? window.location.href : ''
  const title = "Why Everyone Hates Real Estate Agents - The Real Estate Truth Tribune"
  const text = "An evidence-based investigation into Australia's $8.4 billion real estate industry and the coming transformation."

  const shareData = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(text + ' ' + url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`,
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleShare = (platform: string) => {
    if (platform === 'copy') {
      copyToClipboard()
      return
    }

    if (platform === 'native' && navigator.share) {
      navigator.share({
        title,
        text,
        url,
      }).catch(console.error)
      return
    }

    const shareUrl = shareData[platform as keyof typeof shareData]
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400')
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors text-white"
        aria-label="Share article"
      >
        <Share2 className="w-5 h-5" />
      </button>

      {isOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Share Menu */}
          <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 p-4 min-w-[280px] z-50">
            <h3 className="font-semibold text-gray-900 mb-3">Share this article</h3>
            
            <div className="grid grid-cols-2 gap-2 mb-4">
              {/* Facebook */}
              <button
                onClick={() => handleShare('facebook')}
                className="flex items-center gap-2 p-3 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span className="text-sm font-medium">Facebook</span>
              </button>

              {/* Twitter */}
              <button
                onClick={() => handleShare('twitter')}
                className="flex items-center gap-2 p-3 rounded-lg hover:bg-sky-50 text-sky-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span className="text-sm font-medium">Twitter</span>
              </button>

              {/* LinkedIn */}
              <button
                onClick={() => handleShare('linkedin')}
                className="flex items-center gap-2 p-3 rounded-lg hover:bg-blue-50 text-blue-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm font-medium">LinkedIn</span>
              </button>

              {/* WhatsApp */}
              <button
                onClick={() => handleShare('whatsapp')}
                className="flex items-center gap-2 p-3 rounded-lg hover:bg-green-50 text-green-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm font-medium">WhatsApp</span>
              </button>

              {/* Email */}
              <button
                onClick={() => handleShare('email')}
                className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-50 text-gray-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm font-medium">Email</span>
              </button>

              {/* Copy Link */}
              <button
                onClick={() => handleShare('copy')}
                className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-50 text-gray-600 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-medium text-green-600">Copied!</span>
                  </>
                ) : (
                  <>
                    <Link2 className="w-5 h-5" />
                    <span className="text-sm font-medium">Copy Link</span>
                  </>
                )}
              </button>
            </div>

            {/* Native Share (if available) */}
            {typeof navigator !== 'undefined' && typeof navigator.share === 'function' && (
              <button
                onClick={() => handleShare('native')}
                className="w-full flex items-center justify-center gap-2 p-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Share2 className="w-5 h-5" />
                <span className="text-sm font-medium">Share</span>
              </button>
            )}

            {/* URL Display */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Article URL
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={url}
                  readOnly
                  className="flex-1 text-xs bg-gray-50 border border-gray-200 rounded px-2 py-1 text-gray-600"
                />
                <button
                  onClick={copyToClipboard}
                  className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                  title="Copy URL"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}