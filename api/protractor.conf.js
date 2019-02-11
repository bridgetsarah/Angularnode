exports.config = {
    framework: 'mocha',
    specs: [
        'test/e2e/**/*.spec.js'
    ],
    mochaOpts: {
        enableTimeouts: false
    },
    onPrepare: function() {
        process.env.PORT = 3002
        require('./server')
    }
}