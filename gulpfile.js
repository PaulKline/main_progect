var gulp = require('gulp');
var CleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var tinyPNG = require('gulp-tinyPNG-compress'); 
var pump = require('pump');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

gulp.task("minify-css", function(cb) {
  return gulp.src("./src/css/*.css")
  .pipe(CleanCSS({
    compatibility: "ie8"
  }))
  .pipe(gulp.dest('dist/css/'))
  cb();
});

gulp.task("move-min-js", function(cb){
  return gulp.src("./src/js/*.min.js")
    .pipe(gulp.dest('dist/js/'))
    cb();
})
gulp.task("move-js", function (cb) {
  pump([
      gulp.src(['src/js/*.js', '!src/js/*.min.js']),
      uglify(),
      rename({ suffix: '.min' }),
    gulp.dest('dist/js/')
    ],
  );
  cb();
  
});

gulp.task("htmlmin", function (cb) {
  return gulp.src("./src/*.html")
  .pipe(htmlmin({ 
    collapseWhitespace: true 
  }))
  .pipe(gulp.dest('dist/'))
  cb();
});

gulp.task("fonts", function (cb) {
  return gulp.src("./src/fonts/**/*")
  .pipe(gulp.dest('dist/fonts/'))
  cb();
});

gulp.task('tinyPNG', function (cb) {
  gulp.src('./src/img/**/*.{png,jpg,jpeg}')
    .pipe(tinyPNG({
      key: 'rFZvl80CZw1jCdrkTql467JHjvqlb0Xl',
      log: true
    }))
    .pipe(gulp.dest('dist/img'));
    cb();
});

gulp.task("default", gulp.parallel("minify-css", "move-js", "htmlmin", "fonts", 'tinyPNG', "move-min-js", function (cb) {

  cb();
}));


