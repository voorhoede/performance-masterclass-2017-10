module.exports = (acceptsHtml = true) => (req, res, next) => {
    const isMatch = (req.headers['accept'].includes('text/html') === acceptsHtml)
    isMatch ? next() : next('route')
}