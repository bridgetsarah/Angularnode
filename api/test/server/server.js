//Testing Server (Protractor)!!! Port:3001!!!

var express = require('express')
var bodyParser = require('body-parser')
var logger = require('morgan')
var wbsockets = require('./websockets')

var app = express()
app.use(bodyParser.json())
app.use(logger('dev'))

app.use(require('./auth'))
app.use('/api/posts', require('.controllers/api/posts'));
app.use('/api/sessions', require('.controllers/api/sessions'))
app.use('/api/users', require('.controllers/api/users'))

// Protractor  Listen (port:3001!!)
var port = process.envPORT || 3001
var server = app.listen(port, function () {
    console.log('server', process.pid, 'listening on', port)
})
require('./websockets').connect(server)