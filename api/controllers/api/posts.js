// api/controllers/api/posts.js

var post = require('../../models/post')

router.get('/api/posts', function (req, res, next) {
    post.find()
    .sort('-date')
    .exec(function(err, posts) {
        if (err) {return next (err) }
        res.json(posts)
    })
})

router.post('/api/posts'), function (req, res, next) {
    var post = new Post({
        username: req.body.username,
        body: req.body.body
    })
}

// find current users username
router.post('/', function (req, res, next){
    var post = new Post({body: req.body.body})
    post.username = req.auth.username
    post.save(function (err, post) {
        if (err) {return next(err)}
        res.json(201, post)
    })
})




    module.exports = router

