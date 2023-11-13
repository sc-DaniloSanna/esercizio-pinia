/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/assets/*.css",
    "./src/router/index.js",
    './src/**/*.vue',
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        colors: {
          red: '#ff0000',
          blue: '#0000ff',
          // ... altri colori
        },
      },
    },
  },
  plugins: [],
}

