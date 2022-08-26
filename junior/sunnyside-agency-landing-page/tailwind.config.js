/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{html,js}"
  ],
  theme: {
    extend: {
      "colors": {
        "soft-red": "hsl(7, 99%, 70%)",
        "yellow": "hsl(51, 100%, 49%)",
        "dark-desaturated-cyan": "hsl(167, 40%, 24%)",
        "dark-blue": "hsl(198, 62%, 26%)",
        "dark-moderate-cyan": "hsl(168, 34%, 41%)",
        "grayish-blue": "hsl(210, 4%, 67%)",
        "very-dark-grayish-blue": "hsl(213, 9%, 39%)"
      }
    },
  },
  plugins: [],
}
