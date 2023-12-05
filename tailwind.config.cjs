/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.bs.mjs"],
  theme: {
    colors: {
      'white' : "#ffffff",
      'color1': "#FF8B64",
      'color2': "#56C2E6",
      'color3': "#FF5E7D",
      'color4': "#4BCF83",
      'color5': "#7235D1",
      'color6': "#F1C75B",
    },
    fontFamily: {
      'custom': ['Rubik']
    },
    extend: {},
  },
  plugins: [],
};
