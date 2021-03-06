const accepts = require('accepts');
const mime = require('mime');
const fs = require('fs');
const path = require('path');
const timings = require('./server-timings');

const extByEncoding = {
    'br': 'br',
    'gzip': 'gz'
};

module.exports = (baseDir) => (req, res, next) => {
    timings.startNow(res, 'Match pre-compressed');
    const acceptsEncoding = (encoding) => accepts(req).encodings().indexOf(encoding) >= 0;
    const encoding = acceptsEncoding('br') ? 'br' : acceptsEncoding('gzip') ? 'gzip' : false;

    if (encoding) {
        const ext = '.' + extByEncoding[encoding];
        const filename = path.join(baseDir, req.originalUrl + ext);
        const contentType = mime.getType(req.originalUrl);
        if (fs.existsSync(filename)) {
            req.url = req.url + ext;
            res.setHeader('Content-Encoding', encoding);
            res.setHeader('Content-Type', contentType);
        }
    } else {
        console.log('serve uncompressed file (fallthrough)');
    }
    timings.endNow(res, 'Match pre-compressed');
    next();
};