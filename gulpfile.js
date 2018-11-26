let gulp = require('gulp');
let concat = require('gulp-concat')
let cleanCSS = require('gulp-clean-css');
 
gulp.task('minify-css', () => {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8', inline: 'all'}))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('css'));
});