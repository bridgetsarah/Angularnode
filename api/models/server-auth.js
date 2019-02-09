var User = require('./user')

//Creating route POST - to create new user accounts

app.post('/user', function (req, res, next){
    var user = new User({username: req.body.username})
    bcrypt.hash(req.body.password, 10, function (err, hash){
        user.password = hashuser.save(function (err, user) {
            if (err) {throw next(err)}
            res.send(201)
        })
    })
})

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