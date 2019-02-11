const openColor = require("open-color");
const defaultConfig = require("tailwindcss/defaultConfig")();

module.exports = {
  ...defaultConfig,
  plugins: [
    require("./index")({
      colors: {
        default: {
          text: openColor.gray[9],
          background: openColor.gray[3]
        },
        cyan: {
          text: openColor.white,
          background: openColor.cyan[5]
        },
        primary: {
          text: openColor.white,
          background: openColor.green[5]
        }
      }
    })
  ]
};
