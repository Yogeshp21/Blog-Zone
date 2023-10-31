/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineClamp : {
        10 : "10",
        12 : "12",
      }

    },
  },
  variats:{
    extend : {
      lineClamp : ["hover"]
    }
  },
  plugins: [require('@tailwindcss/line-clamp')
  ],
}

