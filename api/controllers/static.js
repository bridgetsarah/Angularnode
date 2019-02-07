// Static.js file inside Controllers directory

var router = require('express').router()

router.get('/', function (req, res) {
    res.sendfile('layouts/posts.html')
})

module.exports = router
