/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{html,js}"
  ],
  safelist: [
    'font-bold'
  ],
  theme: {
    extend: {
      colors: {
        "soft-red": "#F47C57"
      }
    },
  },
  plugins: [],
}
