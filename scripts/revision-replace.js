const gulp = require('gulp');
const revReplace = require('gulp-rev-replace');

const revConfig = require('../lib/rev-config');
//const inputDir = revConfig.inputDir;
const outputDir = revConfig.outputDir;
const manifestFilename = revConfig.manifestFilename;

gulp.src([
        outputDir + '**/*.html',
        outputDir + 'sw.js',
    ])
    .pipe(revReplace({
        manifest: gulp.src(outputDir + manifestFilename)
    }))
    .pipe(gulp.dest(outputDir));