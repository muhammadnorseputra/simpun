const defaultTheme = require("tailwindcss/defaultTheme");
const svgToDataUri = require("mini-svg-data-uri");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: "class",
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
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}