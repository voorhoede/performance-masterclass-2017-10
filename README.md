# H2 Server Push

## Solution

Improve the time to First Contentful Paint (FCP) of the homepage - by sending assets along with the page request - using H2 Server Push in [lib/server-push-assets.js](lib/server-push-assets.js):

```js
const assets = [
    ... findAssets(html, 'link[rel="stylesheet"]', 'href'),
    ... findAssets(html, 'script[src]', 'src'),
]
assets.forEach(url => pushAsset(res, url, encoding))
```

Time to FCP is better when combined with Resource Hints in [src/_base/layout.html](src/_base/layout.html):

```twig
<link rel="preload" href="{{ revUrl('/index.js') }}" as="script">
<link rel="preload" href="{{ revUrl('/dist/fonts/sourcesanspro-regular.woff2') }}" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="{{ revUrl('/dist/fonts/sourcesanspro-light.woff2') }}" as="font" type="font/woff2" crossorigin>
```

Note: be sure to switch to the H2 version on [https://localhost:6523/](https://localhost:6523/) and add a security exception for the self-signed certificate.


## Exercise

See [05-server-push](https://github.com/voorhoede/performance-masterclass-2017-10/tree/05-server-push).

---

Return to [Front-end Performance Masterclass](https://github.com/voorhoede/performance-masterclass-2017-10).