module.exports = { 
    inputDir:           `${__dirname}/../src/`, 
    outputDir:          `${__dirname}/../cache/`, 
    manifestFilename:   'rev-manifest.json',
    pattern:            /.*-[0-9a-f]{10}\..*/
};