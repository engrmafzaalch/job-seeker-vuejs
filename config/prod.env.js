'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = {
  NODE_ENV: '"production"',
  VUE_ROOT_URL:'"http://192.241.137.124:8000/api/v1"'

}
