// Include gulp
var gulp = require('gulp'); 

// Plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

// Concatenate & Minify JS
gulp.task('js', function() {
    return gulp.src('client/js/**/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('less', function() {
    return gulp.src('client/css/style.less')
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist'))
        .pipe(rename('style.min.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('client/js/**/*.js', ['js']);
    gulp.watch('client/css/*.less', ['less']);
});

// Default Task
gulp.task('default', ['js', 'less']);