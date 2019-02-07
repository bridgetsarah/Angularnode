//Server js file (node)

var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())

app.get('/api/posts', function (req, res) {
  res.json([
      {
        username: 'bridgetsarah',
        body: 'node rocks!'
      }
  ])
})

//server listening
app.listen(3000, function (){
    console.log('server listening on', 3000)
})