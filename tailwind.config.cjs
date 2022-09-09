/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        limegreen: 'hsl(163, 72%, 41%)',
        brightred: 'hsl(356, 69%, 56%)',
        facebook: 'hsl(208, 92%, 53%)',
        twitter: 'hsl(203, 89%, 53%)',
        instagram: {
          start: 'hsl(37, 97%, 70%)',
          end: 'hsl(329, 70%, 58%)'
        },
        youtube: 'hsl(348, 97%, 39%)',

        toggle: {
          start: 'hsl(210, 78%, 56%)',
          end: 'hsl(146, 68%, 55%)',
          base: 'hsl(230, 22%, 74%)'
        },

        darkbluebg: 'hsl(230, 17%, 14%)',
        darkbluetop: 'hsl(232, 19%, 15%)',
        darkdesaturatedblue: 'hsl(228, 28%, 20%)',
        desaturatedblue: 'hsl(228, 34%, 66%)',

        verypalebluebg: 'hsl(225, 100%, 98%)',
        lightgrayishblue: 'hsl(227, 47%, 96%)',
        darkgrayishblue: 'hsl(228, 12%, 44%)',
        verydarkblue: 'hsl(230, 17%, 14%)',

      }
    },
  },
  plugins: [],
}
