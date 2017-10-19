# Use critical CSS

## Solution

* Expose local server to the world wide web using `npm run proxy:public`.
* Generate critical CSS using the online [Critical Path CSS Generator](https://jonassebastianohlsson.com/criticalpathcssgenerator/) with your `ngrok` url. 
* Include the generated CSS in [src/_base/load-css.html](src/_base/load-css.html).

Note: we disabled the `cssLoaded` cookie check in `server.js` in order to always simulate a first page visit.

See [overview of all changes]().

## Exercise

See [11-critical-css](https://github.com/voorhoede/performance-masterclass-2017-10/tree/11-critical-css).

---

Return to [Front-end Performance Masterclass](https://github.com/voorhoede/performance-masterclass-2017-10).

