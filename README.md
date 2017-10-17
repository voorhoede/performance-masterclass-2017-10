# Font display

## Solution

Use `font-display` to remove the Flash of Invisible Text (FOIT) in [src/dist/css/fonts.css](src/dist/css/fonts.css):

```css
@font-face {
    font-family: 'Glyphicons Halflings';
    src: url('/dist/fonts/glyphicons-halflings-regular.eot');
    src: url('/dist/fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('/dist/fonts/glyphicons-halflings-regular.woff2') format('woff2'), url('/dist/fonts/glyphicons-halflings-regular.woff') format('woff'), url('/dist/fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('/dist/fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');
    font-display: block;
}

@font-face {
    font-family: 'source_sans_pro';
    src: url('/dist/fonts/sourcesanspro-it-subsetted.woff2') format('woff2'),
    url('/dist/fonts/sourcesanspro-it-subsetted.woff') format('woff');
    font-weight: 400;
    font-style: italic;
    font-display: swap;
}
```

Note: Use `font-display: block` for icons since they have no fallback.

## Exercise

See [07-font-display](https://github.com/voorhoede/performance-masterclass-2017-10/tree/07-font-display).

---

Return to [Front-end Performance Masterclass](https://github.com/voorhoede/performance-masterclass-2017-10).

