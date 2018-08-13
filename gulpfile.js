var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var cssnano = require('gulp-cssnano');
var gulpIf = require('gulp-if');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var gutil = require('gulp-util');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('prefix', () =>
    gulp.src('src/app.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);
gulp.task('sass', function() {
    return gulp.src('app/scss/styles.scss')
        .pipe(plumber({ errorHandler: function(err) {
                notify.onError({
                    title: "Gulp error in " + err.plugin,
                    message:  err.toString()
                })(err);
                gutil.beep();
            }}))
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});
gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    })
});
gulp.task('useref', function(){
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpIf('app/js/*.js', uglify()))
        .pipe(gulpIf('app/css/styles.css', cssnano()))
        .pipe(gulp.dest('dist'))
});
gulp.task('images', function(){
    return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
        .pipe(cache(imagemin()))
        .pipe(gulp.dest('dist/images'))
});
gulp.task('clean:dist', function() {
    return del.sync('dist');
});
gulp.task('build', function (callback) {
    runSequence('clean:dist',
        ['sass', 'useref', 'images'],
        callback
    )
});
gulp.task('default', function (callback) {
    runSequence(['browserSync',  'watch'],
        callback
    )
});