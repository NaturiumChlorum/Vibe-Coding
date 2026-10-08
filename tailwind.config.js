/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#16213e',
        brand: { 50: '#eef4ff', 500: '#5b67f1', 600: '#4b50dc', 700: '#3f3db7' },
      },
      boxShadow: { card: '0 8px 30px rgba(18, 32, 66, 0.07)' },
    },
  },
  plugins: [],
}
