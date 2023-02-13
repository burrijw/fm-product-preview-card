const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      green: {
        400: '#168366',
        800: '#044131',
      },
      blue: '#1a232c',
      gray: '#6b728b',
      cream: '#f4eae1',
    },
    fontFamily: {
      sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      serif: ['Fraunces', ...defaultTheme.fontFamily.serif],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '.8125rem',
      base: '0.875rem',
      lg: ['2rem', '2rem'],
    },
    extend: {
      letterSpacing: {
        overline: '5px',
      },
    },
  },
  plugins: [],
};
