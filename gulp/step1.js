var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var htmlhint = require("gulp-htmlhint");

gulp.task('sass', function() {
    gulp.src('app/src/sass/*.scss')
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(sass())
        .pipe(notify('scss was compiled!'))
        .pipe(gulp.dest('app/product/css'));
});

gulp.task('html', function() {
    return gulp.src('app/src/**/*.html')
        .pipe(htmlhint())
        .pipe(htmlhint.reporter())
        .pipe(gulp.dest('app/product'));
});

gulp.task('watch', function(){
    gulp.watch('./app/src/sass/*.scss', ['sass']);
    gulp.watch('./app/src/**/*.html', ['html']);
});

gulp.task('default', ['sass']);