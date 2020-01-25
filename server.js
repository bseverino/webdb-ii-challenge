const express = require('express')
const carRouter = require('./routers/carRouter.js')
const salesRouter = require('./routers/salesRouter.js')
const logger = require('./middleware/logger.js')
const server = express()

server.use(express.json())
server.use(logger)

server.use('/api/cars', carRouter)
server.use('/api/sales', salesRouter)

module.exports = server