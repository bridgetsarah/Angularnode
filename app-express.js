// Express Framework //

var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.send(200, 'hello world');
});

// Vanilla JS HTTP server // 

var http = require("http");
http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type" : "text/plain"});
    response.write("hello world");
    response.end();
}).listen(8080);