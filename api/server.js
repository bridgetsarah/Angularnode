//Node - Server.js

var express = require('express')
var bodyParser = require('body-parser')
var logger = require('morgan')
var Post = require('./models/post')
var websockets = require('./websockets')

var app = express()
app.use(bodyParser.json())
app.use(logger('dev'))
//app.use(require('./auth'))    // issue starting server with the following??
//app.use('/api/posts', require('.controllers/api/posts'));
//app.use('/api/sessions', require('.controllers/api/sessions'))
//app.use('/api/users', require('.controllers/api/users'))
app.use( require('./controllers/static'))

// Server for Protractor - hopefully work!
var port = process.envPORT || 3000
var server = app.listen(port, function () {
    console.log('server', process.pid, 'listening on', port)
})
require('./websockets').connect(server)


//Get Request from DB
app.get('/api/posts', function (req, res, next) {
    post.find()
        .sort('-date')
        .exec(function (err, posts) {
           if (err) { return next (err) } 
           res.json(posts)
    })
})   
//Creating Post End Point
//------------------------------------------------var Post = require('.models/post')
app.post('/api/posts', function (req, res, next){
    var post = new Post({
        username: req.body.username,
        body:     req.body.body  
    })
    post.save(function (err, post) {
    if (err) {return next (err) }
    res.json(201, post)
    })
   })
// New server end point
app.get('/', function (req, res) {
    res.sendfile('layouts/posts.html')
})
