const accepts = require('accepts')
const cheerio = require('cheerio')
const fs = require('fs')
const mime = require('mime')
const path = require('path')
const revConfig = require('./rev-config')
const revUrl = require('./rev-url')

const assetDir = path.join(__dirname, '..', 'cache')

/**
 * Using SPDY/HTTP2 Push Streams: https://github.com/spdy-http2/node-spdy#push-streams
 */
module.exports = () => (req, res, next) => {
    next();

    if (typeof res.push === 'function') {
        const encoding = getEncoding(req)
        const { html } = res.locals
        const assets = [
            // @todo: add URLs of assets to send using H2 Server Push
            // examples:
            // revUrl('/dist/fonts/glyphicons-halflings-regular.woff2'),
            // ... findAssets(html, 'img[data-src]', 'data-src'),
        ]
        assets.forEach(url => pushAsset(res, url, encoding))
    }
}

function getEncoding (req) {
    const acceptsEncoding = (encoding) => accepts(req).encodings().indexOf(encoding) >= 0;
    const encoding = acceptsEncoding('br') ? 'br' : acceptsEncoding('gzip') ? 'gzip' : false;
    return encoding
}

function getExtByEncoding (encoding) {
    const extByEncoding = {
        'br': 'br',
        'gzip': 'gz'
    }
    return extByEncoding[encoding]
}

function findAssets(html, selector, attribute) {
    const $ = cheerio.load(html)
    return $(selector)
        .map((index, element) => $(element).attr(attribute))
        .get()
}

function pushAsset(res, url, encoding) {
    const cacheControl = revConfig.pattern.test(url) ? 'max-age=365000000, immutable' : ''
    const contentType = mime.getType(url)
    const ext = `.${getExtByEncoding(encoding)}`
    const baseFilename = path.join(assetDir, url)
    const compressedFilename = `${baseFilename}${ext}`
    const isPrecompressed = fs.existsSync(compressedFilename)
    const filename = isPrecompressed ? compressedFilename : baseFilename

    if (!fs.existsSync(filename)) {
        return
    }

    const pushStream = res.push(url, {
        request: { 
            'Accept': '*/*'
        },
        response: { 
            'Cache-Control': cacheControl,
            'Content-Type': contentType, 
            'Content-Encoding': isPrecompressed ? encoding : '',
        },
    })
    fs.createReadStream(filename).pipe(pushStream)
}
