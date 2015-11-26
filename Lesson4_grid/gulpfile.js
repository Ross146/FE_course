var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    nib = require('nib'),    
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    sourcemaps =require('gulp-sourcemaps');

// server connect

gulp.task('connect', function() {
  connect.server({
    root: ['../Lesson4_grid/'],
    livereload: true
  });
});


gulp.task('stylus_media', function() {
  gulp.src('./css/styl/media.styl')
  .pipe(sourcemaps.init())   
  .pipe(stylus({
    compress: false,
    sourcemaps: { inline: true },
    use:[nib()]
  }))
  .pipe(sourcemaps.write()) 
  .pipe(gulp.dest('./css/'))  
});  
// main.styl

gulp.task('stylus_main', function() {
  gulp.src('./css/styl/main.styl')
  .pipe(sourcemaps.init())   
  .pipe(stylus({
  	compress: false,
    sourcemaps: { inline: true },
  	use:[nib()]
  }))
  .pipe(sourcemaps.write()) 
  .pipe(gulp.dest('./css/'))  
});  

// reload

  gulp.task('reload', function () {
    gulp.src('index.html')
    .pipe(connect.reload()) 
});


// watch
gulp.task('watch', function() {
  gulp.watch('./css/styl/main.styl', ['stylus_main']);
  gulp.watch('./css/styl/media.styl', ['stylus_media']);
  gulp.watch('index.html', ['reload']);  
  gulp.watch('css/*.css', ['reload']);
})


gulp.task('default', ['connect','watch']);