import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Professional Navy Blue Primary
        'navy-primary': '#0A1628',
        'navy-secondary': '#0F1F3A',
        'navy-tertiary': '#162850',
        'navy-light': '#1E3A5F',
        
        // Clean White/Light Gray
        'white-primary': '#FFFFFF',
        'white-secondary': '#F8F9FA',
        'white-tertiary': '#E9ECEF',
        'gray-light': '#DEE2E6',
        'gray-medium': '#ADB5BD',
        'gray-dark': '#6C757D',
        
        // Professional Accent (Muted Gold)
        'gold-primary': '#C9A227',
        'gold-secondary': '#D4AF37',
        'gold-light': '#E5C158',
        'gold-subtle': 'rgba(201, 162, 39, 0.1)',
        'gold-faint': 'rgba(201, 162, 39, 0.05)',
        
        // Text Colors
        'text-primary': '#1A1A1A',
        'text-secondary': '#4A4A4A',
        'text-muted': '#6B7280',
        
        // UI Elements
        'shadow-subtle': 'rgba(0, 0, 0, 0.08)',
        'shadow-medium': 'rgba(0, 0, 0, 0.12)',
        'shadow-strong': 'rgba(0, 0, 0, 0.16)',
        
        // Border Colors
        'border-light': '#E5E7EB',
        'border-medium': '#D1D5DB',
        
        // Legacy colors for compatibility
        'charcoal-base': '#0D0F0E',
        'charcoal-950': '#0D0F0E',
        'charcoal-900': '#141716',
        'charcoal-800': '#1E2320',
        'charcoal-700': '#2A2F2C',
        'charcoal-600': '#3A3F3C',
        'charcoal-500': '#6B7280',
        'charcoal-400': '#9CA3AF',
        'charcoal-300': '#D1D5DB',
        'charcoal-200': '#E5E7EB',
        'text-on-dark': 'rgba(255, 255, 255, 0.88)',
        'text-on-dark-muted': 'rgba(255, 255, 255, 0.72)',
        'text-on-dark-subtle': 'rgba(255, 255, 255, 0.55)',
        'text-subtle': 'rgba(26, 26, 26, 0.6)',
        'emerald-primary': '#0D9488',
        'emerald-accent': '#0F766E',
        'emerald-glow': '#2DD4BF',
        'emerald-subtle': 'rgba(13, 148, 136, 0.12)',
        'emerald-faint': 'rgba(13, 148, 136, 0.04)',
        'off-white': '#F5F7F6',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Playfair Display', 'serif'],
      },
      letterSpacing: {
        'tracking-tighter': '-0.05em',
        'tracking-tight': '-0.025em',
        'tracking-wide': '0.15em',
        'tracking-wider': '0.2em',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(0, 168, 120, 0.3)',
        'glow-strong': '0 0 60px rgba(0, 200, 140, 0.4)',
        'card': '0 20px 40px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 30px 60px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
export default config
