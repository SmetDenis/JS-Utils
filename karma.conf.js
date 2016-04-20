/**
 * Karma configuration
 */

module.exports = function (config) {
    config.set({

        /* Base path, that will be used to resolve files and exclude */
        basePath: "",

        /* Frameworks to use */
        frameworks: ["jasmine"],

        /* List of files / patterns to load in the browser */
        files: [
            "src/*.js",
            "tests/*.js"
        ],

        // List of files to exclude
        exclude: [],

        // Possible values: "dots", "progress", "junit", "growl", "coverage"
        reporters: ["dots", "coverage", "coveralls"],

        // Web server port
        port: 9876,

        // Enable / disable colors in the output (reporters and logs)
        colors: true,

        // Level of logging
        // Possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

        // Start these browsers, currently available:
        browsers: ["PhantomJS"],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 20000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        // Source files, that you wanna generate coverage for do not include tests or libraries
        preprocessors: {
            "src/*.js": ["coverage"]
        },

        coverageReporter: {
            type: "lcov",
            dir : "coverage/"
        }

    });
};
