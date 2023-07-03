/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** if color did not render add followind code 
const colors = require('tailwindcss/colors')
*/
/** also add in theme colors: colors, 
 * or define every color you need with colors: {sky: colors.sky, and so on }
*/
