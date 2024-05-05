/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#E0324B',
        'secondary': '#4C2A36',
        'light-black': '#24282A'
      },
    },
  },
  plugins: [],
}

