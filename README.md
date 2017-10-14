# Client Hints

## Solution

Enable Client Hints in the browser in [src/_base/layout.html](src/_base/layout.html):

```html
<meta http-equiv="Accept-CH" content="DPR, Width, Viewport-Width">
```

Replace `<picture>` elements with `<img>` tags and use only `sizes` in [src/index.html](src/index.html):

```twig
<img alt="Lyft" src="{{ revUrl('/assets/img/expo-lyft-374x281.jpg') }}" class="img-responsive"
     sizes="(min-width: 768px) 25vw, 50vw">
```

Read Client Hints on the server in [lib/client-hints-images.js](lib/client-hints-images.js):

```js
const dpr = toFloat(req.headers.dpr)
const width = toInteger(req.headers.width)
const viewportWidth = toInteger(req.headers['viewport-width'])
```


## Exercise

See [03-client-hints](https://github.com/voorhoede/performance-masterclass-2017-10/tree/03-client-hints).

---

Return to [Front-end Performance Masterclass](https://github.com/voorhoede/performance-masterclass-2017-10).