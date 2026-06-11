const { devices } = require('@playwright/test');



const config = {

    testDir: './methods',

    timeout: 50 * 1000,

    // reporter: 'html',//

    reporter: [
        ['line'],
        ['allure-playwright']
    ],


    expect: {
        timeout: 5000
    },

    use: {

        browserName: 'chromium',
        headless: false,
        screenshot: 'on',
        trace: 'retain-on-failure',
        video: 'on',
    }




};


module.exports = config;