var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlhint = require('gulp-htmlhint');
var browserSync = require('browser-sync').create();
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');

gulp.task('sass', function() {
    gulp.src('app/src/sass/*.scss')
        .pipe(plumber({
            errorHandler: notify.onError('Error: <%= error.message %>')
        }))
        .pipe(sass())
        .pipe(gulp.dest('app/product/css/'))
        .pipe(browserSync.stream())
});

gulp.task('html', function(){
    gulp.src('app/src/**/*.html')
        .pipe(htmlhint())
        .pipe(htmlhint.reporter())
        .pipe(gulp.dest('app/product/'))
        .pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: "./app/product"
    });
});

gulp.task('default', function() {
    browserSync.init({
        server: "./app/product"
    });

    gulp.watch('app/src/sass/*.scss',['sass']);
    gulp.watch('app/src/**/*.html',['html']);
});