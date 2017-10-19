const critical = require('critical');
const fse = require('fs-extra');
const globby = require('globby');
const nunjucks = require('nunjucks');
const path = require('path');
const rimraf = require('rimraf');

const baseDir = 'src/';
const cacheDir = 'cache/';

const renderer = nunjucks.configure(baseDir, {
    autoescape: true,
    watch: false
});
renderer.addGlobal('revUrl', (url) => url);

globby([
    baseDir + '**/index.html',
    '!' + baseDir + '_*/**/*.html'
])
    .then(renderTempHtml)
    .then(generateCritical)

function renderTempHtml(filenames) {
    nunjucks.configure(baseDir);

    return Promise.all(filenames.map(filename => {
        const relativeFilename = path.relative(baseDir, filename);

        return new Promise((resolve, reject) => {
            return renderer.render(relativeFilename, {
                fontsLoaded: true,
                cssLoaded: true
            }, (err, html) => {
                if (err) {
                    reject(err);
                } else {
                    const outputFile = path.join(cacheDir, relativeFilename);
                    fse.outputFile(outputFile, html, err => err ? reject(err) : resolve(outputFile));
                }
            })
        });
    }));
}

function generateCritical(filenames) {
    return Promise.all(filenames.map(filename => {
            const outputPath = path.dirname(filename);
            console.log('generating critical css for: ' + filename);
            return critical.generate({
                src: 'index.html',
                base: outputPath,
                css: [cacheDir + 'index.css'],
                dest: 'critical.css',
                minify: true,
                ignore: ['@font-face', /\.fonts-loaded(\s)*.*/],
                width: 1280,
                height: 1000
            });
        })
    )
}