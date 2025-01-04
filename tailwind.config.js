/** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            'deckbros-primary': '#1a365d',
            'deckbros-secondary': '#2c5282',
            'deckbros-accent': '#ecc94b'
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif']
          }
        },
      },
      plugins: [],
    }
