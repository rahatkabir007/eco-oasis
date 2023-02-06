/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
      },
      colors: {
        'ecoblack': '#3B3B3B',
        'ecolightgreen': '#00AD7F',
        'ecogrey': '#F7F7F7',
        'ecolightblack': '#232428',
        'ecodarkgreen': '#165A3E',
        'ecodarkblue': '#2D3748',
        'ecobglightgreen': '#E6F8E8',
        'ecobglightblack': "rgba(43, 41, 41, 0.089)"
      },
    },
  },
  plugins: [],
};
