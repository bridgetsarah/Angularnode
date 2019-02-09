var ws = require('ws')
exports.connect = function (server){
    var wss = new ws.server({server: server})
    wss.on('connection', function (ws){
        ws.send('hello ws!')
    })
}