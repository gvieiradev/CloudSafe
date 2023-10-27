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
        "-150px":"-150px"
      },
      height:{
        "380px": "380px",
        "15.8rem":"15.8rem",
        "50rem":"50rem",
      },
      width:{
        "85%":"85%",
        "180px":"180px",
        "50rem":"50rem",
      },
    },
  },
  plugins: [],
}

