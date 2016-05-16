'use strict';

var gulp = require('gulp');

gulp.task('default',() => {
  return gulp.src(['**/*.html', '!./node_modules/**'])
    .pipe(gulp.dest('dist'));
});
