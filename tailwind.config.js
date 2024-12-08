/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        grayCustom: {
          light: '#e0e0e0',
          DEFAULT: '#959595',
          dark: '#4a4a4a',
        },
      },
      backgroundImage: {
        'gray-gradient': 'linear-gradient(to right, #e0e0e0, #959595, #4a4a4a)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

