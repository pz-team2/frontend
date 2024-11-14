/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#12496E',
        secondary: '#2EB2C2'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}