var gulp = require('gulp');

var concat = require('gulp-concat');

var paths = {
  parser: ['src/smarty.l', 'src/smarty.y'],
};

gulp.task('parser', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  return gulp.src(paths.parser)
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('build/js'));
});

// Copy all static images
gulp.task('images', function() {
 return gulp.src(paths.images)
    // Pass in options to the task
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('build/img'));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['scripts', 'images', 'watch']);