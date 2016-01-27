var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');

var browsers = [
    '> 3%'
];

gulp.task('sass', function() {
    gulp.src('app/src/sass/*.scss')
        .pipe(sass())
        .pipe(postcss([
            require('autoprefixer')({browsers: browsers})
        ]))
        .pipe(gulp.dest('app/product/css'));
});