var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlhint = require('gulp-htmlhint');
var browserSync = require('browser-sync').create();
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var eslint = require('gulp-eslint');
var gulpif = require('gulp-if');

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

gulp.task('script', function(){
    gulp.src('app/src/js/*.js')
        .pipe(plumber({
        .pipe(plumber({
            errorHandler: notify.onError('Error: <%= error.message %>')
        }))
        .pipe(eslint({useEslintrc: true}))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        .pipe(eslint.result(function(result){
            if(result.errorCount !== 0) {
                return;
            }
            gulp.src(result.filePath)
                .pipe(gulp.dest('app/product/js/'));
        }))
        .pipe(browserSync.stream());
});

gulp.task('default', function() {
    browserSync.init({
        server: "./app/product"
    });

    gulp.watch('app/src/sass/*.scss',['sass']);
    gulp.watch('app/src/js/*.js',['script']);
    gulp.watch('app/src/**/*.html',['html']);
});