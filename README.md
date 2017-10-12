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

* ...

Solutions are linked from each individual exercise.
