import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
    colors: {
      brand: {
        'primary-500': '#8A42DB',
        secondary: '#7DFFAF',
      },
    },
    backgroundColor: {
      brand: {
        'primary-500': '#8A42DB',
        'primary-400': '#9955E8',
        secondary: '#7DFFAF',
      },
      surface: {
        background: '#171023',
        primary: '#2C243B',
        secondary: '#413A4F',
        tertiary: '#4E4563',
      },
    },
    textColor: {
      brand: {
        secondary: '#7DFFAF',
      },
      primary: '#F5F6F6',
      secondary: '#CDD0D4',
      error: '#FF9494',
      transparent: 'transparent',
    },
    fontFamily: {
      heebo: ['var(--font-heebo)'],
      kalam: ['var(--font-kalam)'],
    },
    fontSize: {
      sm: '0.875rem',
      base: '1rem',
      md: '1.125rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '2.5rem',
    },
    lineHeight: {
      base: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '2.5rem',
      '2xl': '3.5rem',
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
