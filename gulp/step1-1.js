var gulp = require('gulp');
var sass = require('gulp-sass')
var notify = require('gulp-notify');

gulp.task('step1', function() {
    gulp.src('app/src/sass/*.scss')
        .pipe(sass())
        .pipe(notify('scss was compiled!'))
        .pipe(gulp.dest('app/product/css'));
});