'use client'

import { useState } from 'react'
import { Calendar, Clock, Eye, ArrowRight, Filter, Search } from 'lucide-react'
import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'

interface Article {
  id: string
  title: string
  excerpt: string
  author: string
  publishDate: string
  readTime: string
  views: number
  category: string
  image: string
  slug: string
}

const realArticles: Article[] = [
  {
    id: '1',
    title: 'The Digital House of Cards: How Compass Real Estate\'s Tech-Forward Brokerage Model Reveals Deeper Issues',
    excerpt: 'An op-ed dissecting the tensions between tech ambition and industry realities in the real estate sector.',
    author: 'Simon Dodson',
    publishDate: '2024-04-05',
    readTime: '8 min',
    views: 32,
    category: 'Opinion',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
    slug: 'https://medium.com/@simondodson.com/the-digital-house-of-cards'
  },
  {
    id: '2',
    title: '10 Shocking Ways AI is Revolutionising Real Estate Today, Not Tomorrow',
    excerpt: 'How Artificial Intelligence is transforming the real estate industry and reshaping the role of realtors.',
    author: 'Simon Dodson',
    publishDate: '2024-10-24',
    readTime: '7 min',
    views: 89,
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=600&q=80',
    slug: 'https://medium.com/@simondodson.com/10-shocking-ways-ai-is-revolutionising-real-estate-today-not-tomorrow-75e28e478c21'
  },
  {
    id: '3',
    title: 'In Essence: Big VC Tech Money Has Greatly Misunderstood Real Estate',
    excerpt: 'A critical analysis of how venture capital and tech investors have fundamentally misunderstood the real estate industry.',
    author: 'Simon Dodson',
    publishDate: '2024-04-01',
    readTime: '6 min',
    views: 17,
    category: 'Analysis',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80',
    slug: 'https://medium.com/@simondodson.com'
  },
  {
    id: '4',
    title: 'Wouldn\'t it be nice if prop tech vc\'s stop telling real estate how to sell houses… God only knows.',
    excerpt: 'A frank commentary on the disconnect between PropTech venture capitalists and real estate professionals.',
    author: 'Simon Dodson',
    publishDate: '2024-05-28',
    readTime: '5 min',
    views: 37,
    category: 'Opinion',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=600&q=80',
    slug: 'https://medium.com/@simondodson.com'
  },
  {
    id: '5',
    title: 'EXCLUSIVE: The Worst of Australian Real Estate\'s Dirty Secrets Exposed',
    excerpt: 'PART 1: Confronting Secrets of Australian Real Estate: What Your Agent Won\'t Tell You.',
    author: 'Simon Dodson',
    publishDate: '2024-01-26',
    readTime: '12 min',
    views: 11,
    category: 'Investigation',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=600&q=80',
    slug: 'https://medium.com/@simondodson.com'
  },
  {
    id: '6',
    title: 'THE SILENT KILLER: ONE MANS UNINTENTIONAL SURGICAL DISMANTLING OF MARKETING\'S BLOATED CORPSE',
    excerpt: 'An unflinching analysis of the book that\'s sending shockwaves through the marketing establishment.',
    author: 'Simon Dodson',
    publishDate: '2024-04-16',
    readTime: '10 min',
    views: 36,
    category: 'Analysis',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80',
    slug: 'https://medium.com/@simondodson.com'
  },
  {
    id: '7',
    title: 'Study: Search is shifting, in New AI-Powered Landscape by Technical Heavy SEO',
    excerpt: 'The technical SEO landscape is undergoing rapid evolution as AI reshapes how search engines evaluate and rank content.',
    author: 'Simon Dodson',
    publishDate: '2024-03-25',
    readTime: '7 min',
    views: 23,
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    slug: 'https://medium.com/@simondodson.com'
  },
  {
    id: '8',
    title: 'Controlled Chaos: The Beautiful Contradiction of AI Marketing Governance',
    excerpt: 'When Companies Want Innovation, they mean slightly exactly the same as what we have now.',
    author: 'Simon Dodson',
    publishDate: '2024-04-26',
    readTime: '9 min',
    views: 47,
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80',
    slug: 'https://medium.com/@simondodson.com'
  }
]

const categories = ['All', 'Opinion', 'Investigation', 'Analysis', 'Technology']

export default function ArticlesPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredArticles = realArticles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationHeader isScrolled={isScrolled} />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-r from-gray-900 to-red-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center py-16">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              All Articles
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Deep investigations into Australia's property market, from systemic dysfunction to digital disruption
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent w-full md:w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="font-display text-xl font-bold mb-3 line-clamp-2 hover:text-red-600 transition-colors">
                    <a href={article.slug}>
                      {article.title}
                    </a>
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(article.publishDate).toLocaleDateString('en-AU', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {article.views.toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">
                      By {article.author}
                    </span>
                    <a
                      href={article.slug}
                      className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-sm transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="text-gray-400 text-6xl mb-4">📰</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600">
                  Try adjusting your filters or search terms to find what you're looking for.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-red-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Stay Informed
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Get our latest investigations and analysis delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-red-400 focus:outline-none"
            />
            <button className="bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}