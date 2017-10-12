const gulp = require('gulp');
const filter = require('gulp-filter');
const rev = require('gulp-rev');
const override = require('gulp-rev-css-url');

const revConfig = require('../lib/rev-config');
const inputDir = revConfig.outputDir;
const outputDir = inputDir;
const manifestFilename = revConfig.manifestFilename;

gulp.src([
        inputDir + '**/*.{css,js}',
        inputDir + '**/*.{gif,ico,jpg,png,svg,webp}',
        inputDir + '**/*.{woff,woff2}'
    ])
    .pipe(filter(file => !file.path.endsWith('/sw.js')))
    .pipe(rev())
    .pipe(override())
    .pipe(gulp.dest(outputDir))
    .pipe(rev.manifest(manifestFilename))
    .pipe(gulp.dest(outputDir));