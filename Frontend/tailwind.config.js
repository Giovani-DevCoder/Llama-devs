/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}" 
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], 
      },
      boxShadow: {
        'inset-custom': 'inset 4px 4px 10px rgba(0, 0, 0, 0.1), inset -4px -4px 1px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

