'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock, ChevronRight, Lock } from 'lucide-react'
import NavigationHeader from '../../components/NavigationHeader'

export default function SeriesHubPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  const articles = [
    {
      part: 1,
      title: "Why Everyone Hates Real Estate Agents",
      subtitle: "The Beautiful Contradiction of Australian Property",
      date: "July 27, 2025",
      readTime: "15 min read",
      status: "published",
      href: "/",
      description: "Australian real estate agents extract $8.4 billion annually from property transactions while providing services that technology rendered obsolete a decade ago.",
      keyInsights: [
        "$8.4B annual commission extraction",
        "73% of buyers question agent value",
        "67% find properties without agents"
      ]
    },
    {
      part: 2,
      title: "The Mirror",
      subtitle: "Consumer Projection & Market Resentment",
      date: "July 28, 2025",
      readTime: "12 min read",
      status: "coming",
      href: "#",
      description: "Why the hatred for agents says more about us than them. A psychological excavation of property paradox.",
      keyInsights: [
        "71% household wealth in property",
        "38 average first-home buyer age",
        "43% young adults with parents"
      ]
    },
    {
      part: 3,
      title: "Compass Case Study",
      subtitle: "The Global Parasitic Class We Can't Kill",
      date: "July 29, 2025",
      readTime: "18 min read",
      status: "coming",
      href: "#",
      description: "How a $1.6 billion tech company proved that disrupting real estate is harder than colonizing Mars.",
      keyInsights: [
        "$494M annual losses",
        "-84% stock price decline",
        "$24.8M CEO compensation"
      ]
    },
    {
      part: 4,
      title: "Necessary Evil → Coming Revolution",
      subtitle: "The Transformation Timeline",
      date: "July 30, 2025",
      readTime: "10 min read",
      status: "coming",
      href: "#",
      description: "The forces converging to finally disrupt an industry that's resisted change for 50 years.",
      keyInsights: [
        "AI property valuation",
        "Blockchain contracts",
        "Direct buyer-seller platforms"
      ]
    },
    {
      part: 5,
      title: "Evolution or Extinction",
      subtitle: "The Future of Real Estate Licensing",
      date: "July 31, 2025",
      readTime: "20 min read",
      status: "coming",
      href: "#",
      description: "How to rebuild an industry from first principles. The blueprint for property professionals 2030.",
      keyInsights: [
        "New licensing framework",
        "Education revolution",
        "Professional standards 2.0"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationHeader isScrolled={isScrolled} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 to-black text-white py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              The Real Estate Truth Tribune Series
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              A 5-part investigation into why we hate the people who sell us the Australian Dream — 
              and why their extinction might hurt more than their existence.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-yellow-400" />
              <span>July 27-31, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-yellow-400" />
              <span>75 min total read</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 font-bold">5</span>
              <span>Articles</span>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-8">
            {articles.map((article, index) => (
              <div
                key={article.part}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  article.status === 'coming' ? 'opacity-80' : ''
                }`}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-purple-700 p-8 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-6xl font-display font-bold opacity-50">
                        {article.part}
                      </span>
                      {article.status === 'coming' && (
                        <Lock className="w-8 h-8 opacity-50" />
                      )}
                    </div>
                    <div className="text-sm opacity-75">
                      Part {article.part} of 5
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">
                          {article.title}
                        </h2>
                        <p className="text-gray-600 text-lg">
                          {article.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {article.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      {article.keyInsights.map((insight, i) => (
                        <div key={i} className="text-sm">
                          <ChevronRight className="w-4 h-4 text-blue-600 inline mr-1" />
                          {insight}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                      
                      {article.status === 'published' ? (
                        <Link
                          href={article.href}
                          className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                        >
                          Read Article
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                      ) : (
                        <div className="text-gray-500 font-medium">
                          Coming {article.date.split(' ')[1]}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Series CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to Change Real Estate?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Don't just read about the revolution. Lead it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://cpp41419.com.au" 
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg transition-colors inline-flex items-center justify-center"
            >
              Join the Revolution
            </a>
            <a
              href="https://cpp41419.com.au/dashboard"
              className="border-2 border-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-colors inline-flex items-center justify-center"
            >
              See Live Course Data
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}