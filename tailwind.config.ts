import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'primary': '#E0324B',
        'secondary': '#4C2A36',
        'light-black': '#1E1E1E',
        'dark-black': '#121212',
        'light-grey': '#2A2A2A'
      },
      padding: {
        'xlg': '4rem',
        'xsm': '2rem',
        'ylg': '1.5rem',
        'ysm': '1rem'
      },
      margin: {
        'xlg': '4rem',
        'xsm': '2rem',
        'ylg': '1.5rem',
        'ysm': '1rem'
      },
    },
  },
  plugins: [addVariablesForColors],
}

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
