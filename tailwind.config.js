/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        viking: {
          dark: 'rgb(var(--color-primary))',
          light: 'rgb(var(--color-primary) / 80%)',
          lighter: 'rgb(var(--color-primary) / 60%)',
          lightest: 'rgb(var(--color-primary) / 20%)',
        },
        blue: {
          960: "#2F327D"
        },
        grey: {
          dark: "#B2B3CF",
          lighter: "#5B5B5B",
        },
        turquoise: {
          50: "#86F6C7",
          100: "#7DF5C3",
          200: "#58F2B2",
          300: "#46F1AA",
          400: "#3CF0A5",
          500: "#33EFA0",
          600: "#44D699",
          700: "#44D699",
          800: "#4DCA95"
        }
      }
    },
  },
  plugins: [],
}

