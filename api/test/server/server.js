//Testing Server (Protractor)!!! Port:3001!!!

var express = require('express')
var logger = require('morgan')
var websockets = require('./websockets')
var app = express()

app.use(bodyParser.json())
app.use(logger('dev'))

app.use(logger('dev'))
app.use(require('./controllers'))

// Protractor  Listen (port:3001!!)
var port = process.envPORT || 3001
var server = app.listen(3001, function () {
    console.log('server', process.pid, 'listening on', port)
})
websockets.connect(server)