const api = require('./template/api')

module.exports = {
  website: {
    assets: "./assets",
    js: [
      "api/api.js",
    ],
    css: [
      "api/api.css"
    ]
  },

  hooks: {},

  blocks: {
    api,

  }
}