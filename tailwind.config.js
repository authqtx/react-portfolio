/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    height: {
      128: "37rem",
      21: "10rem",
    },
    extend: {
      fontSize: {
        "20xl": "6.6rem",
      },
      colors: {
        "blue-fr": "#112969",
        "pink-fr": "#fcc1f3",
        "idk": "#9c9da3",
      },
      fontFamily: {
        Silkscreen: ["Silkscreen", "sans"],
        Sora: ["Sora", "sans"],
        Lato: ["Lato", "sans"],
        GrapeNuts: ["GrapeNuts", "sans"],
        Inter: ["Inter", "sans"],
        Satoshi: ["Satoshi", "sans"],
        HankenGrotesk: ["HankenGrotesk", "sans"],
      },
      margin: {
        128: "28rem",
      },
      blur: {
        xz: '3px',
      }
    },
  },
};
