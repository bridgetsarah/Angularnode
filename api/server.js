//Server js file (node)
var websockets = require('./websockets').connect(server)
var express = require('express')
var bodyParser = require('body-parser')
var Post = require('./models/post')

var app = express()
app.use(bodyParser.json())

//app.use('/api/posts', require('./controllers/api/posts'))                         // 
app.use( require('./controllers/static'))
//equalivant to: app.use('/', require('.controllers/static'))



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



   //server listening
var server = app.listen(3000, function () {
    console.log('server listening on', 3000)
})
require('./websockets').connect(server)
