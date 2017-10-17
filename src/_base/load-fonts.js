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
        var font300 = new FontFaceObserver('source_sans_pro', { weight: 300 });
        var font400 = new FontFaceObserver('source_sans_pro', { weight: 400 });
        var font300italic = new FontFaceObserver('source_sans_pro', { weight: 300, style: 'italic' });
        var font400italic = new FontFaceObserver('source_sans_pro', { weight: 400, style: 'italic' });
        return Promise.all([
            font300.load(),
            font400.load(),
            font300italic.load(),
            font400italic.load()
        ]);
    }

    function onFontsLoaded() {
        document.documentElement.className += ' fonts-loaded';
        cookie('fontsLoaded', 'true');
    }
}(document));