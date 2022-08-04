/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'debouce': 'bola 7s ease-out infinite',
        'bounce-y': 'bounce-smooth-y 4s ease-in-out infinite',
        'bounce-x': 'bounce-smooth-x 4s ease-out infinite'
      },
      keyframes: {
        bola: {
          '0%': {transform: 'scale(1.2) translateX(0px)'},
          '25%': {transform: 'scale(.80) translateX(30px)'},
          '50%': {transform: 'scale(1) translateX(-30px)'},
          '100%': {transform: 'scale(1.2) translateX(0px)'},
        },
        'bounce-smooth-y': {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '25%': {
            transform: 'translateY(-5px)'
          },
          '75%': {
            transform: 'translateY(5px)'
          }
        },
        'bounce-smooth-x': {
          '0%, 100%': {
            transform: 'translateX(0)'
          },
          '25%': {
            transform: 'translateX(-5px)'
          },
          '75%': {
            transform: 'translateX(5px)'
          }
        }
      }
    },
  },
  plugins: [],
}
