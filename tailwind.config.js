/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#2563EB",
        electric: "#2563EB",
        "electric-blue": "#2563EB",
        white: "#FFFFFF",
        black: "#111111",
        dark: "#111111",
        light: "#FFFFFF",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}