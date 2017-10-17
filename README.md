# Load fonts async

## Solution

* Change [dist/css/fonts.css](src/dist/css/fonts.css) to [use system font as baseline](https://github.com/voorhoede/performance-masterclass-2017-10/commit/a725dab2668c1da9cb6ab36c10b9ce6672233a2f#diff-c2833293ea247c7f50db4a0b8ec4a6a1).
* Extend [dist/css/fonts.css](src/dist/css/fonts.css) to [use `source_sans_pro` on `.fonts-loaded`](https://github.com/voorhoede/performance-masterclass-2017-10/commit/a725dab2668c1da9cb6ab36c10b9ce6672233a2f#diff-c2833293ea247c7f50db4a0b8ec4a6a1).
* Change [_base/load-fonts.js](src/_base/load-fonts.js) to [add `.fonts-loaded` on `<html>` after all `source_sans_pro` font variants are loaded](https://github.com/voorhoede/performance-masterclass-2017-10/commit/a725dab2668c1da9cb6ab36c10b9ce6672233a2f#diff-b0bcde0de40ae2d31ca2cebb823927f9).

## Solution

See [08-load-fonts](https://github.com/voorhoede/performance-masterclass-2017-10/tree/08-load-fonts)

---

Return to [Front-end Performance Masterclass](https://github.com/voorhoede/performance-masterclass-2017-10).

