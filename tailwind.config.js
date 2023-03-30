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
        'ecobglightblack': "rgba(0, 0, 0, 0.7)",
        'ecolightgrey': '#979797',
        'herogreen': "#DFFFBE"
      },
    },

    screens: {
      'xs': '300px',
      //ekhane sm - 768px mane hocche 768px theke 1134px porjonto shob sm size mane tab theke mobile
      'sm': '768px',
      'md': '1135px',
      'lg': '1612px',
    }
  },
  plugins: [],
};
