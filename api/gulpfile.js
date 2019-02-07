var gulp = require('gulp')


//Basic Form for a gulp task

gulp.task('welcome', function(){
    console.log('welcome to gulp!')
})

gulp.task('hello', ['welcome'], function (){
    console.log('hello world')
})