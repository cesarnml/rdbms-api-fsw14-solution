const server = require('express')()
const middleware = require('./middleware')
const routes = require('./routes')

middleware(server)
routes(server)

module.exports = server
