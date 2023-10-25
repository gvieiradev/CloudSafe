/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin:{
        "120px": "120px",
        "600px": "600px",
      }
    },
  },
  plugins: [],
}

