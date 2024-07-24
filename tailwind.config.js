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
        'homeBgLight': '#E7FCF6',
        'homeBgDark': '#CAE7DE',
      },
    },
    fontFamily: {
      'inconsolata': ['Inconsolata-SemiBold'],
      'inconsolataBold': ['Inconsolata-Bold'],
      'inconsolataLight': ['Inconsolata-Regular'],
      'fredoka': ['Fredoka-SemiBold'], 
      'fredokaBold': ['Fredoka-Bold'],
    }
  },
  plugins: [],

}

