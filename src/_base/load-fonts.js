(function(document) {

    var IS_CAPABLE_BROWSER = (typeof Object.keys === 'function'); // same browser scope as woff
    if (!IS_CAPABLE_BROWSER) {
        return; // no custom fonts
    }

    var script = document.createElement('script');
    script.src = '/assets/js/vendor/fontfaceobserver.js';
    script.async = true;
    script.onload = function () {
        loadFonts().then(onFontsLoaded);
    };
    document.head.appendChild(script);

    function loadFonts() {
        return Promise.all([
            // todo: load all 'source_sans_pro' font variants using FontFaceObserver
            // https://github.com/bramstein/fontfaceobserver#how-to-use
        ]);
    }

    function onFontsLoaded() {
        document.documentElement.className += ' fonts-loaded';
    }
}(document));