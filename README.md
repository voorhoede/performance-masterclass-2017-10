# Load CSS async - Bonus

## Solution

* Include [assets/js/vendor/cookie.min.js](src/assets/js/vendor/cookie.min.js) helper in [src/_base/layout.html](src/_base/layout.html).
* Set `fullCssLoaded` cookie to `'/index.css'` on `onloadCSS` in [src/_base/load-css](src/_base/load-css.html).
* Pass `fullCssLoaded` cookie to template in [server.js](server.js).
* Load `index.css` blocking if cookie matches current stylesheet name (`latestCssLoaded` is true) in [src/_base/layout.html](src/_base/layout.html).
* Load `index.css` async if cookie does not match current stylesheet name, by including `load-css.html` in [src/_base/layout.html](src/_base/layout.html).

See [overview of all changes](https://github.com/voorhoede/performance-masterclass-2017-10/commit/4a0a19e84d959fd8edcffc74cbca7c9ad92fbfc8).

## Exercise

See [10-load-css](https://github.com/voorhoede/performance-masterclass-2017-10/tree/10-load-css).

---

Return to [Front-end Performance Masterclass](https://github.com/voorhoede/performance-masterclass-2017-10).

