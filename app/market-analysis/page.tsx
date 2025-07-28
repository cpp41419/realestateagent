'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function MarketAnalysisPage() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Counter animation function
    const animateCounter = (element: HTMLElement) => {
      const target = parseInt(element.getAttribute('data-target') || '0');
      const increment = target / 100;
      let current = 0;
      
      const updateCounter = () => {
        if (current < target) {
          current += increment;
          if (target >= 1000) {
            element.textContent = '$' + Math.ceil(current).toLocaleString();
          } else {
            element.textContent = Math.ceil(current).toString();
          }
          setTimeout(updateCounter, 20);
        } else {
          if (target >= 1000) {
            element.textContent = '$' + target.toLocaleString();
          } else {
            element.textContent = target.toString();
          }
        }
      };
      
      setTimeout(updateCounter, 500);
    };

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target as HTMLElement);
          counterObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    document.querySelectorAll('.counter').forEach(counter => {
      counterObserver.observe(counter);
    });

    return () => {
      observer.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-red-600 z-50 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-lg border-b-4 border-red-600 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-6 bg-green-800 rounded-sm"></div>
              <h1 className="font-display text-2xl md:text-3xl font-black text-red-600">
                The Australian Property Truth
              </h1>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600 dark:text-gray-400">SUNDAY EDITION</div>
              <div className="text-lg font-bold">JANUARY 2025</div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Breadcrumb */}
      <nav className="bg-gray-50 dark:bg-gray-800 py-3 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-red-600">Index</Link> 
            <span className="mx-2">→</span> 
            <span className="text-red-600 font-semibold">Market Analysis</span>
            <span className="mx-2">→</span> 
            <Link href="/defense" className="hover:text-red-600 opacity-50">The Defense (Coming)</Link>
          </div>
        </div>
      </nav>

      {/* Contextual Bridge */}
      <section className="bg-gradient-to-r from-red-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-red-600">
            <h2 className="font-display text-xl font-black text-red-600 mb-3">From Hatred to Hard Data</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Having exposed the structural flaws and cultural resentment driving our collective hatred of real estate agents, 
              we now turn to the mathematical realities that sustain this dysfunctional relationship. The following market analysis 
              unpacks the $8.4 billion commission economy, international comparisons that shame us, and the economic forces that 
              make agent dependence inevitable — even as we despise it.
            </p>
            <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 italic">
              This data-driven examination sets the stage for our final piece: understanding why, despite everything revealed here, 
              agents remain indispensable to Australia&apos;s property ecosystem.
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-gradient-to-r from-blue-900 via-transparent to-blue-900" style={{
            backgroundImage: `
              linear-gradient(45deg, #012169 25%, transparent 25%),
              linear-gradient(-45deg, #012169 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, #012169 75%),
              linear-gradient(-45deg, transparent 75%, #012169 75%)
            `,
            backgroundSize: '4px 4px',
            backgroundPosition: '0 0, 0 2px, 2px -2px, -2px 0px'
          }} />
        </div>
        <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-red-600 text-white px-6 py-2 text-sm font-bold mb-6 transform -rotate-1">
              MARKET ANALYSIS
            </div>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-gray-100 mb-6 leading-tight">
              The Stockholm Syndrome of <br />
              <span className="text-red-600">Australian Property</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-serif max-w-4xl mx-auto mb-8">
              Why We&apos;re All Addicted to Our Captors: A psychological excavation of Australia&apos;s property paradox — where contempt masks dependence and hatred conceals desperate need
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600 dark:text-gray-400">
              <span>By <strong>Simon Dodson</strong></span>
              <span>•</span>
              <span>15 min read</span>
              <span>•</span>
              <span>January 2025</span>
            </div>
          </div>

          {/* Key Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
            <div className="text-center fade-in opacity-0 transform translate-y-8 transition-all duration-700">
              <div className="counter text-3xl md:text-4xl font-black text-red-600 font-display" data-target="7">0</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">% Trust Rating</div>
            </div>
            <div className="text-center fade-in opacity-0 transform translate-y-8 transition-all duration-700">
              <div className="counter text-3xl md:text-4xl font-black text-yellow-500 font-display" data-target="84000">$0</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Avg Commission</div>
            </div>
            <div className="text-center fade-in opacity-0 transform translate-y-8 transition-all duration-700">
              <div className="counter text-3xl md:text-4xl font-black text-purple-600 font-display" data-target="2100">$0</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Per Hour Rate</div>
            </div>
            <div className="text-center fade-in opacity-0 transform translate-y-8 transition-all duration-700">
              <div className="counter text-3xl md:text-4xl font-black text-green-700 font-display" data-target="0.5">0</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Years Training</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Article */}
      <main className="max-w-5xl mx-auto px-6 md:px-8 py-16">
        {/* The Confession Nobody Wants to Make */}
        <section className="fade-in opacity-0 transform translate-y-8 transition-all duration-700 mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-black text-red-600 mb-8">The Confession Nobody Wants to Make</h2>
          <div className="md:columns-2 md:gap-12 md:column-rule md:column-rule-gray-300 dark:md:column-rule-gray-600 text-lg leading-relaxed text-justify">
            <p className="drop-cap first-letter:float-left first-letter:font-display first-letter:text-8xl first-letter:leading-none first-letter:pr-3 first-letter:pt-1 first-letter:font-black first-letter:text-red-600">
              Here&apos;s what happens at 3 AM when the Xanax wears off and you&apos;re staring at your mortgage statement: you realize you don&apos;t hate your real estate agent. You hate that you need them. You hate that they&apos;re right about everything you&apos;re wrong about. You hate that they&apos;re the adult supervision in your property tantrum.
            </p>
            
            <p>
              Real estate agents aren&apos;t the problem. They&apos;re the symptom of a problem so fundamentally Australian that we&apos;ve made it our national identity. We&apos;ve turned shelter into sport, homes into hedge funds, and then we blame the referee for the rules we wrote.
            </p>
          </div>
        </section>

        {/* The Uncomfortable Mathematics */}
        <section className="fade-in opacity-0 transform translate-y-8 transition-all duration-700 mb-16">
          <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg">
            <h3 className="font-display text-2xl font-black text-red-600 mb-6 text-center">The Uncomfortable Mathematics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
              <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
                <div className="text-3xl font-black text-red-600">92%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">claim they&apos;d sell privately &quot;next time&quot;</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
                <div className="text-3xl font-black text-yellow-500">94%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">use an agent anyway</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
                <div className="text-3xl font-black text-purple-600">87%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">recommend their agent to friends</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
                <div className="text-3xl font-black text-green-600">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">cognitive dissonance achievement unlocked</div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Statistics Table */}
        <section className="fade-in opacity-0 transform translate-y-8 transition-all duration-700 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-red-600 text-white px-6 py-4">
              <h3 className="text-xl font-bold">The Mathematical Reality of Australian Real Estate</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                  <span>Average commission (Sydney $1.4M home):</span>
                  <span className="font-bold text-red-600">$84,000</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                  <span>Hours of actual work per transaction:</span>
                  <span className="font-bold">40-60</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                  <span>Effective hourly rate:</span>
                  <span className="font-bold text-yellow-500">$1,400-$2,100</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                  <span>Years of training required:</span>
                  <span className="font-bold">0.5</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                  <span>Public trust rating:</span>
                  <span className="font-bold text-red-600">7%</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                  <span>Below used car salesmen at:</span>
                  <span className="font-bold">8%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Callout */}
        <section className="fade-in opacity-0 transform translate-y-8 transition-all duration-700 mb-16">
          <div className="border-l-4 border-red-600 bg-gradient-to-r from-red-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg relative">
            <div className="absolute top-0 left-4 text-6xl text-red-600 opacity-30 font-display">&quot;</div>
            <blockquote className="text-xl md:text-2xl font-serif italic text-center leading-relaxed pl-8">
              &quot;I don&apos;t know what the Americans do, except sell each other houses.&quot;
            </blockquote>
            <cite className="block text-center mt-4 text-gray-600 dark:text-gray-400">
              — Vladimir Putin
            </cite>
          </div>
        </section>

        <div className="h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent my-16 max-w-xs mx-auto"></div>

        {/* International Comparison */}
        <section className="fade-in opacity-0 transform translate-y-8 transition-all duration-700 mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-black text-red-600 mb-8">How the World Laughs at Australia</h2>
          <div className="md:columns-2 md:gap-12 md:column-rule md:column-rule-gray-300 dark:md:column-rule-gray-600 text-lg leading-relaxed text-justify mb-8">
            <p>While Australians treat property like a religious experience, the rest of the developed world watches our housing hysteria with the same morbid fascination reserved for reality TV train wrecks. We&apos;ve become the Florida Man of global real estate — simultaneously entertaining and deeply concerning.</p>
            
            <p>Here&apos;s what hurts: every metric that makes Australian property &quot;successful&quot; makes Australian society measurably worse. We&apos;ve optimized for wealth extraction over wealth creation, speculation over shelter, and FOMO over fundamentals.</p>
          </div>

          {/* International Comparison Table */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="bg-red-600 text-white px-6 py-4">
              <h3 className="text-xl font-bold">Global Reality Check: How Australia Stacks Up</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold">Country</th>
                    <th className="px-4 py-3 text-right font-bold">Median Multiple*</th>
                    <th className="px-4 py-3 text-right font-bold">Agent Commission</th>
                    <th className="px-4 py-3 text-right font-bold">Homeownership Rate</th>
                    <th className="px-4 py-3 text-right font-bold">Years to Save Deposit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="bg-red-50 dark:bg-red-900/20">
                    <td className="px-4 py-3 font-bold text-red-600">🇦🇺 Australia (Sydney)</td>
                    <td className="px-4 py-3 text-right font-bold text-red-600">13.8x</td>
                    <td className="px-4 py-3 text-right font-bold text-red-600">2.5-3%</td>
                    <td className="px-4 py-3 text-right">67%</td>
                    <td className="px-4 py-3 text-right font-bold text-red-600">10.2</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">🇺🇸 USA (National)</td>
                    <td className="px-4 py-3 text-right">5.2x</td>
                    <td className="px-4 py-3 text-right">5-6%</td>
                    <td className="px-4 py-3 text-right">65%</td>
                    <td className="px-4 py-3 text-right">4.1</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <td className="px-4 py-3">🇬🇧 UK (London)</td>
                    <td className="px-4 py-3 text-right">8.4x</td>
                    <td className="px-4 py-3 text-right">1-3%</td>
                    <td className="px-4 py-3 text-right">63%</td>
                    <td className="px-4 py-3 text-right">7.8</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">🇩🇪 Germany</td>
                    <td className="px-4 py-3 text-right">4.8x</td>
                    <td className="px-4 py-3 text-right">3-7%</td>
                    <td className="px-4 py-3 text-right">51%</td>
                    <td className="px-4 py-3 text-right">3.2</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <td className="px-4 py-3">🇯🇵 Japan</td>
                    <td className="px-4 py-3 text-right">4.1x</td>
                    <td className="px-4 py-3 text-right">3%</td>
                    <td className="px-4 py-3 text-right">61%</td>
                    <td className="px-4 py-3 text-right">3.8</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">🇸🇬 Singapore</td>
                    <td className="px-4 py-3 text-right">4.6x</td>
                    <td className="px-4 py-3 text-right">1-2%</td>
                    <td className="px-4 py-3 text-right">91%</td>
                    <td className="px-4 py-3 text-right">2.9</td>
                  </tr>
                  <tr className="bg-green-50 dark:bg-green-900/20">
                    <td className="px-4 py-3">🇳🇱 Netherlands</td>
                    <td className="px-4 py-3 text-right">4.9x</td>
                    <td className="px-4 py-3 text-right font-bold text-green-600">0.5-1.5%</td>
                    <td className="px-4 py-3 text-right">69%</td>
                    <td className="px-4 py-3 text-right">3.7</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-3 bg-gray-50 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-400">
              *Median Multiple = Median house price ÷ Median household income. Data: Demographia International Housing Affordability Survey 2024
            </div>
          </div>

          <div className="md:columns-2 md:gap-12 md:column-rule md:column-rule-gray-300 dark:md:column-rule-gray-600 text-lg leading-relaxed text-justify">
            <p>The Netherlands caps agent fees at 1.5% and has better housing outcomes. Singapore achieves 91% homeownership without turning property into a casino. Germany treats renting as a legitimate lifestyle choice, not a character flaw.</p>
            
            <p>Meanwhile, Australia has convinced itself that paying more for everything makes us successful. It&apos;s like believing that expensive wine tastes better because it&apos;s expensive, or that private health insurance is better because you pay for it twice.</p>
            
            <p>The international data reveals our beautiful contradiction: we&apos;ve created the most expensive housing market on Earth while convincing ourselves it&apos;s a sign of prosperity. It&apos;s like being proud of having the most expensive bread in the world while people queue at food banks.</p>
          </div>
        </section>

        {/* The Beautiful Contradiction */}
        <section className="fade-in opacity-0 transform translate-y-8 transition-all duration-700 mb-16">
          <div className="bg-gradient-to-br from-yellow-100 via-yellow-50 to-white dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="font-display text-3xl md:text-4xl font-black text-red-600 mb-6 text-center">The Beautiful Contradiction</h2>
            <div className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
              <p className="mb-4">We don&apos;t hate real estate agents because they&apos;re parasites. We hate them because they&apos;re mirrors. They reflect our greed, our fear, our desperate need to believe that debt equals wealth.</p>
              <p className="font-bold text-xl text-red-600">They&apos;re the professional face of our collective delusion.</p>
            </div>
          </div>
        </section>

        {/* Bridge to Part C */}
        <section className="fade-in opacity-0 transform translate-y-8 transition-all duration-700 mb-16">
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-8 rounded-xl">
            <h2 className="font-display text-2xl md:text-3xl font-black mb-4 text-center">The Data Demands a Defense</h2>
            <p className="text-lg mb-4 text-center opacity-90">This analysis exposes the mathematical contradictions and international embarrassments of Australia&apos;s agent-dependent property system. Yet 94% of us still use agents, despite 7% trust levels.</p>
            <p className="text-sm text-center opacity-75 mb-6">Something deeper than market failure explains this paradox. Something that requires examining what agents actually provide beyond the spreadsheets and cynicism.</p>
            <div className="text-center">
              <Link href="/defense" className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                Read Part III: The Defense →
              </Link>
            </div>
          </div>
        </section>

        {/* Author Bio */}
        <section className="fade-in opacity-0 transform translate-y-8 transition-all duration-700 mt-16 pt-8 border-t border-gray-300 dark:border-gray-700">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">About the Author</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>Simon Dodson</strong> is a digital transformation strategist with an unusual breadth of experience 
              across media, edtech, government, and real estate. Former journalist and published author of 
              <em>Beautiful Paradox: AI</em>, he's worked with hundreds of small businesses and global realtors, 
              from Fairfax Media to Southern Cross to Griffith University. Currently building 
              <a href="https://cpp41419.com.au" className="text-blue-600 hover:underline">CPP41419.com.au</a>, 
              Australia's first transparent platform for real estate licensing reform.
            </p>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-4 text-xs">
              <div><strong>Therapy sessions during property purchase:</strong> 12</div>
              <div><strong>Real estate agents who blocked him:</strong> 7</div>
              <div><strong>Properties he didn&apos;t buy:</strong> 47</div>
              <div><strong>Money saved by existential crisis:</strong> $2.3M</div>
              <div><strong>Current trust in real estate agents:</strong> Still 7%</div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
          <h3 className="font-display text-2xl font-bold mb-4">The Australian Property Truth</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Independent journalism for Australia&apos;s property-obsessed nation. 
            Because someone has to ask the uncomfortable questions.
          </p>
          <div className="text-sm text-gray-500">
            © 2025 The Australian Property Truth. All rights reserved.
            <br />
            <span className="text-xs">Built with uncomfortable truths and excessive caffeine.</span>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .fade-in.visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
}