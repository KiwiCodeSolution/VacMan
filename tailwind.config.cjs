/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {},
    colors: {
      'txt-main': '#5b5b69',
      'txt-black': '#040c0c',
      'txt-white': '#ffffff',
      'txt-grey': '#d9d9d9',
      'txt-link': '#3ca4ec',
      'bg-light': '#fffdf4',
      'bg-grey': '#646464',
      'bg-black': '#040c0c',
      'btn-grey': '#d9d9d9',
      'btn-black': '#040c0c',
      'btn-light': '#fffdf4',
      'app-red': '#f28b82',
      'app-blue': '#a9e2f0',
      'app-green': '#68efac',
      'app-pink': '#f4bcdc',
      'app-smoke': '#f4f4f4',
      'app-grey': '#9c9c9c',
      'app-yellow': '#fcfca4',
      'app-mustard': '#e1e433',
      'app-orange': '#f0be6c'
    }
  },
  plugins: [],
};
