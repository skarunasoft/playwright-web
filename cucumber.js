module.exports = {
  default: {
    require: ['features/step-definitions/*.js', 'hooks/hooks.js'],
    paths: ['features/*.feature'],
    format: ['html:reports/cucumber-report.html',     
      'json:reports/cucumber-report.json',
       'allure-cucumberjs/reporter',
       'rerun:@rerun.txt',
       'progress',
        'summary'
    ],
    dryRun: false,
    parallel: 3,
    retry: 1,
    formatOptions: {
      resultsDir: 'allure-results'
    }
  }
};
