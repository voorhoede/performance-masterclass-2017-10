# Resource Hints

## Solution

Improve the time to First Contentful Paint (FCP) of the homepage by adding Resource Hints to [src/_base/layout.html](src/_base/layout.html):

```twig
<link rel="preload" href="{{ revUrl('/index.js') }}" as="script">
<link rel="preload" href="{{ revUrl('/dist/fonts/sourcesanspro-regular.woff2') }}" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="{{ revUrl('/dist/fonts/sourcesanspro-light.woff2') }}" as="font" type="font/woff2" crossorigin>
```

## Exercise

See [04-resource-hints](https://github.com/voorhoede/performance-masterclass-2017-10/tree/04-resource-hints).

---

Return to [Front-end Performance Masterclass](https://github.com/voorhoede/performance-masterclass-2017-10).