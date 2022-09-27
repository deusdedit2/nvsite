/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#0097DA',
          700: '#068bf9'
        },
        green: {
          500: '#009CA4'
        }
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      boxShadow: {
        // container: '0 16px 24px 2px rgb(0 0 0 / 14%), 0 6px 30px 5px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%)'
        container: '0px 0px 29px 8px rgba(0,0,0,.12)'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
