'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronDown, Play, Pause, Volume2, VolumeX, Share2, Bookmark, MessageCircle, Heart } from 'lucide-react'
import HeroSection from './components/HeroSection'
import NavigationHeader from './components/NavigationHeader'
import InteractiveArticle from './components/InteractiveArticle'
import MediaGallery from './components/MediaGallery'
import SocialShare from './components/SocialShare'
import ReadingProgress from './components/ReadingProgress'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [readingProgress, setReadingProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const articleRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollTop / docHeight
      
      setReadingProgress(progress * 100)
      setIsScrolled(scrollTop > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToArticle = () => {
    articleRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ReadingProgress progress={readingProgress} />
      
      <NavigationHeader isScrolled={isScrolled} />
      
      <HeroSection 
        onScrollToArticle={scrollToArticle}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        isMuted={isMuted}
        setIsMuted={setIsMuted}
      />

      <main ref={articleRef} className="relative z-10 bg-white">
        {/* Article Metadata */}
        <div className="bg-gray-900 text-white py-8">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="text-yellow-400 font-display text-sm uppercase tracking-wider mb-2">
                  Opinion: The Parasitic Class We Created
                </div>
                <div className="text-yellow-400 font-display text-xs uppercase tracking-wider">
                  Part 1 of 5 – The Real Estate Truth Tribune Series
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  An evidence-based deconstruction revealing the enigma of consumer resentment versus market necessity
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                  <span>By Simon Dodson</span>
                  <span>•</span>
                  <span>July 27, 2025</span>
                  <span>•</span>
                  <span>15 min read</span>
                  <span>•</span>
                  <span>2,847 views</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <SocialShare />
                <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                  <Bookmark className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Summary with Rich Media */}
        <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="newspaper-border bg-white p-8 rounded-lg shadow-lg">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-center">
                Executive Summary: The $8.4 Billion Question
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">$8.4B</div>
                  <div className="text-sm text-gray-600">Annual Commission Extraction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">73%</div>
                  <div className="text-sm text-gray-600">Question Agent Value</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">67%</div>
                  <div className="text-sm text-gray-600">Find Properties First</div>
                </div>
              </div>

              <p className="text-xl leading-relaxed drop-cap">
                Australian real estate agents extract $8.4 billion annually from property transactions while 
                providing services that technology rendered obsolete a decade ago. This investigation reveals 
                how a profession built on information scarcity survives in an age of information abundance — 
                and why their extinction might hurt more than their existence.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Data Visualization */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-center mb-8">
              The Trust Deficit: A Statistical Analysis
            </h2>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Profession</th>
                      <th className="px-6 py-4 text-left font-semibold">Trust Rating</th>
                      <th className="px-6 py-4 text-left font-semibold">Annual Income</th>
                      <th className="px-6 py-4 text-left font-semibold">Barrier to Entry</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-red-50 font-semibold">
                      <td className="px-6 py-4">Real Estate Agents</td>
                      <td className="px-6 py-4 text-red-600">7%</td>
                      <td className="px-6 py-4">$49,000-$325,000</td>
                      <td className="px-6 py-4">6 months training</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Used Car Salesmen</td>
                      <td className="px-6 py-4">8%</td>
                      <td className="px-6 py-4">$45,000-$120,000</td>
                      <td className="px-6 py-4">None</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Journalists</td>
                      <td className="px-6 py-4">9%</td>
                      <td className="px-6 py-4">$48,000-$95,000</td>
                      <td className="px-6 py-4">3-year degree</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Politicians</td>
                      <td className="px-6 py-4">12%</td>
                      <td className="px-6 py-4">$211,000+</td>
                      <td className="px-6 py-4">Get elected</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Lawyers</td>
                      <td className="px-6 py-4">34%</td>
                      <td className="px-6 py-4">$85,000-$250,000</td>
                      <td className="px-6 py-4">5-year degree</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-6 py-4">Doctors</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">87%</td>
                      <td className="px-6 py-4">$150,000-$500,000</td>
                      <td className="px-6 py-4">7-year degree</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <InteractiveArticle />
        
        <MediaGallery />

        {/* Quote Section with Parallax */}
        <section className="relative py-24 bg-fixed bg-cover bg-center" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80")'
        }}>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <blockquote className="text-3xl md:text-4xl font-display font-bold text-white mb-8 leading-relaxed">
              "I don't know what the Americans do, except sell each other houses."
            </blockquote>
            <cite className="text-xl text-gray-300">— Vladimir Putin</cite>
          </div>
        </section>

        {/* Final Analysis */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="article-content">
              <h2>The Beautiful Contradiction</h2>
              
              <p>
                We don't hate real estate agents because they're expensive, incompetent, or unnecessary. 
                We hate them because they're mirrors reflecting our national sickness — the transformation 
                of shelter into speculation, community into commodity, homes into investment portfolios.
              </p>

              <p>
                Real estate agents are drug dealers, and property is Australia's designer drug of choice. 
                We're not addicted to houses — we're addicted to the dopamine hit of paper wealth. 
                Agents aren't the cause of our addiction — they're just the ones monetizing it.
              </p>

              <p className="text-xl font-semibold text-center my-8 p-6 bg-yellow-50 border-l-4 border-yellow-400">
                The traditional real estate industry has two years left. Maximum. The question isn't whether 
                you'll be part of its transformation — it's whether you'll lead it or be roadkill.
              </p>

              <h2>Action: Become the Change</h2>
              
              <p>
                Ready to change real estate from the inside? At <strong>CPP41419.com.au</strong>, we don't 
                train traditional agents. We develop property professionals for the post-disruption era.
              </p>

              <p>
                Because the best way to beat a broken system is to rebuild it with better people.
              </p>
              
              {/* End CTA */}
              <div className="mt-12 text-center">
                <div className="bg-gradient-to-r from-blue-900 to-gray-900 text-white rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">Full Platform Unlocks Friday</h3>
                  <p className="text-lg mb-6">See the live data that's changing how Australia thinks about real estate education.</p>
                  <a 
                    href="https://cpp41419.com.au/dashboard"
                    className="inline-flex items-center bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg transition-colors"
                  >
                    See the live data now → CPP41419.com.au/dashboard
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Author Bio */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-32 md:h-32 w-24 h-24 mx-auto md:mx-0 flex-shrink-0">
                  <img 
                    src="https://www.cpp41419.com.au/simon.jpg" 
                    alt="Simon Dodson" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold mb-4">About the Author</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Simon Dodson</strong> is a digital transformation strategist with an unusual breadth of experience 
                    across media, edtech, government, and real estate. Former journalist and published author of 
                    <em>Beautiful Paradox: AI</em>, he's worked with hundreds of small businesses and global realtors, 
                    from Fairfax Media to Southern Cross to Griffith University. Currently building 
                    <a href="https://cpp41419.com.au" className="text-blue-600 hover:underline">CPP41419.com.au</a>, 
                    Australia's first transparent platform for real estate licensing reform.
                  </p>
                  <p className="text-gray-600 text-sm italic">
                    He once tried to pay a real estate agent in Dogecoin. They tried to list it as "vendor finance."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Structured Data for Author */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Person",
                  "name": "Simon Dodson",
                  "url": "https://www.cpp41419.com.au/author/simon-dodson",
                  "image": "https://www.cpp41419.com.au/images/simon-dodson.jpg",
                  "jobTitle": "Digital Technologist & Founder, CPP41419.com.au",
                  "worksFor": {
                    "@type": "Organization",
                    "name": "CPP41419.com.au"
                  },
                  "sameAs": [
                    "https://www.linkedin.com/in/simondodson",
                    "https://medium.com/@simondodson"
                  ],
                  "knowsAbout": ["Digital Transformation", "AI Strategy", "Real Estate Technology"]
                })
              }}
            />
          </div>
        </section>

        {/* Featured Article Preview */}
        <section className="py-16 bg-gradient-to-r from-red-900 to-black text-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Latest Investigation
              </h2>
              <p className="text-xl text-gray-300">
                Dive deeper into Australia's property psychology
              </p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-red-800">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-red-400 font-bold text-sm uppercase tracking-wider mb-2">
                    Sunday Special Investigation
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                    The Stockholm Syndrome of Australian Property
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    A psychological excavation of Australia's property paradox — where contempt masks dependence 
                    and hatred conceals desperate need. Why we're all addicted to our captors.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                    <span>By Simon Dodson</span>
                    <span>•</span>
                    <span>15 min read</span>
                    <span>•</span>
                    <span>January 2025</span>
                  </div>
                  <a 
                    href="/spine"
                    className="inline-flex items-center bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Read Full Investigation
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80"
                    alt="Australian suburban homes"
                    className="rounded-lg shadow-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div>
                        <div className="text-lg font-bold text-red-400">7%</div>
                        <div className="text-xs text-white/80">Trust Rating</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-yellow-400">92%</div>
                        <div className="text-xs text-white/80">Will Use Again</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-green-400">$84K</div>
                        <div className="text-xs text-white/80">Avg Commission</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-blue-400">100%</div>
                        <div className="text-xs text-white/80">Cognitive Dissonance</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <Newsletter />

        {/* Tomorrow's Teaser */}
        <section className="py-12 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-2">
              Tomorrow in Part 2
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              The Mirror – Why the hatred for agents says more about us than them
            </h3>
            <p className="text-gray-300 text-lg">
              Drops July 28, 2025
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to Change Real Estate?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Join the revolution. Start your professional development for the post-disruption era.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://cpp41419.com.au" 
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg transition-colors inline-flex items-center justify-center"
              >
                Start Your Revolution
              </a>
              <a
                href="/spine"
                className="border-2 border-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-colors inline-flex items-center justify-center"
              >
                Read More Analysis
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}