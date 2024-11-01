/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class', 'class'],
  theme: {
    extend: {
      screens: {
        '2xl': '1420px'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
