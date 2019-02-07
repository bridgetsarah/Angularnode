var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')

gulp.task('js', function(){
    gulp.src(['ng/module.js', 'ng/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(ngAnnotate(require))
    .pipe(uglify(require))
    .pipe(gulp.dest('assets'))
})