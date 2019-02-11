// Static.js file inside Controllers directory

var express = require('express')
var router = express.Router()

//var router = express.router()
router.use(express.static(__dirname + '/../assets'))
router.use(express.static(__dirname + '/../templates'))


router.get('/', function (req, res) {
    res.sendfile('layouts/app.html')
})

module.exports = router
