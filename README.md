# Use image `srcset`

## Solution

* Use `srcset` with a list of comma separated `url` (eg. `expo-lyft-374x281.jpg`) and width in pixel values (eg. `374w`).
* Set `sizes` based on the breakpoint (at `768px`) in the page.

**Before**:

```twig
<img alt="Lyft" src="{{ revUrl('/assets/img/expo-lyft.jpg') }}" class="img-responsive">
```

**After**:

```twig
<img alt="Lyft" src="{{ revUrl('/assets/img/expo-lyft.min.jpg') }}"
				srcset="{{ revUrl('/assets/img/expo-lyft-374x281.jpg') }} 374w,
				  {{ revUrl('/assets/img/expo-lyft-290x218.jpg') }} 290w,
				  {{ revUrl('/assets/img/expo-lyft-186x139.jpg') }} 186w"
				sizes="(min-width: 768px) 25vw, 50vw"
				class="img-responsive">
```

## Exercise

See [01-srcset](https://github.com/voorhoede/performance-masterclass-2017-10)/tree/01-srcset).

---

Return to [Front-end Performance Masterclass](https://github.com/voorhoede/performance-masterclass-2017-10).