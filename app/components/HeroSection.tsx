'use client'

import { useState, useEffect, useRef } from 'react'
import { Play, Pause, Volume2, VolumeX, ChevronDown } from 'lucide-react'

interface HeroSectionProps {
  onScrollToArticle: () => void
  isPlaying: boolean
  setIsPlaying: (playing: boolean) => void
  isMuted: boolean
  setIsMuted: (muted: boolean) => void
}

export default function HeroSection({ 
  onScrollToArticle, 
  isPlaying, 
  setIsPlaying, 
  isMuted, 
  setIsMuted 
}: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [parallaxOffset, setParallaxOffset] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return
    
    const handleScroll = () => {
      const scrolled = window.scrollY
      setParallaxOffset(scrolled * 0.5)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isClient])

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }, [isPlaying])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted
    }
  }, [isMuted])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <section className="relative h-screen overflow-hidden bg-gray-900">
      {/* Background Video */}
      <div className="absolute inset-0">
        {isClient ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            style={{ transform: `translateY(${parallaxOffset}px)` }}
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80"
          >
            <source 
              src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1&profile_id=139&oauth2_token_id=57447761" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div 
            className="w-full h-full object-cover bg-cover bg-center"
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80)',
              transform: `translateY(${parallaxOffset}px)` 
            }}
          />
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80"></div>
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full bg-repeat animate-parallax"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              transform: `translateY(${parallaxOffset * 0.2}px)`
            }}
          ></div>
        </div>
      </div>

      {/* Video Controls */}
      <div className="absolute top-6 right-6 z-20 flex gap-2">
        <button
          onClick={togglePlay}
          className="glass-effect p-3 rounded-full text-white hover:bg-white/20 transition-all duration-300"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>
        <button
          onClick={toggleMute}
          className="glass-effect p-3 rounded-full text-white hover:bg-white/20 transition-all duration-300"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white px-4 max-w-6xl mx-auto">
          
          {/* Publication Header */}
          <div className="mb-12 animate-fade-in">
            <div className="inline-block glass-effect px-8 py-4 rounded-lg mb-6">
              <h1 className="font-display text-3xl md:text-5xl font-black text-shadow-strong">
                The Real Estate Truth Tribune
              </h1>
              <div className="flex justify-center items-center gap-4 mt-3 text-sm md:text-base opacity-90">
                <span>Vol. MMXXV, No. 1</span>
                <span>•</span>
                <span>July 27, 2025</span>
                <span>•</span>
                <span className="text-yellow-400">Truth: Priceless</span>
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="font-display text-4xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight text-shadow-strong">
              Why Everyone Hates
              <br />
              <span className="text-yellow-400">Real Estate Agents</span>
            </h2>
            <h3 className="text-xl md:text-3xl font-bold mb-4 text-shadow-strong">
              The Beautiful Contradiction of Australian Property
            </h3>
          </div>

          {/* Subtitle */}
          <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed glass-effect p-6 rounded-lg">
              An evidence-based deconstruction revealing the enigma of consumer resentment versus 
              market necessity — from justified contempt to systemic dependence.
            </p>
          </div>

          {/* Author Credit */}
          <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="glass-effect p-4 rounded-lg inline-block">
              <div className="text-yellow-400 font-semibold">By Simon Dodson</div>
              <div className="text-sm opacity-90">Digital Transformation Specialist & Founder, CPP41419.com.au</div>
              <div className="text-sm opacity-75">July 27, 2025</div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="glass-effect p-6 rounded-lg">
                <div className="text-3xl md:text-4xl font-bold text-red-400">$8.4B</div>
                <div className="text-sm opacity-90">Annual Commission Extraction</div>
              </div>
              <div className="glass-effect p-6 rounded-lg">
                <div className="text-3xl md:text-4xl font-bold text-blue-400">73%</div>
                <div className="text-sm opacity-90">Question Agent Value</div>
              </div>
              <div className="glass-effect p-6 rounded-lg">
                <div className="text-3xl md:text-4xl font-bold text-green-400">7%</div>
                <div className="text-sm opacity-90">Public Trust Rating</div>
              </div>
            </div>
          </div>

          {/* Floating Keywords */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block">
            <div className="relative w-full h-full">
              <span className="absolute top-1/4 left-1/4 text-white/30 text-sm animate-pulse" style={{ animationDelay: '1s' }}>
                #PropertyTruth
              </span>
              <span className="absolute top-1/3 right-1/4 text-white/30 text-sm animate-pulse" style={{ animationDelay: '1.5s' }}>
                #MarketReality
              </span>
              <span className="absolute bottom-1/3 left-1/3 text-white/30 text-sm animate-pulse" style={{ animationDelay: '2s' }}>
                #AgentAnalysis
              </span>
              <span className="absolute bottom-1/4 right-1/3 text-white/30 text-sm animate-pulse" style={{ animationDelay: '2.5s' }}>
                #IndustryDisruption
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={onScrollToArticle}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-yellow-400 transition-colors animate-bounce z-20"
        aria-label="Scroll to article"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 opacity-75">Read the Investigation</span>
          <ChevronDown className="w-8 h-8" />
        </div>
      </button>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
      
      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-5 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      ></div>
    </section>
  )
}