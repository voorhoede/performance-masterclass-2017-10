const gulp = require('gulp');
const gzip = require('gulp-gzip');
const brotli = require('gulp-brotli');
const merge = require('event-stream').merge;
const path = require('path');

// configure input, output and processors:

const inputDir = path.join(__dirname, '..', 'cache');
const outputDir = inputDir;
const fileStream = () => gulp.src([
    `${inputDir}**/*.*`,
    `!${inputDir}**/*.br`,
    `!${inputDir}**/*.gz`,
    `!${inputDir}**/critical.css`,
    //`!${inputDir}**/*.{gif,jpg,png,webp}`,
    `!${inputDir}**/*.html`
], { base: inputDir });

const brotliSettings = {
    extension: 'br',
    skipLarger: true,
    mode: 0,
    quality: 11, // maximum compression
    lgblock: 0
};
const gzipSettings = {
    gzipOptions: { level: 9 }, // maximum compression
    skipGrowingFiles: true
};

// process input and write output to disk:

const brotliCompress = () => fileStream()
    .pipe(brotli.compress(brotliSettings))
    .pipe(gulp.dest(outputDir));

const gzipCompress = () => fileStream()
    .pipe(gzip(gzipSettings))
    .pipe(gulp.dest(outputDir));

const compress = () => merge([
		gzipCompress(),
		brotliCompress()
	])
    .on('end', () => console.log(`Compressed files saved to ${outputDir}`));

compress();