/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    container: {
      padding:{
        DEFAULT: '15PX',

      }

    },
    screens:{
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1280px',
    },
    fontFamily:{
      primary: 'khand',
      secondary: 'sans-serif'
    },
    backgroundImage:{
      bg: 'url(/assets/)',
    },

    extend: {
      colors: {
        primary: {
          DEFAULT: '##ccc',
          hover: '#343e4a'
        },
        secondary: '#8E7861',
        accent: {
          DEFAULT: '#cda274',
          secondary: '#f4f0ec',
          hover: '#b88c5d',
        },
      },
    },
  },
  plugins: [],
}