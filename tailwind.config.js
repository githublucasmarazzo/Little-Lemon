/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#495E57",
        secondary: "#F4CE14",
        third: "#EE9972",
        four: "#495E57",
        weekback: "#EDEFEE",
      },
      backgroundImage: {
        dish: "url('src/components/assets/rectanlge2.svg')",
        dish2: "url('src/components/assets/re3.png')",
      },
      screens: {
        xs: "450px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
