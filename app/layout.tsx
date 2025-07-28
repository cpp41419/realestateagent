import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display, Libre_Baskerville } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
})

const libreBaskerville = Libre_Baskerville({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-libre-baskerville',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'The Real Estate Truth Tribune | Investigative Property Journalism',
  description: 'An evidence-based deconstruction revealing the enigma of consumer resentment versus market necessity — from justified contempt to systemic dependence.',
  keywords: [
    'real estate',
    'property market',
    'investigative journalism',
    'property analysis',
    'real estate agents',
    'property industry',
    'market insights',
    'property truth'
  ],
  authors: [{ name: 'Simon Dodson' }],
  creator: 'The Real Estate Truth Tribune',
  publisher: 'The Real Estate Truth Tribune',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    title: 'The Real Estate Truth Tribune | Investigative Property Journalism',
    description: 'An evidence-based deconstruction revealing the enigma of consumer resentment versus market necessity.',
    siteName: 'The Real Estate Truth Tribune',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Real Estate Truth Tribune',
    description: 'Investigative property journalism with evidence-based analysis.',
  },
  robots: {
    index: true,
    follow: true,
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${libreBaskerville.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-libre-baskerville bg-gray-50 text-gray-900 antialiased">
        <div className="min-h-screen">
          {children}
        </div>
        <script src="https://unpkg.com/lenis@1.0.42/dist/lenis.min.js" async />
      </body>
    </html>
  )
}