// Include gulp
var gulp = require('gulp'); 

// Plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(['client/js/*.js', 'client/js/*/*.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(['client/js/*.js', 'client/js/*/*.js'], ['scripts']);
});

// Default Task
gulp.task('default', ['scripts']);