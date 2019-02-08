var gulp = require('gulp')
var stylus = require('gulp-stylus')

gulp.task('css', function (require){
    gulp.scr('css/**/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('assets'))
})