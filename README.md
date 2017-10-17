# Load CSS async

## Solution

```twig
{#
   * load `/index.css` async for JS user-agents using `loadCSS` (https://github.com/filamentgroup/loadCSS).
   * load `/index.css` blocking for non-JS user-agents.
#}

<noscript><link rel="stylesheet" href="{{ revUrl('/index.css') }}"></noscript>
<script data-load-css>
    {% include "assets/js/vendor/loadcss.min.js" %}
    window.loadCSS('{{ revUrl("/index.css") }}')
</script>
```

## Exercise

See [10-load-css](https://github.com/voorhoede/performance-masterclass-2017-10/tree/10-load-css).

---

Return to [Front-end Performance Masterclass](https://github.com/voorhoede/performance-masterclass-2017-10).

