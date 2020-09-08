'use strict'
var reporter = require('cucumber-html-reporter');

var options = {
    theme: 'bootstrap',
    jsonFile: 'cucumber_report.json',
    output: 'cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "Environment": "NSW service center",
        "Browser": "Chrome",
        "Platform": "Unix",
        "Parallel": "Scenarios",
        "Executed": "Local"
    }
};

reporter.generate(options);