// based on https://github.com/remy/server-timings/blob/master/index.js

const timings = require('server-timings');

/**
 * New additions: `.startNow` and `.endNow`.
 * These are added so `start` and `end` can also be triggered
 * directly in a function instead of using as middleware.
 */

timings.startNow = (res, opts) => {
  res.locals.timings.start(opts);
};

timings.endNow = (res, opts) => {
  res.locals.timings.end(opts);
};

timings.inRes = (res) => ({
    start (opts) {
        res.locals.timings.start(opts);
    },
    end (opts) {
        res.locals.timings.end(opts);
    },
});

module.exports = timings;