# Load fonts async - Bonus

## Solution

* Include [assets/js/vendor/cookie.min.js](src/assets/js/vendor/cookie.min.js) helper in [_base/layout.html](src/_base/layout.html).
* Set `fontsLoaded` cookie on `fontsLoaded` in [_base/load-fonts.html](src/_base/load-fonts.html).
* Pass `fontsLoaded` cookie to template in [server.js](server.js).
* Set `.fonts-loaded` on `<html>` if `fontsLoaded` cookie is set in [_base/layout.html](src/_base/layout.html).

See [overview of all changes](https://github.com/voorhoede/performance-masterclass-2017-10/commit/78a1fbdc643aadc4e6b9ce8ddcf493b5e8d787c1).

## Exercise

See [08-load-fonts](https://github.com/voorhoede/performance-masterclass-2017-10/tree/08-load-fonts)

---

Return to [Front-end Performance Masterclass](https://github.com/voorhoede/performance-masterclass-2017-10).

