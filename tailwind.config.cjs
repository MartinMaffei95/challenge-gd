/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: {
          100: '#B0D6E4',
          200: '#91C6D9',
          300: '#62AEC9',
          400: '#3C91AF',
          500: '#36829E',
          600: '#337A94',
          700: '#2B677D',
          800: '#173844',
          900: '#10262E',
        },
      },
    },
  },
  plugins: [],
};
