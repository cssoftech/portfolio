const express = require('express')
const contractRouuter = require('./Routes/routr1');
const app = express()

app.get('/',contractRouuter)

module.exports = app;