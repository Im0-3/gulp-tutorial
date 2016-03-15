var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlhint = require('gulp-htmlhint'); // (*2)
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    gulp.src('app/src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/product/css/'))
        .pipe(browserSync.stream());
});

gulp.task('html', function(){
    gulp.src('app/src/**/*.html')
        .pipe(htmlhint('.htmlhintrc'))
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