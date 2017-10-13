module.exports = () => (req, res, next) => {
    const hasHtmlResponse = (typeof res.locals.html === 'string')
    hasHtmlResponse ? next() : next('route')
}