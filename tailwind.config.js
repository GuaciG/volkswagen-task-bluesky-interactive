/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['VW Head, sans-serif']
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/new_cars-e_golf-hero-desktop.webp')"
      }
    }
  },
  plugins: [require('tailwindcss-animated')]
}
