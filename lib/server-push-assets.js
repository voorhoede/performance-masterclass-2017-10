const cheerio = require('cheerio')
const fs = require('fs')
const mime = require('mime')
const path = require('path')
const revConfig = require('./rev-config')
const zlib = require('zlib')

const assetDir = path.join(__dirname, '..', 'cache')

/**
 * Using SPDY/HTTP2 Push Streams: https://github.com/spdy-http2/node-spdy#push-streams
 */
module.exports = () => (req, res, next) => {
    next();
    if (typeof res.push === 'function') {
        const { html } = res.locals
        const assets = [
            // ... findAssets(html, 'link[rel="preload"]', 'href'),
            ... findAssets(html, 'link[rel="stylesheet"]', 'href'),
            // ... findAssets(html, 'script[src]', 'src'),
        ]
        assets.forEach(url => pushAsset(res, url))
    }
}

function findAssets(html, selector, attribute) {
    const $ = cheerio.load(html)
    return $(selector)
        .map((index, element) => $(element).attr(attribute))
        .get()
}

function pushAsset(res, url) {
    const cacheControl = revConfig.pattern.test(url) ? 'max-age=365000000, immutable' : ''
    const contentType = mime.getType(url)
    const filename = path.join(assetDir, url)
    const pushStream = res.push(url, {
        request: { 
            'Accept': '*/*'
        },
        response: { 
            'Cache-Control': cacheControl,
            'Content-Type': contentType, 
            'Content-Encoding': 'gzip',
        },
    })

    fs.createReadStream(filename)
        .pipe(zlib.createGzip())
        .pipe(pushStream)
}
