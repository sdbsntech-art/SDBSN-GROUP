/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            DEFAULT: '#0055FE',
            50: '#EFF6FF',
            100: '#DBEAFE',
            200: '#BFDBFE',
            300: '#93C5FD',
            400: '#60A5FA',
            500: '#0055FE',
            600: '#0047D4',
            700: '#0038A8',
            800: '#002B80',
            900: '#001E5A',
          },
          dark: {
            DEFAULT: '#0A0F1D',
            50: '#F8FAFC',
            100: '#F1F5F9',
            200: '#E2E8F0',
            300: '#CBD5E1',
            400: '#94A3B8',
            500: '#64748B',
            600: '#334155',
            700: '#1E293B',
            800: '#0F172A',
            900: '#0A0F1D',
            950: '#050811',
          },
          slate: '#0F172A',
          cyan: '#0055FE',
          accent: '#0055FE',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'card': '0 8px 30px -4px rgba(2, 6, 23, 0.6)',
        'elevated': '0 12px 35px -5px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
