var gulp = require('gulp');
var data = require('gulp-data');
var stylus = require('gulp-stylus');

//gulp.task('css', function (){
 //   gulp.scr('css/**/*.styl')
 //   .pipe(stylus())
 //   .pipe(gulp.dest('assets'))
//})

///////// new gulp css task added
gulp.task('css', function(){
    return gulp.src('css/**/*/.styl')
    .pipe(stylus())
    .pipe(gulp.dest('assets'))
})