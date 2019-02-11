// api/controllers/api/posts.js
var router = require('express').Router()
var post = require('../../models/post')
var websockets = require('../../websockets')


router.get('/', function (req, res, next) {
    Post.find()
    .sort('-date')
    .exec(function (err, posts) {
      if (err) { return next(err) }
      res.json(posts)
    })
  })

// find current users username
router.post('/', function (req, res, next){
    var post = new Post({body: req.body.body})
    post.username = req.auth.username
    post.save(function (err, post) {
        if (err) {return next(err) }
        pubsub.publish('new_post', post)
       websockets.broadcast('new_post', post)
        res.json(201, post)
    })
})
    module.exports = router