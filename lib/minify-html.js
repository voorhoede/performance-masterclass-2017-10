const minify = require('html-minifier').minify
const timings = require('./server-timings')

module.exports = () => (req, res, next) => {
    timings.startNow(res, 'Minify')
    res.locals.html = minify(res.locals.html, {
        removeComments:            true,
        collapseWhitespace:        true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes:     true,
        removeEmptyAttributes:     true,
        minifyJS:                  true,
    })
    timings.endNow(res, 'Minify')
    next()
}