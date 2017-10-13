const gulp = require('gulp');

const inputDir = 'src/';
const outputDir = 'cache/';

gulp.src([
        inputDir + '**/*.{css,js}',
        inputDir + '**/*.{gif,ico,jpg,png,svg,webp}',
        inputDir + '**/*.{woff,woff2}'
    ])
    .pipe(gulp.dest(outputDir));