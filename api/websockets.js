var websockets = require('../../websockets')
var _ = require('lodash')
var ws = require('ws')
var clients = []
exports.connect = function (server){
    var wss = new ws.Server({server: server})
    wss.on('connection', function (ws){
        clients.push(ws)
        exports.broadcast('new client joined')
        ws.on('close', function(){
            _.remove(clients, ws)
        })
    })
}

//Broadcasting

exports.broadcast = function (topic, data){
    var json = JSON.stringify({topic, data: data})
    clients.forEach(function (client){
        client.send(json)
    })
}

//web sockets module (/skipped p132 - on going issue with node ws module - needs resolving)
router.post('/', function(req, res, next){
    var post = new post({req:body.body})
    post.username = req.auth.username
    post.save(function (err, post){
        if (err) { return next(err) }
        websockets.broadcast('new_post', post)
        res.json(201, post)
    })
})