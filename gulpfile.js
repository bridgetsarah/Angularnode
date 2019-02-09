var gulp = require('gulp')

gulp.task('hello', function () {
    console.log('hello world')
})

var fs = require('fs');
fs.readdirSync(__dirname + '/gulp').forEach(function (task) {
    require('./gulp/' + task);
});