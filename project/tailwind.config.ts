/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'
const PluginUtilities = require('./app/plugins/pluginUtilities.js')


const tempPlugin = plugin(
  function ({ matchUtilities, theme }) {
    PluginUtilities({matchUtilities, theme})
  },
  
)

export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    tempPlugin,
  ],
}

