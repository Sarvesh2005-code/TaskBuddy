/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#006D77',
        secondary: '#83C5BE',
        accent: '#E29578',
        background: '#FFDDD2',
        surface: '#EDF6F9',
        text: '#006466',
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        md: '0.5rem',
        lg: '1rem',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
      },
      transitionTimingFunction: {
        fast: '150ms ease',
        normal: '250ms ease',
      },
    },
  },
  plugins: [],
}

