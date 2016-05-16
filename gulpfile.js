'use strict';

var gulp = require('gulp');

gulp.task('default',() => {
  return gulp.src(['**/*.html'])
    .pipe(gulp.dest('dist'));
});
