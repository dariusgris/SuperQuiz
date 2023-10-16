var gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'site'
    },
    port: 3002
  })
});


gulp.task('sass', function() {
    return gulp.src('site/assets/sass/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('site/assets/css'))
      .pipe(browserSync.reload({stream: true}))
});

gulp.task('watch', gulp.parallel('browserSync', 'sass', function (){
  gulp.watch('site/assets/scss/**/*.scss', gulp.series('sass')); 
  gulp.watch('site/index.html', browserSync.reload); 
  gulp.watch('site/assets/js/**/*.js', browserSync.reload); 
}));