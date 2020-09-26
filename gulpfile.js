var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

gulp.task('sass', function(){
  return gulp.src('components/scss/styles.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write('sourcemaps/'))
    .pipe(autoprefixer())
    .pipe(gulp.dest('css/'))
});