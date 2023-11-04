/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#1D9336",
        "secondary" : "#73C41D"
      }
    },
  },
  plugins: [],
}
