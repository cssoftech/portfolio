const express = require('express')
const billingRouter = require('./Routes/route1')
const app = express()

app.get('/',billingRouter)

module.exports = app;