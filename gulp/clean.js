var gulp = require('gulp');
var del = require('del');

var browsers = [
    '> 3%'
];

gulp.task('clean', function() {
    del.sync(['app/product/']);
});