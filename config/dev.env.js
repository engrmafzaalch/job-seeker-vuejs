'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_ROOT_URL:'"http://ab6f68772cc4.ngrok.io/api/v1"'
})
