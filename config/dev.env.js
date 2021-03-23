'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_ROOT_URL: '"http://c0a1a8af044a.ngrok.io/api/v1"',
})
