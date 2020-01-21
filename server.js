const express = require('express')
const carRouter = require('./cars/carRouter.js')
const logger = require('./middleware/logger.js')
const server = express()

server.use(express.json())
server.use(logger)

server.use('/api/cars', carRouter)

module.exports = server