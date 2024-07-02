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
          lighter: 'rgb(var(--color-primary) / 20%)',
        },
        grey: {
          dark: "#B2B3CF",
          lighter: "#B2B3CF / 20%",
        }
      }
    },
  },
  plugins: [],
}

