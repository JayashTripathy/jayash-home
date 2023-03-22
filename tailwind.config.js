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
        primary: "rgb(18, 18, 18)",
        secondary: "rgb(244, 244, 244)",
      },
      boxShadow: {
        'dark-bottom': '5px 6px 0px 1px rgba(0,0,0,0.94);',
        'hover-shadow': '0px 0px 0px 0px rgba(0,0,0,0.94);'
      }
    },
  },
  plugins: [],
}