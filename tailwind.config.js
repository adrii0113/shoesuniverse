/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",

    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
      },
      colors:{
        'white-gold': '#ac8136',
        'black-to-gray': '#242424'
      },
    },
  },
  plugins: [],
};