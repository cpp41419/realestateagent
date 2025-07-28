'use client'

import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, Maximize2, X } from 'lucide-react'

interface MediaItem {
  id: string
  type: 'image' | 'video' | 'chart'
  src: string
  title: string
  caption: string
  credit?: string
}

const mediaItems: MediaItem[] = [
  {
    id: '1',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80',
    title: 'The Real Estate Landscape',
    caption: 'Modern real estate offices have become symbols of an industry in transition, caught between traditional practices and digital disruption.',
    credit: 'Photo by Unsplash'
  },
  {
    id: '2',
    type: 'video',
    src: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1&profile_id=139&oauth2_token_id=57447761',
    title: 'Agent Response Time Analysis',
    caption: 'Exclusive footage showing the reality behind agent response times and customer service claims.',
    credit: 'Video investigation by The Truth Tribune'
  },
  {
    id: '3',
    type: 'chart',
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80',
    title: 'Commission Growth vs Service Innovation',
    caption: 'This interactive chart shows the stark disconnect between rising commissions and actual service improvements over the past decade.',
    credit: 'Data analysis by Truth Tribune Research'
  },
  {
    id: '4',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80',
    title: 'The Digital Disruption',
    caption: 'PropTech companies are reshaping how properties are bought, sold, and managed, challenging traditional agent models.',
    credit: 'Photo by Unsplash'
  },
  {
    id: '5',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80',
    title: 'Market Analysis Dashboard',
    caption: 'Real-time property market data that was once exclusively available to agents is now accessible to all consumers.',
    credit: 'Screenshot: Property data platforms'
  }
]

export default function MediaGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const currentItem = mediaItems[currentIndex]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length)
  }

  const openLightbox = () => {
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
    setIsPlaying(false)
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <>
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Visual Investigation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore the evidence through our multimedia investigation into Australia's real estate industry
            </p>
          </div>

          {/* Main Gallery */}
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
            {/* Media Container */}
            <div className="relative aspect-video bg-gray-800">
              {currentItem.type === 'video' ? (
                <div className="relative w-full h-full">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    poster={currentItem.src.replace('.mp4', '-poster.jpg')}
                    muted={isMuted}
                    loop
                  >
                    <source src={currentItem.src} type="video/mp4" />
                  </video>
                  
                  {/* Video Controls */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={togglePlay}
                      className="bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-300"
                    >
                      {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
                    </button>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <button
                      onClick={toggleMute}
                      className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
                    >
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </button>
                    <button
                      onClick={openLightbox}
                      className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
                    >
                      <Maximize2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-full group cursor-pointer" onClick={openLightbox}>
                  <img
                    src={currentItem.src}
                    alt={currentItem.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <button className="opacity-0 group-hover:opacity-100 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300">
                      <Maximize2 className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Media Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="font-display text-xl font-bold mb-2">{currentItem.title}</h3>
              <p className="text-gray-300 mb-2">{currentItem.caption}</p>
              {currentItem.credit && (
                <p className="text-sm text-gray-400">{currentItem.credit}</p>
              )}
            </div>

            {/* Slide Indicator */}
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {mediaItems.length}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-8 gap-4 overflow-x-auto pb-4">
            {mediaItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 w-20 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentIndex 
                    ? 'border-yellow-400 ring-2 ring-yellow-400/50' 
                    : 'border-gray-600 hover:border-gray-400'
                }`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="w-4 h-4 text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="relative max-w-6xl max-h-full">
            {currentItem.type === 'video' ? (
              <video
                ref={videoRef}
                className="max-w-full max-h-full"
                controls
                autoPlay
                muted={isMuted}
              >
                <source src={currentItem.src} type="video/mp4" />
              </video>
            ) : (
              <img
                src={currentItem.src}
                alt={currentItem.title}
                className="max-w-full max-h-full object-contain"
              />
            )}
            
            {/* Lightbox Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="font-display text-2xl font-bold mb-2">{currentItem.title}</h3>
              <p className="text-gray-300 mb-2">{currentItem.caption}</p>
              {currentItem.credit && (
                <p className="text-sm text-gray-400">{currentItem.credit}</p>
              )}
            </div>
          </div>
          
          {/* Lightbox Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-300"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all duration-300"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </>
  )
}