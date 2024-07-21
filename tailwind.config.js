/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './App.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}' ],
  theme: {
    extend: {
      colors: {
        'screenBg': '#90BCAF',
        'screenText': '#F4F4D7', 
        'itemBgDark': '#DFDFC8', 
        'itemBgLight': '#F8FEE8', 
        'buttonBg': '#F4F4D7', 
        'itemText': '#85855B',
      },
      fontfamily: {
      }
    },
  },
  plugins: [],

}

