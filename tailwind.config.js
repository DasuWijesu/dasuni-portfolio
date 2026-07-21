/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0a192f",
        card: "#112240",
        accent: "#3b82f6",
      },
    },
  },
  plugins: [],
}