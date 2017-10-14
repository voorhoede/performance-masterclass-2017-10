module.exports = (acceptsHtml = true) => (req, res, next) => {
    const isMatch = (req.headers['accept'].includes('text/html') === acceptsHtml)
    const isPrefetch = (req.accepts('text/html') && req.headers['purpose'] === 'prefetch')
    if (isMatch || isPrefetch) {
        next()
    } else {
        next('route')
    }
}