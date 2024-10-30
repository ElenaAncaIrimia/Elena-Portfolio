/** @type {import('tailwindcss').Config} */
module.exports = {
  
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
    },
  },
},
  content: ["./src/**/*.{html,js}"],
  plugins: [
    plugin(({theme, addUtilities}) => {
      const neonUtilities = {}
    })
  ],
};
