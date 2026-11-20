/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bm: {
          black: '#000000',
          dark: '#080D16',
          card: '#101722',
          blue: {
            DEFAULT: '#0374F8',
            dark: '#0058FA',
          },
          cyan: '#00E7FB',
          green: '#A1F309',
          emerald: '#00C853',
          silver: '#D8DBE0',
          white: '#FFFFFF',
          text: '#B8C0CC',
          border: '#243449',
        },
        ink: {
          DEFAULT: '#080D16',
          2: '#101722',
          3: '#151F2E',
        },
        paper: {
          DEFAULT: '#080D16',
          2: '#101722',
        },
        text: {
          light: '#FFFFFF',
        },
        copper: {
          DEFAULT: '#00E7FB',
          soft: '#A1F309',
          deep: '#0374F8',
        },
        muted: {
          DEFAULT: '#B8C0CC',
          dark: '#8592A6',
        },
        line: '#243449',
        'line-dark': '#243449',
      },
      backgroundImage: {
        'bm-signature': 'linear-gradient(120deg, #0374F8, #00E7FB, #A1F309)',
        'bm-blue-cyan': 'linear-gradient(135deg, #0374F8, #00E7FB)',
        'bm-green-lime': 'linear-gradient(135deg, #00C853, #A1F309)',
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
