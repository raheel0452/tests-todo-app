exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    suites: {
        endtoend: './endtoendtests/*.spec.js',
        api: './apiintegrationtests/*.spec.js'
    },
    directConnect: true,
    capabilities: {
        browserName: 'chrome'
    },
    jasmineNodeOpts: {defaultTimeoutInterval: 60000}
};
