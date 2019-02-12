//Node - Server.js

var express = require('express')
var bodyParser = require('body-parser')
var logger     = require('morgan')
var Post = require('./models/post')

var app = express()
app.use(logger('dev'))

app.use(bodyParser.json())

// Controllers  - Fixed issue with controller temporary - Revision on controllers needed
//app.use( require('./controllers/static'))
//app.use(require('.controllers/controllers'))


//server listening (port:3000!!)
  var server = app.listen(3000, function () {
    console.log('server listening on', 3000)
})
require('./websockets').connect(server)

//Database Requests (Get)
app.get('/api/posts', function (req, res, next) {
    post.find()
        .sort('-date')
        .exec(function (err, posts) {
           if (err) { return next (err) } 
           res.json(posts)
    })
})   
//Creating Post End Point
//------------------------------------------------
//var Post = require('.models/post')
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