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
/////////////////area correct
exports.broadcast = function (topic, data){
    var json = JSON.stringify({topic, data: data})
    clients.forEach(function (client){
        client.send(json)
    })
}

//web sockets module (/skipped p132 - on going issue with node ws module - needs resolving)

//p129 - added connect module
exports.connect = function (server) {
    var wss = new ws.Server({server: server})
    wss.on('connnection', function (ws){
        ws.send('hello')
    })
}