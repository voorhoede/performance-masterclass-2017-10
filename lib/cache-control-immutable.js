module.exports = (req, res, next) => { 
    res.setHeader('Cache-Control', 'max-age=365000000, immutable');
    next();
}