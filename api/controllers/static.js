// Static.js file inside Controllers directory

var router = require('express').Router()

router.get('/', function (req, res) {
    res.sendfile('layouts/app.html')
})

module.exports = router

//Layout endpoints

var express = require('express')
//var router = express.router()
router.use(express.static(__dirname + '/../assets'))
router.use(express.static(__dirname + '/../templates'))



