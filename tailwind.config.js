/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#081849',
        surface: 'rgba(255,255,255,0.10)',
        'surface-2': 'rgba(255,255,255,0.05)',
        border: 'rgba(255,255,255,0.15)',
        'border-2': 'rgba(255,255,255,0.10)',
        'text-primary': '#ffffff',
        'text-muted': 'rgba(255,255,255,0.65)',
        'text-hint': 'rgba(255,255,255,0.40)',
        accent: '#213885',
        'accent-light': 'rgba(33,56,133,0.15)',
        'accent-dark': '#081849',
        green: '#22c55e',
        'green-light': 'rgba(34,197,94,0.15)',
        amber: '#f59e0b',
        'amber-light': 'rgba(245,158,11,0.15)',
        red: '#ef4444',
        'red-light': 'rgba(239,68,68,0.15)',
        'tag-bg': 'rgba(255,255,255,0.10)',
        'tag-text': 'rgba(255,255,255,0.80)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '10px',
        lg: '16px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(0,0,0,0.2), 0 1px 2px rgba(0,0,0,0.15)',
        md: '0 4px 12px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2)',
        glass: '0 8px 32px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
}
