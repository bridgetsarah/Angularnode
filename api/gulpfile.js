var gulp = require('gulp')
var concat = require('gulp-concat')
var sourcemaps = require('gulp-sourcemaps')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')
var stylus = require('gulp-stylus')

gulp.task('js', function(require){
    gulp.src(['ng/module.js', 'ng/**/*.js'])
    .pipe(sourcemaps.init())
     .pipe(concat('app.js'))
     .pipe(ngAnnotate(require))
     .pipe(uglify(require))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets'))
})

gulp.task('css', function (require){
    gulp.scr('css/**/*.styl')
    .pipe(stylus(require))
    .pipe(gulp.dest('/assets/css'))
})
//-----------------Gulp JS Watcher----------------------// Watching NG folder//
//gulp.task('watch:js', ['js'], function(){
//    gulp.watch('ng/**/*.js', ['js'])
//})
//-----------------Gulp CSS Watcher---------------------// Watching CSS folder
gulp.task('watch:css', function(require){
    gulp.watch('css/**/*.styl', ['css'])
})

//Having issue minimising CSS + Gulp [temp removed]
//read files under the gulp folder directory!!
var fs = require('fs');
fs.readdirSync(__dirname + '/gulp').forEach(function (css) {
    require('./gulp/' + css);
})

