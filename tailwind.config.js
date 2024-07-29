/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './App.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}' ],
  theme: {
    extend: {
      colors: {
        'screenBg': '#90BCAF',
        'screenText': '#F4F4D7', 
        'itemBgDark': '#DFDFC8',
        'itemBgMid': '#B4B479', 
        'itemBgLight': '#F8FEE8', 
        'buttonBg': '#F4F4D7', 
        'itemText': '#85855B',
        'homeBgLight': '#E7FCF6',
        'homeBgDark': '#CAE7DE',
        'hyperLink': '#7D8AFF',
        'redHighlight': '#CB1400', 
        'greenHighlight': '#478047',
      },
      height: {
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
      },
    },
    fontFamily: {
      'inconsolata': ['Inconsolata-SemiBold'],
      'inconsolataBold': ['Inconsolata-Bold'],
      'inconsolataLight': ['Inconsolata-Regular'],
      'fredoka': ['Fredoka-SemiBold'], 
      'fredokaBold': ['Fredoka-Bold'],
      'koreanFont': ['KoreanFont'],
    }
  },
  plugins: [],

}

