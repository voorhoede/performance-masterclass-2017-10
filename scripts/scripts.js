const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify'); // docs: https://www.npmjs.com/package/gulp-uglify

const inputDir = 'src/';
const outputDir = 'cache/';

gulp.src([
        inputDir + '/assets/js/vendor/jquery.min.js',
        inputDir + '/dist/js/bootstrap.js',
        inputDir + '/assets/js/docs.min.js',
        inputDir + '/assets/js/ie10-viewport-bug-workaround.js',
    ])
    .pipe(concat('index.js'))
    // minify JS
    .pipe(uglify())
    .pipe(gulp.dest(outputDir));