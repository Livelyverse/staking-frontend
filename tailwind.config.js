/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      'white-smoke': '#EFEFEF',
      'purple-white': '#6C0FE3',
      'purple-dark': '#6800ED',
      mischka: '#B1B2B7',
      LightGray: '#D3D3D3',
      'desert-storm': '#F8F8F6',
      gray85 : "#D9D9D9",
      grayGold: "#806600"
    },

    fontFamily: {
      'popins-l': ['PopinsLight'],
      'popins-m': ['PopinsMedium'],
      'popins-cb': ['PopinsBlack'],
      'popins-b': ['PopinsBold'],
      'popins-eb': ['PopinsExtraBold'],
      'roboto-r': ['RobotoRegular'],
      'roboto-l': ['RobotoLight'],
      'roboto-m': ['RobotoMedium'],
      'roboto-b': ['RobotoBold'],
    },

    extend: {},
  },
  plugins: [],
};
