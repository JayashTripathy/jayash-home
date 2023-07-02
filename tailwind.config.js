/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:

    "./posts/**",
  ],
  theme: {
    fontFamily: {
      poppins: ["poppins", "sans-serif"],
      nunito: ["Nunito Sans", "sans-serif"],
    },

    screens: {
      md: { max: "800px" },
    },
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",

        highlighting: "rgb(112, 36, 255)",
      },
      boxShadow: {
        "dark-bottom": "5px 6px 0px 1px",
        "hover-bottom": "2px 2px 0px 1px",
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
};
