'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_ROOT_URL: '"http://7454eb5eec7a.ngrok.io/api/v1"',
})
