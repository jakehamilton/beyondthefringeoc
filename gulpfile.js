;(function() {

  var gulp = require('gulp');
  var sass = require('gulp-sass');
  var jade = require('gulp-jade');
  var jslint = require('gulp-jslint');
  var browserSync = require('browser-sync').create();

  gulp.task('serve', ['css', 'html', 'js'], function() {

    browserSync.init({
      server: {
        baseDir: './app/'
      }
    })

  });

  gulp.task('watch', function() {
    gulp.watch('./src/sass/**/*.scss', ['css']);
    gulp.watch('./src/jade/**/*.jade', ['html']);
    gulp.watch('./src/js/**/*.js', ['js', 'reload-js']);
  });

  gulp.task('css', function() {
    return gulp.src('./src/sass/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('./app/assets/css/'))
      .pipe(browserSync.stream());
  });

  gulp.task('html', function() {
    return gulp.src('./src/jade/*.jade')
      .pipe(jade())
      .pipe(gulp.dest('./app/'))
      .pipe(browserSync.stream());
  });

  gulp.task('js', function() {
    return gulp.src('./src/js/*.js')
      .pipe(gulp.dest('./app/assets/js/'));
  });

  gulp.task('reload-js', function() {
    browserSync.reload('*.js');
  });

  gulp.task('default', ['serve', 'watch']);

})();
