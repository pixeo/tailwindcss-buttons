const defaultConfig = require('tailwindcss/defaultConfig')()

module.exports = {
  ...defaultConfig,
  plugins: [
    require('./index')(),
  ],
};
