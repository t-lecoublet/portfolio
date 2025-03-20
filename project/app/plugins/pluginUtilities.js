const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette')

function previewBorderColor(color){
  if(color.charAt(0) === '#'){
    color = `%23${color.substring(1)}`
  }
  const url = `data:image/svg+xml;utf8,<svg width="12.014" height="12.014" viewBox="0 0 3.179 3.179" xmlns="http://www.w3.org/2000/svg"><path d="M.905 0l-.7.7L0 .905v2.274h2.274l.205-.205.495-.496.205-.204V0zm.29.7h1.283v1.284l-.494.494H.7V1.194z" fill="${color}"/></svg>`
  return {
    "--url":`url('${url}') !important`
  }
}

const PluginUtilities = ({ matchUtilities, theme }) => {
  matchUtilities(
    {
      "preview-border": (value) => {return previewBorderColor(value)},
    },
    { values: flattenColorPalette(theme('colors')) } 
  )
}

module.exports = PluginUtilities