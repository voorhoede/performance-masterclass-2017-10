# Masterclass Front-end Performance 2017-10

## Project setup

This project serves an adapted version of the [Bootstrap documentation website](http://getbootstrap.com/).
It is based on the [github pages branche of Bootstrap](https://github.com/twbs/bootstrap/tree/gh-pages). 

Differences from actual Bootstrap documentation:

* Added a custom web font.
* Removed third party scripts.
* The app is served with [Express](https://expressjs.com/).
* Templating is done with [Nunjucks](https://mozilla.github.io/nunjucks/).

The app already has basic performance tuning:

* App is served over HTTP1, HTTP2 & SPDY.
* CSS & JS are bundled and minified in build.
* All assets are revisioned post-build.
* All assets are pre-compressed post-build.
* Cached assets are served with immutable cache headers.
* Pre-compressed assets are served when available.
* HTML is dynamically minified.
* HTML is dynamically compressed.
* Server Push is ready be used.


## Quick start

This project requires [Node.js](http://nodejs.org/) (>= v8.5) and [npm](https://npmjs.org/).

After installing dependencies using `npm install` the following scripts are available on all exercise branches:

`npm run ...` | Description
---|---
`build` | Bundles, minifies, revisions, compresses and writes static files from `src/` to `cache/`.
`dev` | Start servers and file watchers in parallel (`start` and `watch`).
`start` | Serves app over HTTP1 `http://localhost:6521` and SPDY/H2 `https://localhost:6523`.
`watch` | Rebuilds app on file changes in `src/`.

More (sub) tasks are available in [package.json > scripts](package.json).


## Exercises

* [01 - Use image `srcset`](https://github.com/voorhoede/performance-masterclass-2017-10/tree/01-srcset)
* [02 - Use `picture` elements](https://github.com/voorhoede/performance-masterclass-2017-10/tree/02-picture)
* [03 - Use Client Hints](https://github.com/voorhoede/performance-masterclass-2017-10/tree/03-client-hints)
* [04 - Use Resource Hints](https://github.com/voorhoede/performance-masterclass-2017-10/tree/04-resource-hints)
* [05 - Use Server Push](https://github.com/voorhoede/performance-masterclass-2017-10/tree/05-server-push)
* [06 - Subset fonts](https://github.com/voorhoede/performance-masterclass-2017-10/tree/06-subset-fonts)
* [07 - Use Font Display](https://github.com/voorhoede/performance-masterclass-2017-10/tree/07-font-display)
* [08 - Load fonts async](https://github.com/voorhoede/performance-masterclass-2017-10/tree/08-load-fonts)
* [09 - Load JS](https://github.com/voorhoede/performance-masterclass-2017-10/tree/09-load-js)
* [10 - Load CSS async](https://github.com/voorhoede/performance-masterclass-2017-10/tree/10-load-css)
* [11 - Use critical CSS](https://github.com/voorhoede/performance-masterclass-2017-10/tree/11-critical-css)

Solutions are linked from each individual exercise.
