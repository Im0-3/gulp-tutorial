var gulp = require('gulp');
var webpack = require('webpack-stream');
var webpackConfig = require('../webpack.config.js');

var browsers = [
    '> 3%'
];

gulp.task('script', function() {
    gulp.src('app/src/js/*.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('app/product/js'));
});