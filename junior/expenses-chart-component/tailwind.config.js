/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        "soft-red": "hsl(10, 79%, 65%)",
        "cream": "hsl(27, 66%, 92%)",
        "medium-brown": "hsl(28, 10%, 53%)",
        "cyan": "hsl(186, 34%, 60%)"
      }
    },
  },
  plugins: [],
}
