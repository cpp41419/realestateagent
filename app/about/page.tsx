'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Award, Users, TrendingUp, BookOpen, Mail, Linkedin, Globe } from 'lucide-react'
import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'

export default function AboutPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  const achievements = [
    {
      metric: "80%",
      description: "Increase in house sales through digital transformation",
      icon: TrendingUp
    },
    {
      metric: "3,300",
      description: "Monthly leads generated (from 300 baseline)",
      icon: Users
    },
    {
      metric: "5,000+",
      description: "Realtors using tools across 5 countries",
      icon: Globe
    }
  ]

  const expertise = [
    "Digital Product Management",
    "PropTech Innovation", 
    "AI & Machine Learning Applications",
    "Technical SEO Strategy",
    "Global Digital Transformation",
    "Automated Marketing Tools",
    "Real Estate Technology",
    "Data Analytics & Performance"
  ]

  const publications = [
    {
      title: "10 Shocking Ways AI is Revolutionising Real Estate Today, Not Tomorrow",
      platform: "Medium",
      date: "October 2024",
      readTime: "7 min read",
      description: "How Artificial Intelligence is transforming the real estate industry and reshaping the role of realtors.",
      url: "https://medium.com/@simondodson.com/10-shocking-ways-ai-is-revolutionising-real-estate-today-not-tomorrow-75e28e478c21"
    },
    {
      title: "Google Web Creator Event Raises Red Flags",
      platform: "Medium", 
      date: "2024",
      readTime: "8 min read",
      description: "Small business & independent publishers face existential threats from platform consolidation.",
      url: "https://medium.com/@simondodson.com/google-web-creator-event-raises-red-flags-small-business-independent-publishers-face-existential-b91cca9c9fec"
    },
    {
      title: "Beautiful Paradox: AI; The CEO's Need-to-Know AI Playbook",
      platform: "Book",
      date: "2024",
      readTime: "Book",
      description: "A comprehensive guide for executives navigating AI implementation and digital transformation.",
      url: "#"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationHeader isScrolled={isScrolled} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 to-black text-white py-24 mt-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link 
            href="/"
            className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Articles
          </Link>
          
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-1/3">
              <img 
                src="https://www.cpp41419.com.au/simon.jpg" 
                alt="Simon Dodson" 
                className="w-48 h-48 rounded-full object-cover mx-auto md:mx-0"
              />
            </div>
            
            <div className="md:w-2/3">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Simon Dodson
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Digital Transformation Strategist & PropTech Innovation Director
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Digital transformation strategist with an unusual breadth of experience across media, 
                edtech, government, and real estate. Former journalist and published author of 
                <em>Beautiful Paradox: AI</em>, he's worked with hundreds of small businesses and global realtors, 
                from Fairfax Media to Southern Cross to Griffith University.
              </p>
              
              <div className="flex gap-4 flex-wrap">
                <a 
                  href="https://www.cpp41419.com.au/author/simon-dodson"
                  className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Author Profile
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
                <a 
                  href="https://medium.com/@simondodson.com"
                  className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Medium Articles
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
                <a 
                  href="https://cpp41419.com.au"
                  className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  CPP41419 Platform
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-12">
            Proven Impact in Real Estate Innovation
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <div key={index} className="text-center bg-gray-50 rounded-lg p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {achievement.metric}
                  </div>
                  <p className="text-gray-700">
                    {achievement.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white rounded-lg p-8 shadow-lg">
            <Award className="w-12 h-12 text-yellow-500 mr-4" />
            <div className="text-left">
              <h3 className="font-bold text-xl mb-2">Fairfax National Innovation Award</h3>
              <p className="text-gray-600">
                Recognized for spearheading digital transformations and deploying 
                global SEO strategies with resounding success in the real estate sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-12">
            Areas of Expertise
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {expertise.map((skill, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                <span className="text-sm font-medium text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-12">
            Recent Publications & Thought Leadership
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.map((publication, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                    {publication.platform}
                  </span>
                  <span className="text-sm text-gray-500">{publication.readTime}</span>
                </div>
                
                <h3 className="font-bold text-lg mb-3 line-clamp-2">
                  {publication.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {publication.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{publication.date}</span>
                  {publication.url !== "#" && (
                    <a 
                      href={publication.url}
                      className="inline-flex items-center text-blue-600 hover:text-blue-500 text-sm font-medium"
                    >
                      Read Article
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy & Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-12">
            Philosophy & Approach
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <blockquote className="text-xl italic text-center border-l-4 border-blue-600 pl-6 mb-8">
              "The most dangerous innovation isn't the one that breaks things — 
              it's the one that makes broken things work better."
            </blockquote>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-xl mb-4">Digital Transformation Reality</h3>
                <p className="text-gray-700">
                  Simon approaches digital transformation not as a buzzword, but as a disciplined 
                  methodology combining technical execution, regulatory insight, and creative strategy. 
                  His work demonstrates that disruptive potential isn't about chaos—it's about 
                  disciplined creativity and operational alignment.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-xl mb-4">AI & Innovation Paradox</h3>
                <p className="text-gray-700">
                  Author of "Beautiful Paradox: AI," Simon explores the tension between innovation 
                  and governance. He transforms AI uncertainty into structured systems while maintaining 
                  philosophical rigor, reframing governance not as a constraint but as a strategic 
                  enabler of innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Collaboration */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold mb-8">
            Let's Build the Future of Real Estate
          </h2>
          
          <p className="text-xl text-gray-300 mb-8">
            Interested in digital transformation, PropTech innovation, or AI implementation? 
            Let's explore how we can reshape industries together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://cpp41419.com.au"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg transition-colors inline-flex items-center justify-center"
            >
              <Globe className="w-5 h-5 mr-2" />
              Explore CPP41419 Platform
            </a>
            <a 
              href="https://medium.com/@simondodson.com"
              className="border-2 border-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-colors inline-flex items-center justify-center"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Read My Articles
            </a>
          </div>
        </div>
      </section>
      
      {/* Structured Data for Person/Author */}
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
      
      <Footer />
    </div>
  )
}