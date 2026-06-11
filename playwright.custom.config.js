const { devices } = require('@playwright/test');
const { worker } = require('node:cluster');
const { permission } = require('node:process');



const config = {

    testDir: './tests',
    retries: 1,
    workers: 5,
    timeout: 50 * 1000,
    reporter: 'html',//
    expect: {
        timeout: 5000
    },

    projects: [

        {
            name: 'Firefox',
            use: {

                browserName: 'firefox',
                headless: false,
                screenshot: 'on',
                trace: 'retain-on-failure',
                video: 'on',
            }
        },
        {
            name: 'Chrome',
            use: {

                browserName: 'chromium',
                headless: false,
                screenshot: 'on',
                trace: 'retain-on-failure',
                video: 'off',
                ignoreHttpErrors: true,
                permissions: ['geolocation'],
                // ...devices['Galaxy S9+']
                /* viewport: {
                      width: 312,
                      height: 615
                  }
                      */
            }
        },
        {
            name: 'Safari',
            use: {

                browserName: 'webkit',
                headless: false,
                screenshot: 'on',
                trace: 'retain-on-failure',
                video: 'on',
            }
        }

    ]







};


module.exports = config;