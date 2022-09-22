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
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
