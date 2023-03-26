

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {

      'md': { 'max': '800px' },
    },
    extend: {
      colors: {
        secondary: "rgb(18, 18, 18)",
        primary: "rgb(244, 244, 244)",
      },
      boxShadow: {
        'dark-bottom': '5px 6px 0px 1px',
        'hover-bottom': '2px 2px 0px 1px'
      }
    },
  },
  plugins: [],
}