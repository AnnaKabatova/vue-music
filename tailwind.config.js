/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [],
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx']
}
