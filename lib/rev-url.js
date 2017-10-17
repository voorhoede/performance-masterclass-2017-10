const fs = require('fs');

const revConfig = require('./rev-config');
const revManifest = require(revConfig.outputDir + revConfig.manifestFilename);

module.exports = function revUrl(url) {
    url = url.startsWith('/') ? url.substr(1) : url;
    if (revManifest.hasOwnProperty(url)) {
        const revUrl = revManifest[url];
        revFile = fs.statSync(revConfig.outputDir + revUrl);
        if (revFile.isFile()) {
            if (!fs.existsSync(revConfig.inputDir + url)) {
                return `/${revUrl}`;
            }
            const originalFile = fs.statSync(revConfig.inputDir + url);
            if (!originalFile.isFile() || revFile.mtime.getTime() > originalFile.mtime.getTime()) {
                return `/${revUrl}`;
            }
        }
    }
    return `/${url}`;
}