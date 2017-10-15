// this is a hack, use a robust progressively enhancement strategy for your project
[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
    img.setAttribute('src', img.getAttribute('data-src'));
});