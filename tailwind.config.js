/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'graphite-black': '#1B1B1B',
        'tungsten-gray': '#3C3C3C',
        'titanium-silver': '#B0B0B0',
        'molten-copper': '#B55A3A',
      },
      fontFamily: {
        'heading': ['Inter', 'sans-serif'],
        'body': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}

