/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'serif': ['var(--font-libre-baskerville)', 'Georgia', 'serif'],
        'display': ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '2/3': '2 / 3',
        '9/16': '9 / 16',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'parallax': 'parallax 20s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        parallax: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        gradientShift: {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },
      backdropBlur: {
        '4xl': '128px',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.4)',
      },
      screens: {
        'xs': '475px',
        '3xl': '1920px',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            lineHeight: '1.7',
            fontSize: '1.125rem',
            p: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            h1: {
              fontFamily: 'var(--font-playfair)',
              fontWeight: '700',
              fontSize: '2.25em',
              marginTop: '0',
              marginBottom: '0.8888889em',
              lineHeight: '1.1111111',
            },
            h2: {
              fontFamily: 'var(--font-playfair)',
              fontWeight: '700',
              fontSize: '1.5em',
              marginTop: '2em',
              marginBottom: '1em',
              lineHeight: '1.3333333',
            },
            h3: {
              fontFamily: 'var(--font-playfair)',
              fontWeight: '600',
              fontSize: '1.25em',
              marginTop: '1.6em',
              marginBottom: '0.6em',
              lineHeight: '1.6',
            },
            blockquote: {
              fontWeight: '500',
              fontStyle: 'italic',
              color: '#374151',
              borderLeftWidth: '0.25rem',
              borderLeftColor: '#d97706',
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
              marginTop: '1.6em',
              marginBottom: '1.6em',
              paddingLeft: '1em',
            },
            code: {
              color: '#374151',
              backgroundColor: '#f3f4f6',
              paddingTop: '0.25rem',
              paddingBottom: '0.25rem',
              paddingLeft: '0.375rem',
              paddingRight: '0.375rem',
              borderRadius: '0.25rem',
              fontSize: '0.875em',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    function({ addUtilities, addComponents, theme }) {
      addUtilities({
        '.text-shadow-sm': {
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-strong': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      })
      
      addComponents({
        '.glass-effect': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.newspaper-border': {
          border: '3px double #2d3748',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-6px',
            left: '-6px',
            right: '-6px',
            bottom: '-6px',
            border: '1px solid #2d3748',
            pointerEvents: 'none',
          },
        },
        '.article-content': {
          columnCount: '2',
          columnGap: '2rem',
          columnRule: '1px solid #e2e8f0',
          '@media (max-width: 768px)': {
            columnCount: '1',
          },
          '& p': {
            marginBottom: '1rem',
            textAlign: 'justify',
            hyphens: 'auto',
            breakInside: 'avoid',
          },
          '& h2': {
            columnSpan: 'all',
            margin: '2rem 0 1rem 0',
            paddingBottom: '0.5rem',
            borderBottom: '2px solid #d97706',
          },
        },
        '.drop-cap::first-letter': {
          float: 'left',
          fontFamily: 'var(--font-playfair)',
          fontSize: '4rem',
          lineHeight: '3rem',
          paddingRight: '0.5rem',
          paddingTop: '0.25rem',
          fontWeight: '700',
          color: '#d97706',
        },
      })
    },
  ],
}