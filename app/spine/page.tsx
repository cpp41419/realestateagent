'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronDown, Play, Pause, Volume2, VolumeX, Heart, MessageCircle, Share2, Bookmark, TrendingUp, AlertTriangle, Clock, Users } from 'lucide-react'

export default function SpinePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [readingProgress, setReadingProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('confession')
  const [visibleStats, setVisibleStats] = useState<number[]>([])
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

  const contradictionData = [
    { stat: "92%", claim: "Claim they'd sell privately 'next time'", reality: "('I'll never use an agent again')" },
    { stat: "94%", claim: "Use an agent anyway", reality: "('But just this once...')" },
    { stat: "87%", claim: "Recommend their agent to friends", reality: "(Enabling the cycle)" },
    { stat: "78%", claim: "Report feeling 'lost' without agent guidance", reality: "(Learned helplessness)" },
    { stat: "100%", claim: "Cognitive dissonance achievement unlocked", reality: "(Peak Australian property psychology)" }
  ]

  const globalComparison = [
    { country: "🇦🇺 Australia (Sydney)", multiple: "13.8x", commission: "2.5-3%", ownership: "67%", deposit: "10.2" },
    { country: "🇺🇸 USA (National)", multiple: "5.2x", commission: "5-6%", ownership: "65%", deposit: "4.1" },
    { country: "🇬🇧 UK (London)", multiple: "8.4x", commission: "1-3%", ownership: "63%", deposit: "7.8" },
    { country: "🇩🇪 Germany", multiple: "4.8x", commission: "3-7%", ownership: "51%", deposit: "3.2" },
    { country: "🇯🇵 Japan", multiple: "4.1x", commission: "3%", ownership: "61%", deposit: "3.8" },
    { country: "🇸🇬 Singapore", multiple: "4.6x", commission: "1-2%", ownership: "91%", deposit: "2.9" },
    { country: "🇳🇱 Netherlands", multiple: "4.9x", commission: "0.5-1.5%", ownership: "69%", deposit: "3.7" }
  ]

  const manipulationPlaybook = [
    { phrase: "Priced to sell", translation: "Priced at what vendor's cocaine dealer suggested" },
    { phrase: "Motivated vendor", translation: "Divorce proceedings commenced" },
    { phrase: "Renovation potential", translation: "Structural integrity questionable" },
    { phrase: "Character home", translation: "Asbestos museum" },
    { phrase: "Investment opportunity", translation: "You'll lose money slower here" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Reading Progress */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200">
        <div 
          className="h-full bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-150 ease-out"
          style={{ width: `${Math.min(readingProgress, 100)}%` }}
        />
      </div>

      {/* Navigation Header */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-xl shadow-sm border-b border-gray-100' 
          : 'bg-gradient-to-b from-black/50 to-transparent'
      }`}>
        <nav className="max-w-6xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className={`font-display font-black text-lg transition-all duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white text-shadow-strong'
              }`}>
                The Australian Property Truth
              </h1>
              <div className={`hidden sm:block ml-3 text-xs font-medium transition-colors duration-300 ${
                isScrolled ? 'text-gray-500' : 'text-white/80'
              }`}>
                Sunday Special Investigation
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className={`p-2.5 rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? 'hover:bg-gray-100 text-gray-600' 
                  : 'hover:bg-white/10 text-white/80 backdrop-blur-sm'
              }`}>
                <Share2 className="w-4 h-4" />
              </button>
              <button className={`p-2.5 rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? 'hover:bg-gray-100 text-gray-600' 
                  : 'hover:bg-white/10 text-white/80 backdrop-blur-sm'
              }`}>
                <Bookmark className="w-4 h-4" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden bg-gray-900">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80"
            alt="Australian suburban homes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white px-4 max-w-6xl mx-auto">
            
            {/* Publication Header */}
            <div className="mb-8">
              <div className="inline-block glass-effect px-6 py-3 rounded-lg mb-4">
                <div className="text-yellow-400 font-bold text-sm uppercase tracking-wider">Sunday Edition</div>
                <div className="text-xs opacity-90">January 2025 • Special Investigation</div>
              </div>
            </div>

            {/* Main Headline */}
            <div className="mb-8">
              <h1 className="font-display text-3xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-shadow-strong">
                The Stockholm Syndrome
                <br />
                <span className="text-red-400">of Australian Property</span>
              </h1>
              <h2 className="text-lg md:text-2xl font-bold mb-6 text-shadow-strong max-w-4xl mx-auto">
                Why We're All Addicted to Our Captors: A psychological excavation of Australia's property paradox — 
                where contempt masks dependence and hatred conceals desperate need
              </h2>
            </div>

            {/* Author & Stats */}
            <div className="mb-8">
              <div className="glass-effect p-4 rounded-lg inline-block mb-6">
                <div className="text-white font-semibold">By Simon Dodson</div>
                <div className="text-sm opacity-90">15 min read • January 2025</div>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="glass-effect p-4 rounded-lg">
                  <div className="text-2xl font-bold text-red-400">7%</div>
                  <div className="text-xs opacity-90">Trust Rating</div>
                </div>
                <div className="glass-effect p-4 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400">$84K</div>
                  <div className="text-xs opacity-90">Avg Commission</div>
                </div>
                <div className="glass-effect p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-400">$2,100</div>
                  <div className="text-xs opacity-90">Per Hour Rate</div>
                </div>
                <div className="glass-effect p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">0.5</div>
                  <div className="text-xs opacity-90">Years Training</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToArticle}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-yellow-400 transition-colors animate-bounce z-20"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2 opacity-75">Read the Investigation</span>
            <ChevronDown className="w-8 h-8" />
          </div>
        </button>
      </section>

      {/* Main Article */}
      <main ref={articleRef} className="relative z-10 bg-white">
        
        {/* Article Intro */}
        <section className="py-16 bg-gradient-to-b from-red-50 to-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-red-500">
              <h2 className="font-display text-3xl font-bold mb-6 text-red-900">
                The Confession Nobody Wants to Make
              </h2>
              <div className="text-lg leading-relaxed drop-cap">
                <p className="mb-6">
                  Here's what happens at 3 AM when the Xanax wears off and you're staring at your mortgage statement: 
                  you realize you don't hate your real estate agent. You hate that you need them. You hate that they're 
                  right about everything you're wrong about. You hate that they're the adult supervision in your property tantrum.
                </p>
                <p className="mb-6">
                  Real estate agents aren't the problem. They're the symptom of a problem so fundamentally Australian 
                  that we've made it our national identity. We've turned shelter into sport, homes into hedge funds, 
                  and then we blame the referee for the rules we wrote.
                </p>
                <p className="text-xl font-semibold text-red-800 bg-red-50 p-4 rounded-lg">
                  The data reveals our beautiful contradiction — we're trapped in a cycle of resentment and dependency 
                  so profound it would make relationship therapists rich if they could bottle it and sell it at Bunnings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Core Contradiction */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                The Uncomfortable Mathematics of Our Addiction
              </h2>
              <p className="text-xl text-gray-600">
                These aren't just statistics — they're psychological profiles of a nation in denial about its property dependency.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h3 className="font-display text-2xl font-bold mb-6 text-center">The Core Contradiction</h3>
              <div className="space-y-6">
                {contradictionData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-200"
                  >
                    <div className="flex items-center">
                      <div className="text-3xl font-bold text-red-600 mr-4">{item.stat}</div>
                      <div>
                        <div className="font-semibold text-gray-900">{item.claim}</div>
                        <div className="text-sm text-gray-600 italic">{item.reality}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mathematical Reality */}
            <div className="bg-gradient-to-r from-gray-900 to-black text-white rounded-2xl shadow-xl p-8">
              <h3 className="font-display text-2xl font-bold mb-6 text-center">
                The Mathematical Reality of Australian Real Estate
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">$84,000</div>
                  <div className="text-sm text-gray-300">Average commission (Sydney $1.4M home)</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">40-60</div>
                  <div className="text-sm text-gray-300">Hours of actual work per transaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">$2,100</div>
                  <div className="text-sm text-gray-300">Effective hourly rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">0.5</div>
                  <div className="text-sm text-gray-300">Years of training required</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">7%</div>
                  <div className="text-sm text-gray-300">Public trust rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Comparison */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                How the World Laughs at Australia
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                While Australians treat property like a religious experience, the rest of the developed world watches 
                our housing hysteria with the same morbid fascination reserved for reality TV train wrecks.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Country</th>
                      <th className="px-6 py-4 text-left font-semibold">Median Multiple*</th>
                      <th className="px-6 py-4 text-left font-semibold">Agent Commission</th>
                      <th className="px-6 py-4 text-left font-semibold">Homeownership Rate</th>
                      <th className="px-6 py-4 text-left font-semibold">Years to Save Deposit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {globalComparison.map((country, index) => (
                      <tr 
                        key={index}
                        className={index === 0 ? "bg-red-50 font-semibold" : ""}
                      >
                        <td className="px-6 py-4">{country.country}</td>
                        <td className={`px-6 py-4 ${index === 0 ? 'text-red-600' : ''}`}>{country.multiple}</td>
                        <td className="px-6 py-4">{country.commission}</td>
                        <td className="px-6 py-4">{country.ownership}</td>
                        <td className={`px-6 py-4 ${index === 0 ? 'text-red-600' : ''}`}>{country.deposit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 text-sm text-gray-600">
              <p>*Median Multiple = Median house price ÷ Median household income. Data: Demographia International Housing Affordability Survey 2024</p>
            </div>
          </div>
        </section>

        {/* The Theatre of Emotional Violence */}
        <section className="py-16 bg-gradient-to-b from-purple-50 to-indigo-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="font-display text-3xl font-bold mb-6 text-center">
                The Theatre of Emotional Violence
              </h2>
              <div className="text-lg leading-relaxed mb-8">
                <p className="mb-6">
                  Every property inspection is performance art. The agent is Hamlet, you're Ophelia, and the vendor 
                  is the ghost demanding vengeance through unrealistic price expectations.
                </p>
                <p className="mb-6">
                  Watch closely next Saturday. See how agents position themselves between you and the only bathroom. 
                  Notice how they mention "another couple" who "just left" and were "very interested." Observe the 
                  careful choreography of scarcity.
                </p>
              </div>

              <h3 className="font-display text-xl font-bold mb-4">The Manipulation Playbook Decoded</h3>
              <div className="space-y-4">
                {manipulationPlaybook.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div className="font-semibold text-purple-800">"{item.phrase}"</div>
                    <div className="text-gray-600">→ {item.translation}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-purple-50 border border-purple-200 rounded-lg">
                <p className="text-purple-800 font-medium">
                  But here's the thing: we know it's bullshit. They know we know it's bullshit. We know they know 
                  we know it's bullshit. And yet we all show up next Saturday, playing our parts in this suburban kabuki.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="relative py-24 bg-fixed bg-cover bg-center" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80")'
        }}>
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <blockquote className="text-2xl md:text-3xl font-display font-bold text-white mb-6 leading-relaxed">
              "I don't know what the Americans do, except sell each other houses."
            </blockquote>
            <cite className="text-xl text-gray-300">
              — Vladimir Putin
            </cite>
          </div>
        </section>

        {/* The Beautiful Contradiction */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="article-content">
              <h2>The Beautiful Contradiction</h2>
              
              <p>
                We don't hate real estate agents because they're parasites. We hate them because they're mirrors. 
                They reflect our greed, our fear, our desperate need to believe that debt equals wealth.
              </p>

              <p>
                They're the professional face of our collective delusion.
              </p>

              <p>
                Real estate agents aren't selling houses. They're selling absolution. They're the professional 
                permission slip for your financial masochism. They're the human shield between you and the 
                crushing weight of your own decisions.
              </p>

              <p className="text-xl font-semibold text-center my-8 p-6 bg-red-50 border-l-4 border-red-400">
                This isn't Stockholm Syndrome. Stockholm Syndrome implies initial resistance. We walked into this cage, 
                locked it ourselves, and then paid someone 2.5% to hold the key.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-red-900 to-black text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to Break the Cycle?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              At CPP41419.com.au, we're not training the next generation of real estate agents. 
              We're developing property professionals who understand the psychology, not just the paperwork.
            </p>
            <p className="text-lg mb-8 text-gray-400">
              Because the future belongs to those who can navigate both spreadsheets and mental breakdowns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://cpp41419.com.au" 
                className="bg-red-600 hover:bg-red-500 text-white font-bold py-4 px-8 rounded-lg transition-colors inline-flex items-center justify-center"
              >
                Explore Real Estate Training →
              </a>
            </div>
          </div>
        </section>

        {/* Author Bio */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-display text-2xl font-bold mb-4">About the Author</h3>
              <p className="text-gray-700 mb-4">
                <strong>Simon Dodson</strong> is a digital transformation strategist with an unusual breadth of experience 
                across media, edtech, government, and real estate. Former journalist and published author of 
                <em>Beautiful Paradox: AI</em>, he's worked with hundreds of small businesses and global realtors, 
                from Fairfax Media to Southern Cross to Griffith University. Currently building 
                <a href="https://cpp41419.com.au" className="text-blue-600 hover:underline">CPP41419.com.au</a>, 
                Australia's first transparent platform for real estate licensing reform.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-red-600">12</div>
                  <div className="text-xs text-gray-600">Therapy sessions during property purchase</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">7</div>
                  <div className="text-xs text-gray-600">Real estate agents who blocked him</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">47</div>
                  <div className="text-xs text-gray-600">Properties he didn't buy</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">$2.3M</div>
                  <div className="text-xs text-gray-600">Money saved by existential crisis</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">7%</div>
                  <div className="text-xs text-gray-600">Current trust in real estate agents</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="font-display text-xl font-bold mb-2">The Australian Property Truth</h3>
            <p className="text-gray-400 mb-4">
              Independent journalism for Australia's property-obsessed nation. Because someone has to ask the uncomfortable questions.
            </p>
            <div className="text-sm text-gray-500">
              © 2025 The Australian Property Truth. All rights reserved.
              <br />
              Built with uncomfortable truths and excessive caffeine.
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}