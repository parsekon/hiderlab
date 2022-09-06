const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './icons/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './TW_components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      gallery: ['Helvetica'],
    },

    extend: {
      gridTemplateColumns: {
        'custom-sidenav-layout': '272px 1fr',
      },
      transitionProperty: {
        height: 'height',
      },
      colors: {
        primaryGray: '#E5E5E5',
        white: '#FFFFFF',
        purpleLigth: '#E8E1F4',
        purplePrimary: '#311B92',
        darkPurplePrimary: '#23175E',
        darkPurpleLight: '#988DC8',
        lightGreen: '#a9f446',
        grayMain: '#f0f0f0',
      },
    },
  },
  plugins: [],
}