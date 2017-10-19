# Use critical CSS - Bonus

## Solution

* Generate critical CSS for each page automatically based on a static version of each page. See [scripts/critical.js](scripts/critical.js) and `critical` script in [package.json](package.json).
* Inline generated critical CSS for each page using `{{ criticalCss | safe }}` in [src/_base/load-css.html](src/_base/load-css.html).

See [overview of all changes]().


## Exercise

See [11-critical-css](https://github.com/voorhoede/performance-masterclass-2017-10/tree/11-critical-css).

---

Return to [Front-end Performance Masterclass](https://github.com/voorhoede/performance-masterclass-2017-10).