const NODE_ENV = process.env.NODE_ENV || 'development'

const commomSettings = require('./common')
const envSettings = require(`./${NODE_ENV}`)

const settings = { ...commomSettings, ...envSettings }

module.exports = settings
