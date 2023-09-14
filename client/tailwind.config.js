/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({addComponents, addUtilities, e, config}) {
        addComponents({
            /* Hide scrollbar for Chrome, Safari and Opera */
            '.no-scrollbar::-webkit-scrollbar' : {
                display: 'none'
            },

            /* Hide scrollbar for IE, Edge and Firefox */
            '.no-scrollbar' : {
                '-ms-overflow-style': 'none',
                'scrollbar-width': 'none'
            }
        })
    })
  ],
};
