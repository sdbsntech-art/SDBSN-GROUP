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
          primary: {
            DEFAULT: '#10B981',
            hover: '#059669',
            dark: '#04231A',
          },
          accent: {
            DEFAULT: '#6EE7B7',
            light: '#A7F3D0',
            cyan: '#14B8A6',
            gold: '#F59E0B',
          },
          forest: {
            bg: '#0E1B17',
            surface: '#15271F',
            elevated: '#1C332A',
            border: '#24403A',
            deep: '#08100D',
          },
          ivory: {
            DEFAULT: '#F4F1EA',
            muted: '#9DB2A8',
            dim: '#6E857B',
          },
          blue: {
            DEFAULT: '#10B981',
            hover: '#059669',
            50: '#ECFDF5',
            100: '#D1FAE5',
            200: '#A7F3D0',
            300: '#6EE7B7',
            400: '#34D399',
            500: '#10B981',
            600: '#059669',
            700: '#047857',
            800: '#065F46',
            900: '#04231A',
          },
          dark: {
            DEFAULT: '#15271F',
            50: '#F4F1EA',
            100: '#F1F5F9',
            200: '#E2E8F0',
            300: '#CBD5E1',
            400: '#9DB2A8',
            500: '#64748B',
            600: '#334155',
            700: '#24403A',
            800: '#1C332A',
            900: '#15271F',
            950: '#0E1B17',
          },
          slate: '#0E1B17',
          cyan: '#6EE7B7',
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
