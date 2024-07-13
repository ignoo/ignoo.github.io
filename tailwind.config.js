/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'custom-transition': 'cubic-bezier(1, 0, 0.75, 1.9)',
      },
      colors: {
        'custom-brown': '#C3B299',
        'custom-red': '#A3320B',
        'custom-dark': '#141414'
      },
      fontFamily: {
        anton: ["Anton", "monospace", "sans-serif"],
      },
    },
  },
  plugins: [],
}

