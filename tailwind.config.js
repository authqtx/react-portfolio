/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    height: {
      128: "37rem",
      21: "10rem",
    },
    extend: {
      colors: {
        "blue-fr": "#112969",
      },
      fontFamily: {
        Silkscreen: ["Silkscreen", "sans"],
        Sora: ["Sora", "sans"],
        Lato: ["Lato", "sans"],
      },
    },
  },
};
