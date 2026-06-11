const { devices } = require('@playwright/test');



const config = {

    testDir: './tests_ts',
    //fullyParallel: true,

    timeout: 50 * 1000,

   reporter: [
        ['line'],
        ['allure-playwright']
    ],


    workers: 5,


    expect: {
        timeout: 20000
    },


    projects: [

        {
            name: 'ChromeBrowser',
            use: {

                browserName: 'chromium',
                headless: false,
                screenshot: 'only-on-failure',
                trace: 'retain-on-failure',
                video: 'on',
            }

        }

    ]


};


module.exports = config;