/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    height: {
      '128': '37rem',
    },
    extend: {
      fontFamily: {
        "Silkscreen" : ['Silkscreen', 'sans']
      },
    },
  },
  plugins: [],
}