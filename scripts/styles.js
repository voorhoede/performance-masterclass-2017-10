const autoprefixer = require('gulp-autoprefixer');
const gulp = require('gulp');
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano'); // docs: https://www.npmjs.com/package/gulp-cssnano

const inputDir = 'src/';
const outputDir = 'cache/';

gulp.src([
        inputDir + '/dist/css/fonts.css',
        inputDir + '/dist/css/bootstrap.css',
        inputDir + '/assets/css/src/docs.css',
    ])
    .pipe(concat('index.css'))
    .pipe(autoprefixer({
        browsers: ['last 2 versions']
    }))
    // minify CSS
    .pipe(cssnano({
        discardComments: {
            removeAll: true
        }
    }))
    .pipe(gulp.dest(outputDir));