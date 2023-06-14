/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'editor-primary': '#1e1e1e',
        'editor-dark': '#383838',
        'editor-light': '#6a6767',
      },
    },
  },
  plugins: [],
};
