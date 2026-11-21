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
        ink: {
          DEFAULT: '#0B2B2A',
          2: '#123D3A',
          dark: '#071F1E',
          light: '#174B47',
        },
        sand: {
          DEFAULT: '#F3E3C3',
          light: '#FAF3E3',
          dark: '#E2CDA2',
        },
        gold: {
          DEFAULT: '#F2B134',
          hover: '#DDA02A',
          light: '#F8C86A',
        },
        emerald: {
          DEFAULT: '#10B981',
          hover: '#059669',
          dark: '#047857',
          light: '#34D399',
        },
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
          navy: {
            DEFAULT: '#0B1B3D',
            light: '#0F2347',
            dark: '#071530',
          },
          secondary: {
            DEFAULT: '#2563EB',
            hover: '#1D4ED8',
            light: '#3B82F6',
            50: '#EFF6FF',
            100: '#DBEAFE',
          },
          surface: {
            bg: '#FFFFFF',
            subtle: '#F8FAFC',
            muted: '#F1F5F9',
            border: '#E2E8F0',
          },
          text: {
            DEFAULT: '#0B1B3D',
            muted: '#64748B',
            light: '#94A3B8',
          },
          blue: {
            DEFAULT: '#2563EB',
            hover: '#1D4ED8',
            50: '#EFF6FF',
            100: '#DBEAFE',
            200: '#BFDBFE',
            300: '#93C5FD',
            400: '#60A5FA',
            500: '#3B82F6',
            600: '#2563EB',
            700: '#1D4ED8',
            800: '#1E40AF',
            900: '#1E3A8A',
          },
          dark: {
            DEFAULT: '#0B1B3D',
            50: '#F8FAFC',
            100: '#F1F5F9',
            200: '#E2E8F0',
            300: '#CBD5E1',
            400: '#94A3B8',
            500: '#64748B',
            600: '#475569',
            700: '#334155',
            800: '#1E293B',
            900: '#0F172A',
            950: '#0B1B3D',
          },
          slate: '#0B1B3D',
          cyan: '#6EE7B7',
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Bricolage Grotesque"', '"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        heading: ['"Bricolage Grotesque"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        'elevated': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
