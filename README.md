# Load JS

## Solution

* [Concatenate all scripts into `index.js`](scripts/scripts.js).
* [Load `index.js` in head using `defer`](src/_base/layout.html).

This prevents `defer` race issues in <IE10 and prevents queueing of multiple scripts.

## Exercise

See [09-load-js](https://github.com/voorhoede/performance-masterclass-2017-10/tree/09-load-js)

---

Return to [Front-end Performance Masterclass](https://github.com/voorhoede/performance-masterclass-2017-10).

