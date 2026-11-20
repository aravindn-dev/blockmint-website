/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#111111', 2: '#1B1B1B', 3: '#232323' },
        paper: { DEFAULT: '#F5F2EA', 2: '#ECE7DB' },
        text: { light: '#171717' },
        copper: { DEFAULT: '#D99A52', soft: '#E9B977', deep: '#9A5F22' },
        muted: { DEFAULT: '#A6A29C', dark: '#5E5A54' },
        line: 'rgba(255,255,255,0.12)',
        'line-dark': 'rgba(23,23,23,0.12)',
      },
      fontFamily: {
        sans: ['"Manrope Variable"', 'Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: { site: '1240px' },
      letterSpacing: { label: '0.18em' },
      borderRadius: { '4xl': '2rem' },
    },
  },
  plugins: [],
}
