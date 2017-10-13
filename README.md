## Solution

* Use `<picture>` elements with a `<source>` for each available image.
* Set a `media` query on each `<source>` to load the optimal size.
* Set `[type="image/webp"]` on each `webp` `<source>`.


**Before**:

```html
<img alt="Lyft" src="{{ revUrl('/assets/img/expo-lyft.min.jpg"') }}
     srcset="{{ revUrl('/assets/img/expo-lyft-374x281.jpg 374w') }},
             {{ revUrl('/assets/img/expo-lyft-290x218.jpg 290w') }},
             {{ revUrl('/assets/img/expo-lyft-186x139.jpg 186w') }}"
     sizes="(min-width: 768px) 25vw, 50vw"
     class="img-responsive">
```

**After**:

```html
<picture>
    <source type="image/webp" srcset="{{ revUrl('/assets/img/expo-lyft-290x218.webp') }}" 
            media="(min-width:999px)">
    <source type="image/webp" srcset="{{ revUrl('/assets/img/expo-lyft-186x140.webp') }}"
            media="(min-width:768px) and (max-width:999px)">
    <source type="image/webp" srcset="{{ revUrl('/assets/img/expo-lyft-374x281.webp') }}">
    <source srcset="{{ revUrl('/assets/img/expo-lyft-290x218.jpg') }}"
            media="(min-width:999px)">
    <source srcset="{{ revUrl('/assets/img/expo-lyft-186x140.jpg') }}" 
            media="(min-width:768px) and (max-width:999px)">
    <source srcset="{{ revUrl('/assets/img/expo-lyft-374x281.jpg') }}">
    <img alt="Lyft" src="{{ revUrl('/assets/img/expo-lyft-374x281.jpg') }}" class="img-responsive">
</picture>
```

## Exercise

See [02-picture-solution](https://github.com/voorhoede/performance-masterclass-2017-10/tree/02-picture).

---

Return to [Front-end Performance Masterclass](https://github.com/voorhoede/performance-masterclass-2017-10).