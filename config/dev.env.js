'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_ROOT_URL:"'https://jobportal.infohob.com/api/v1'"
})
