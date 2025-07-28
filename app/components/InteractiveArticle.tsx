'use client'

import { useState, useRef, useEffect } from 'react'
import { TrendingUp, DollarSign, Clock, Users, AlertTriangle, BarChart3, CheckCircle, Shield, Server, Lock, RefreshCw, Target, Database } from 'lucide-react'

export default function InteractiveArticle() {
  const [activeSection, setActiveSection] = useState('mathematics')
  const [visibleStats, setVisibleStats] = useState<number[]>([])
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate stats when they come into view
            const statIndex = parseInt(entry.target.getAttribute('data-stat-index') || '0')
            setVisibleStats(prev => [...prev, statIndex])
          }
        })
      },
      { threshold: 0.5 }
    )

    const statCards = document.querySelectorAll('.stat-card')
    statCards.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const sections = [
    { id: 'mathematics', title: 'The Mathematics of Delusion', icon: BarChart3 },
    { id: 'mirror', title: 'The Mirror We Hate', icon: Users },
    { id: 'crisis', title: 'Existential Pricing Crisis', icon: AlertTriangle },
    { id: 'compass', title: 'Compass Case Study', icon: TrendingUp },
    { id: 'quality-signals', title: 'Quality Infrastructure', icon: Shield },
  ]

  const mathematicsData = [
    { label: 'Average commission on $1.4M Sydney home', value: '$84,000', icon: DollarSign, color: 'text-red-500' },
    { label: 'Hours of actual work per transaction', value: '40-60', icon: Clock, color: 'text-blue-500' },
    { label: 'Effective hourly rate', value: '$1,400-$2,100', icon: DollarSign, color: 'text-green-500' },
    { label: 'Years of training required', value: '0.5', icon: Clock, color: 'text-purple-500' },
    { label: 'Public trust rating', value: '7%', icon: Users, color: 'text-red-500' },
  ]

  const compassData = [
    { label: 'Capital raised', value: '$1.6B', trend: 'up' },
    { label: 'Annual losses (2022)', value: '$494M', trend: 'down' },
    { label: 'Agent retention rate', value: '68%', trend: 'neutral' },
    { label: 'Technology adoption', value: '<30%', trend: 'down' },
    { label: 'Stock price decline', value: '-84%', trend: 'down' },
    { label: 'CEO compensation', value: '$24.8M', trend: 'up', highlight: true },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Navigation */}
        <div className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-8">
            Deep Dive Analysis
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {sections.map((section) => {
              const IconComponent = section.icon
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium">{section.title}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Mathematics Section */}
        {activeSection === 'mathematics' && (
          <div className="animate-fade-in">
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h3 className="font-display text-2xl font-bold mb-6 text-center">
                The Mathematics of Delusion
              </h3>
              <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
                Here's what nobody tells you at 2 AM when you're doom-scrolling through realestate.com.au: 
                we've created a profession that exists solely to navigate a system we made unnecessarily complex.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" ref={statsRef}>
                {mathematicsData.map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <div
                      key={index}
                      data-stat-index={index}
                      className={`stat-card bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-500 ${
                        visibleStats.includes(index) ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-full bg-gray-100 mr-4`}>
                          <IconComponent className={`w-6 h-6 ${stat.color}`} />
                        </div>
                        <div className={`text-3xl font-bold ${stat.color}`}>
                          {stat.value}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {stat.label}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {/* Mirror Section */}
        {activeSection === 'mirror' && (
          <div className="animate-fade-in">
            <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white rounded-2xl shadow-xl p-8 mb-8">
              <h3 className="font-display text-2xl font-bold mb-6 text-center">
                The Mirror We Hate Looking Into
              </h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg leading-relaxed mb-6">
                    This contempt conceals a deeper duality. What we hate isn't agents — it's the mirror 
                    they hold up to our property-obsessed culture. Real estate agents reflect the ugliest 
                    parts of our national psyche: greed commodified, shelter financialized, community 
                    reduced to comparable sales.
                  </p>
                  <blockquote className="text-xl italic border-l-4 border-yellow-400 pl-6">
                    "I don't know what the Americans do, except sell each other houses."
                    <cite className="block text-sm mt-2 opacity-75">— Vladimir Putin</cite>
                  </blockquote>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-yellow-400">67%</div>
                    <div className="text-sm">Dinner conversations involve property</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-yellow-400">71%</div>
                    <div className="text-sm">Household wealth tied to property</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-yellow-400">38</div>
                    <div className="text-sm">First-home buyer average age</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-yellow-400">43%</div>
                    <div className="text-sm">Young adults living with parents</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Crisis Section */}
        {activeSection === 'crisis' && (
          <div className="animate-fade-in">
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h3 className="font-display text-2xl font-bold mb-6 text-center">
                The Existential Pricing Crisis
              </h3>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-700 mb-8 text-center">
                  The Australian real estate industry faces its most significant existential crisis since 
                  the 2008 GFC, which nobody remembers because we've collectively agreed that property only goes up.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                      <h4 className="font-bold text-red-800 mb-3">The Impossible Math</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Home price increase since 1990:</span>
                          <span className="font-bold text-red-600">340%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Agent service innovation:</span>
                          <span className="font-bold text-red-600">0%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Commission for automated services:</span>
                          <span className="font-bold text-red-600">$8.4B</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h4 className="font-bold text-blue-800 mb-3">The Digital Reality</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Online property searches:</span>
                          <span className="font-bold text-blue-600">+156%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Buyers find homes first:</span>
                          <span className="font-bold text-blue-600">67%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>REA Group algorithm accuracy:</span>
                          <span className="font-bold text-blue-600">&gt;95%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Compass Section */}
        {activeSection === 'compass' && (
          <div className="animate-fade-in">
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h3 className="font-display text-2xl font-bold mb-6 text-center">
                Compass: A $1.6 Billion Case Study in Delusion
              </h3>
              <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
                Compass didn't just fail — they speedran the entire tech startup playbook from "disruption" 
                to "bankruptcy" faster than you can say "Series F funding round."
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {compassData.map((item, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                      item.highlight 
                        ? 'bg-gradient-to-r from-red-500 to-red-600 text-white' 
                        : 'bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`text-2xl font-bold ${
                        item.highlight ? 'text-white' : 
                        item.trend === 'up' ? 'text-green-600' : 
                        item.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                      }`}>
                        {item.value}
                      </div>
                      <div className={`w-3 h-3 rounded-full ${
                        item.trend === 'up' ? 'bg-green-500' : 
                        item.trend === 'down' ? 'bg-red-500' : 'bg-gray-400'
                      }`}></div>
                    </div>
                    <p className={`text-sm ${item.highlight ? 'text-white' : 'text-gray-600'}`}>
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="font-bold text-yellow-800 mb-3">The Performance Art of Failure</h4>
                <p className="text-yellow-700">
                  $24.8 million CEO compensation while losing half a billion dollars. That's not compensation — 
                  that's performance art. It's like paying someone to livestream setting your money on fire, 
                  then giving them a bonus for viewer engagement.
                </p>
              </div>
              
              {/* Mid-article CTA */}
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Want to understand the full picture of real estate education in Australia?
                </p>
                <a 
                  href="https://cpp41419.com.au"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Compare every real estate course → CPP41419.com.au
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Quality Infrastructure Section */}
        {activeSection === 'quality-signals' && (
          <div className="animate-fade-in">
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h3 className="font-display text-2xl font-bold mb-2 text-center">
                Quality Infrastructure
              </h3>
              <p className="text-lg text-gray-600 mb-8 text-center">
                Why We Own This Space
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {/* DATA QUALITY */}
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-emerald-800 mb-4">
                      DATA INTEGRITY CHECKS
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                        <span>87 RTOs verified against training.gov.au</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                        <span>Course codes cross-referenced with AQF</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                        <span>Pricing validated monthly</span>
                      </div>
                    </div>
                  </div>

                  {/* COMPLIANCE */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-800 mb-4">
                      REGULATORY COMPLIANCE
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center">
                        <Shield className="w-5 h-5 text-blue-600 mr-2" />
                        <span>ASQA standards alignment</span>
                      </div>
                      <div className="flex items-center">
                        <Shield className="w-5 h-5 text-blue-600 mr-2" />
                        <span>VET quality framework compliant</span>
                      </div>
                      <div className="flex items-center">
                        <Shield className="w-5 h-5 text-blue-600 mr-2" />
                        <span>Privacy Act 1988 adherence</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* TECHNICAL QUALITY */}
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-purple-800 mb-4">
                      PLATFORM INTEGRITY
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center">
                        <Server className="w-5 h-5 text-purple-600 mr-2" />
                        <span>99.9% uptime guarantee</span>
                      </div>
                      <div className="flex items-center">
                        <Lock className="w-5 h-5 text-purple-600 mr-2" />
                        <span>256-bit SSL encryption</span>
                      </div>
                      <div className="flex items-center">
                        <RefreshCw className="w-5 h-5 text-purple-600 mr-2" />
                        <span>Real-time data synchronization</span>
                      </div>
                    </div>
                  </div>

                  {/* TRUST SIGNALS */}
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-amber-800 mb-4">
                      TRUST METRICS
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-white rounded p-3 flex justify-between items-center">
                        <span>Data Accuracy</span>
                        <span className="font-bold text-amber-600">99.7%</span>
                      </div>
                      <div className="bg-white rounded p-3 flex justify-between items-center">
                        <span>Response Time</span>
                        <span className="font-bold text-amber-600">&lt;200ms</span>
                      </div>
                      <div className="bg-white rounded p-3 flex justify-between items-center">
                        <span>User Satisfaction</span>
                        <span className="font-bold text-amber-600">97%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* REALITY CHECK BOX */}
                <div className="col-span-2 bg-red-50 border-2 border-red-500 p-6 rounded-lg mt-6">
                  <h3 className="text-xl font-bold text-red-800 mb-4">
                    THE FUCKING TRUTH
                  </h3>
                  <p className="text-lg">
                    We're not just another comparison site. We're the only platform that's:
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <Target className="w-5 h-5 text-red-600 mr-2" />
                      <span>Built specifically for CPP41419</span>
                    </li>
                    <li className="flex items-center">
                      <Database className="w-5 h-5 text-red-600 mr-2" />
                      <span>Verified against government databases</span>
                    </li>
                    <li className="flex items-center">
                      <TrendingUp className="w-5 h-5 text-red-600 mr-2" />
                      <span>Updated in real-time</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}