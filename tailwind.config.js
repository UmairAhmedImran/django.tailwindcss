/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/templates/**/*.{html,js}", './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

/** if color did not render add followind code 
const colors = require('tailwindcss/colors')
*/
/** also add in theme colors: colors, 
 * or define every color you need with colors: {sky: colors.sky, and so on }
*/
