'use client'

import { ExternalLink, Globe, Shield, Users, BookOpen, Calculator, Award, MessageCircle } from 'lucide-react'

export default function Footer() {
  const stats = [
    { number: '87', label: 'Providers' },
    { number: '8', label: 'States' },
    { number: '100%', label: 'Anonymous' }
  ]

  const navigationSections = [
    {
      title: 'Navigation Hub',
      links: [
        { name: 'Course Quiz', href: 'https://cpp41419.com.au/quiz', icon: BookOpen },
        { name: 'Compare Providers', href: 'https://cpp41419.com.au/compare', icon: Users },
        { name: 'Real Estate Career Guide', href: 'https://cpp41419.com.au/career-guide', icon: Award },
        { name: 'Frequently Asked Questions', href: 'https://cpp41419.com.au/faq', icon: MessageCircle },
        { name: 'Blog & Insights', href: '/articles', icon: BookOpen }
      ]
    },
    {
      title: 'State Licensing Guides',
      links: [
        { name: 'NSW', href: 'https://cpp41419.com.au/nsw' },
        { name: 'VIC', href: 'https://cpp41419.com.au/vic' },
        { name: 'QLD', href: 'https://cpp41419.com.au/qld' },
        { name: 'WA', href: 'https://cpp41419.com.au/wa' },
        { name: 'SA', href: 'https://cpp41419.com.au/sa' },
        { name: 'TAS', href: 'https://cpp41419.com.au/tas' },
        { name: 'NT', href: 'https://cpp41419.com.au/nt' },
        { name: 'ACT', href: 'https://cpp41419.com.au/act' }
      ]
    }
  ]

  const serviceSections = [
    {
      title: 'For RTOs & Providers',
      links: [
        { name: 'RTO Services Overview', href: 'https://cpp41419.com.au/rto-services', icon: Globe },
        { name: 'Page Performance', href: 'https://cpp41419.com.au/performance', icon: Globe },
        { name: 'Performance Analytics', href: 'https://cpp41419.com.au/analytics', icon: Globe },
        { name: 'Quality Improvement', href: 'https://cpp41419.com.au/quality', icon: Shield },
        { name: 'MDPA Evaluation', href: 'https://cpp41419.com.au/mdpa', icon: Shield }
      ]
    },
    {
      title: 'For Students',
      links: [
        { name: 'Student Protection', href: 'https://cpp41419.com.au/protection', icon: Shield },
        { name: 'Anonymous Reviews', href: 'https://cpp41419.com.au/reviews', icon: Users },
        { name: 'Provider Comparison', href: 'https://cpp41419.com.au/compare', icon: Users },
        { name: 'Cost Calculator', href: 'https://cpp41419.com.au/calculator', icon: Calculator },
        { name: '🌏 International Students', href: 'https://cpp41419.com.au/international', icon: Globe }
      ]
    }
  ]

  const platformSections = [
    {
      title: 'Trust & Governance',
      links: [
        { name: 'About CPP41419', href: 'https://cpp41419.com.au/about', icon: Globe },
        { name: 'Mission & Values', href: 'https://cpp41419.com.au/mission', icon: Award },
        { name: 'Independent Review Process', href: 'https://cpp41419.com.au/review-process', icon: Shield },
        { name: 'Terms & Conditions', href: 'https://cpp41419.com.au/terms', icon: Shield },
        { name: 'Privacy Policy', href: 'https://cpp41419.com.au/privacy', icon: Shield },
        { name: 'Contact', href: 'https://cpp41419.com.au/contact', icon: MessageCircle }
      ]
    }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-xl">C</span>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold">CPP41419</h2>
              <p className="text-gray-400 text-sm">Certificate IV Real Estate Practice</p>
            </div>
          </div>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Independent evaluation platform for Australian real estate education providers. 
            Anonymous assessments, transparent comparisons, student protection.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-12 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-yellow-400">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <a 
            href="https://cpp41419.com.au"
            className="inline-flex items-center bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg transition-colors"
          >
            <Globe className="w-5 h-5 mr-2" />
            Explore Your Pathway
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>

        {/* Navigation Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Navigation Hub */}
          {navigationSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="font-semibold text-lg mb-4 text-yellow-400">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, index) => {
                  const IconComponent = (link as any).icon
                  return (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="flex items-center text-gray-300 hover:text-white transition-colors"
                      >
                        {IconComponent && <IconComponent className="w-4 h-4 mr-2" />}
                        {link.name}
                        {link.href.startsWith('http') && <ExternalLink className="w-3 h-3 ml-1" />}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Services & Solutions */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <h2 className="font-display text-2xl font-bold mb-8 text-center text-yellow-400">
            Services & Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, index) => {
                    const IconComponent = (link as any).icon
                    return (
                      <li key={index}>
                        <a 
                          href={link.href}
                          className="flex items-center text-gray-300 hover:text-white transition-colors"
                        >
                          {IconComponent && <IconComponent className="w-4 h-4 mr-2" />}
                          {link.name}
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}

            {/* Languages */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Languages</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://cpp41419.com.au/zh" 
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    🇨🇳 中文 (Chinese)
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://cpp41419.com.au/hi" 
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    🇮🇳 हिंदी (Hindi)
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://cpp41419.com.au/ar" 
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    🇸🇦 العربية (Arabic)
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Platform & Policies */}
        <div className="border-t border-gray-800 pt-12">
          <h2 className="font-display text-2xl font-bold mb-8 text-center text-yellow-400">
            Platform & Policies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="lg:col-span-2">
                <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.links.map((link, index) => {
                    const IconComponent = (link as any).icon
                    return (
                      <a 
                        key={index}
                        href={link.href}
                        className="flex items-center text-gray-300 hover:text-white transition-colors p-3 bg-gray-800 rounded-lg hover:bg-gray-700"
                      >
                        {IconComponent && <IconComponent className="w-4 h-4 mr-2" />}
                        {link.name}
                        <ExternalLink className="w-3 h-3 ml-auto" />
                      </a>
                    )
                  })}
                </div>
              </div>
            ))}
            
            {/* Mission Statement */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4 text-yellow-400">Our Mission</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Transforming real estate education through transparency, accountability, 
                and student-centered evaluation. We believe every Australian deserves 
                access to objective, comprehensive information about their education choices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-black">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 CPP41419.com.au. Independent evaluation platform. Not affiliated with any RTO.
            </div>
            <div className="flex items-center gap-6">
              <a 
                href="https://cpp41419.com.au"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Visit Main Platform
              </a>
              <a 
                href="https://cpp41419.com.au/author/simon-dodson"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Author Profile
              </a>
              <a 
                href="/articles"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                All Articles
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}