const server = require('express')()
const middleware = require('./middleware')
const routes = require('./routes')
const errorHandler = require('./helper/errorHandler')

middleware(server)
routes(server)

//* Error Handler
server.use(errorHandler)

module.exports = server
