// based on https://css-tricks.com/paint-timing-api/
if ('performance' in window) {
    window.addEventListener('load', function () {
        var paintMetrics = performance.getEntriesByType('paint');
        if (paintMetrics !== undefined && paintMetrics.length > 0){
            console.table(paintMetrics.map(function(metric) {
                return {
                    event: metric.name,
                    startTime: metric.startTime.toFixed(2) + ' ms',
                    duration: metric.duration + ' ms'
                }
            }));
        }
    });
  }