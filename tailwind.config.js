/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#f9e8a2',
        surface: 'rgba(255,255,255,0.45)',
        'surface-2': 'rgba(255,255,255,0.25)',
        border: 'rgba(8, 24, 73, 0.08)',
        'border-2': 'rgba(8, 24, 73, 0.05)',
        'text-primary': '#081849',
        'text-muted': 'rgba(8, 24, 73, 0.65)',
        'text-hint': 'rgba(8, 24, 73, 0.40)',
        accent: '#213885',
        'accent-light': 'rgba(33,56,133,0.08)',
        'accent-dark': '#081849',
        green: '#22c55e',
        'green-light': 'rgba(34,197,94,0.15)',
        amber: '#f59e0b',
        'amber-light': 'rgba(245,158,11,0.15)',
        red: '#ef4444',
        'red-light': 'rgba(239,68,68,0.15)',
        'tag-bg': 'rgba(8, 24, 73, 0.05)',
        'tag-text': 'rgba(8, 24, 73, 0.80)',
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
        sm: '0 1px 3px rgba(8, 24, 73, 0.08), 0 1px 2px rgba(8, 24, 73, 0.04)',
        md: '0 4px 12px rgba(8, 24, 73, 0.06), 0 2px 4px rgba(8, 24, 73, 0.04)',
        glass: '0 8px 32px rgba(8, 24, 73, 0.08), 0 2px 8px rgba(8, 24, 73, 0.04)',
      },
    },
  },
  plugins: [],
}
