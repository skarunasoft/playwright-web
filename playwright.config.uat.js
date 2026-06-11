const { devices } = require('@playwright/test');



const config = {

    testDir: './tests',

    retries:1,

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
                video: 'off',
            }

        }
        
    ]


};


module.exports = config;