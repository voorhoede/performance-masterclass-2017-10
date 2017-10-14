const path = require('path')
const request = require('request')

module.exports = () => (req, res, next) => {
    const ext = path.extname(req.url).substr(1)
    const format = req.headers.accept.includes('image/webp') ? 'webp' : ext

    /* @todo: Read DPR, Width and Viewport-Width from Client Hints: */
    const dpr = toFloat('')
    const width = toInteger('')
    const viewportWidth = toInteger('')

    const defaultWidth = 500
    const imageWidth = calculateImageWidth({ dpr, width, viewportWidth }) || defaultWidth

    request(`http://via.placeholder.com/${imageWidth}x${Math.round(imageWidth/2)}.${ext}?text=` + [
            format.toUpperCase(),
            `DPR: ${dpr ? dpr : '?'}`,
            `W: ${width ? width : '?'}`,
            `VPW: ${viewportWidth ? viewportWidth : '?'}`,
        ].join(', '))
        .pipe(res)
}

function toFloat (value) {
    const number = parseFloat(value)
    return isNaN(number) ? undefined : number
}

function toInteger (value) {
    const number = parseInt(value, 10)
    return isNaN(number) ? undefined : number
}

function calculateImageWidth ({ dpr, width, viewportWidth }) {
    if (width) {
        return width
    }
    if (viewportWidth && dpr) {
        return Math.round(viewportWidth * dpr)
    }
    return undefined
}