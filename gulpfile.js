var gulp = require('gulp');
var source = require('vinyl-source-stream')
var browserify = require('browserify')

gulp.task('browserify', function(){
  return browserify({ entries: ['./js/browser.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});
