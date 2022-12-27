/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': "#fff",
      'white-smoke': "#EFEFEF",
      'purple-white': "#6C0FE3",

    },

    fontFamily: {
      'popins-l': ['PopinsLight'],
      'popins-m': ['PopinsMedium'],
      'popins-cb': ['PopinsBlack'],
      'popins-b': ['PopinsBold'],
      'popins-eb': ['PopinsExtraBold'],
    },

    extend: {},
  },
  plugins: [],
}
