/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        spinSlow: 'spinSlow 5s linear infinite',
        appear: 'appear 0.5s linear',
        disappear: 'disappear 0.5s linear',
      },
      keyframes: {
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        appear: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        disappear: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        }
      },
    },
  },
  plugins: [],
}

