# Resource Hints

## Bonus

Load the `/getting-started/` page using Resource Hints before the user hits the "Download Bootstrap" call-to-action button on the homepage in [src/_base/layout.html](src/_base/layout.html):

```twig
<link rel="prefetch" href="/getting-started/" as="html">
```

The `Accept` headers are not properly set to `text/html` so [lib/accepts-html.js](lib/accepts-html.js) needs to check if the `purpose` is `prefetch` as a workaround.

And in addition the `/getting-started/` page needs to be cacheable (otherwise it's prefetched for nothing):

```js
// in server.js
app.get('/getting-started/', (req, res, next) => {
    res.setHeader('Cache-Control', 'max-age=30');
    next();
})
```

## Exercise

See [04-resource-hints](https://github.com/voorhoede/performance-masterclass-2017-10/tree/04-resource-hints).

---

Return to [Front-end Performance Masterclass](https://github.com/voorhoede/performance-masterclass-2017-10).