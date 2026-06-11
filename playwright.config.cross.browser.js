const { devices } = require('@playwright/test');



const config = {

    testDir: './tests',

    timeout: 50 * 1000,

    reporter: 'html',


    expect: {
        timeout: 5000
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

        },
         {
            name: 'FirefoxBrowser',
            use: {

                browserName: 'firefox',
                headless: false,
                screenshot: 'only-on-failure',
                trace: 'retain-on-failure',
                video: 'on',
            }

        },
        {
            name: 'SafariBrowser',
            use: {

                browserName: 'webkit',
                headless: false,
                screenshot: 'only-on-failure',
                trace: 'retain-on-failure',
                video: 'on',
            }

        },
         {
            name: 'MobileBrowser',
            use: {

                browserName: 'chromium',
                headless: false,
                screenshot: 'only-on-failure',
                trace: 'retain-on-failure',
                video: 'on',
                ...devices['iPhone 14 Pro Max landscape'],
            }

        }

    ]


};


module.exports = config;