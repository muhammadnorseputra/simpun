/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'debouce': 'bola 7s ease-out infinite'
      },
      keyframes: {
        bola: {
          '0%': {transform: 'scale(1.2) translateX(0px)'},
          '25%': {transform: 'scale(.80) translateX(30px)'},
          '50%': {transform: 'scale(1) translateX(-30px)'},
          '100%': {transform: 'scale(1.2) translateX(0px)'},
        }
      }
    },
  },
  plugins: [],
}
