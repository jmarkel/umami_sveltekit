/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.svelte'],
  content: ['./src/**/*.{html,js,svelte}'],
  theme: {
    extend: {},
    colors: {
      'umami': {
        DEFAULT: '#fbf5ee',
      },
    },
  },
  plugins: [],
}
