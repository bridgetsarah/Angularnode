var express = require('express')
var jwt = require('jwt-simple')
var app = express()
var bcypt = require('bcrypt')
var User = require('./user')
app.use(require ('body-parser').json())

//Creating route POST - to create new user accounts

var secretKey = 'supersecretkey'

app.post('/session', function (req, res, next){
    user.findOne({username: req.body.username}, function (err, user) {
        if (err) { return next (err)}
        if (!user) { return res.send(401)}
        bycrypt.compare(req.body.password, user-password, function (err, valid) {
            if (err) { return next (err)}
            if (!valid) {return res.send(401)}
            var token = jwt.encode(token, secretKey)
            User.findOne({username: user.username}, function (err, user){
                res.json(token)
            })
        })
    })
})

app.get('/user', function (req, res){
    var token = req.headers['x-auth']
    var auth = jwt.decode(token, secretKey)
    user.findOne({username: auth.username}, function (err, user){
        res.json(user)
    })
})
app.post('/user', function (req, res, next){
    var user = new User({username: req.body.username})
    bcrypt.hash(req.body.password, 10, function (err, hash){
        user.password = hashuser.save(function (err, user) {
            if (err) {throw next(err)}
            res.send(201)
        })
    })
})