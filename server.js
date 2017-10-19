const acceptsHtml = require('./lib/accepts-html');
const cacheControlImmutable = require('./lib/cache-control-immutable');
const cookieParser = require('cookie-parser');
const express = require('express');
const fs = require('fs');
const helmet = require('helmet');
const hasHtmlResponse = require('./lib/has-html-response');
const http = require('http');
const http2 = require('http2');
const minifyHtml = require('./lib/minify-html');
const nunjucks = require('nunjucks');
const path = require('path');
const revConfig = require('./lib/rev-config');
const revUrl = require('./lib/rev-url');
const serverPushAssets = require('./lib/server-push-assets');
const shrinkRay = require('shrink-ray');
const spdy = require('spdy');
const timings = require('./lib/server-timings');
const urlParser = require('url');
const usePreCompressed = require('./lib/use-pre-compressed');

const app = express();
const config = {
    baseDir: 'src/',
    cacheDir: 'cache/',
    ports: {
        http1: process.env.PORT || 6521,        // T9 for "Performance MasterClass http1"
        http2: process.env.HTTP2_PORT || 6522,  // T9 for "Performance MasterClass http2"
        spdy: process.env.SPDY_PORT || 6523,    // T9 for "Performance MasterClass SPDY(3)"
    },
    ssl: {
        key: fs.readFileSync(`${__dirname}/config/localhost.key`),
        cert: fs.readFileSync(`${__dirname}/config/localhost.crt`),
    },
};
const serverH1 = http.createServer(app);
const serverH2 = http2.createSecureServer(config.ssl, app);
const serverSpdy = spdy.createServer(config.ssl, app);

app.use(timings); // for debugging
app.use(helmet()); // secure app
app.use(cookieParser());

/**
 * Pretty URLs:
 * - redirect URLs with pattern `path/to/page/index.html` to `path/to/page/` and maintain search parameters (`?param=value` etc)
 */
app.use('*/index.html', (req, res) => res.redirect(301, `${path.dirname(req.originalUrl)}/${urlParser.parse(req.originalUrl).search}`));

/**
 * Performance tuning for entire app:
 * - Enable validating cached responses using `etag`s: https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching#validating_cached_responses_with_etags
 * - Set immutable headers on revisioned files with `revConfig.pattern`: https://bitsup.blogspot.nl/2016/05/cache-control-immutable.html
 * - Use pre-compressed files when available.
 * - Enable dynamic gzip and Brotli compression using Shrink-ray: https://github.com/aickin/shrink-ray
 * - Serve (revisioned) files from `cacheDir` when available.
 */
app.set('etag', true);
app.use(revConfig.pattern, cacheControlImmutable());
app.get('*', acceptsHtml(false), usePreCompressed(path.join(__dirname, config.cacheDir)));
app.use(shrinkRay());
app.use(express.static(path.join(__dirname, config.cacheDir), { index: false, lastModified: false }));

/**
 * Static files:
 * - Tries source files from `baseDir`.
 * - Doesn't try to use `index.html` in case URL is a directory as we render pages dynamically.
 */
app.use(express.static(path.join(__dirname, config.baseDir), { index: false, lastModified: false }));

/**
 * Dynamic pages:
 * - Uses Nunjucks for dynamic rendering: https://mozilla.github.io/nunjucks/api.html#express
 * - Adds a `revUrl` helper to inject URLs to revisioned files.
 * - Render page if there's a matching template (`index.html`) for the URL.
 * - Minify rendered HTML using https://github.com/melonmanchan/express-minify-html#usage
 * - Return 500 page if something goes wrong while rendering.
 * - Return 404 page if no matching template is found.
 */
const renderer = nunjucks.configure(config.baseDir, {
    autoescape: true,
    express: app,
    watch: true
});
renderer.addGlobal('revUrl', revUrl);

app.use(timings.start('Render'));
app.get('*', acceptsHtml(), (req, res, next) => {
    const filename = path.join(req.path, 'index.html');
    console.log(`Page request: ${filename}`);
    fs.stat(`${config.baseDir}${filename}`, (err, stats) => {
        if (err || !stats.isFile()) {
            return next();
        }

        const data = {
            fontsLoaded: req.cookies.fontsLoaded,
            // cssLoaded: (req.cookies.cssLoaded === revUrl('/index.css')),
        };

        res.render(`./${filename}`, data, (err, html) => {
            if (err) {
                return res.status(500).send('Internal Server Error');
            }
            res.locals.html = html;
            next();
        });
    });
});
app.use(timings.end('Render'));

app.get('*', hasHtmlResponse(), minifyHtml());
app.get('*', hasHtmlResponse(), serverPushAssets());
app.get('*', hasHtmlResponse(), (req, res) => res.send(res.locals.html));
app.get('*', acceptsHtml(), (req, res) => res.status(404).render('./404.html'));

/**
 * Server app over HTTP1, HTTP2 and SPDY/H2
 * Note: HTTP2 version currently crashes. Will probably have to wait for Node v9 and Express v5 stable.
 * But for now, you can use the SPDY server as alternative as it also provides HTTP2 support.
 */
serverH1.listen(config.ports.http1, (err) => {
    err ? console.error(err) : console.log(`App served over HTTP/1 on http://localhost:${config.ports.http1}`);
});
serverH2.listen(config.ports.http2, (err) => {
    err ? console.error(err) : console.log(`App served over HTTP/2 on https://localhost:${config.ports.http2}`);
});
serverSpdy.listen(config.ports.spdy, (err) => {
    err ? console.error(err) : console.log(`App served over SPDY/H2 on https://localhost:${config.ports.spdy}`);
});