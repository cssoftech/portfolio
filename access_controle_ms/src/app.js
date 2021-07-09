const express = require('express')
const accessRouter = require('./Routes/route1')
const app = express()

app.get('/',accessRouter)

module.exports = app;