'use strict';

const { setWorldConstructor } = require('cucumber');
const env = require('env-var/env-var');
const HomePageApp = require('../../pages/home.page');
const SearchPageApp = require('../../pages/search.page');
const ResultPageApp = require('../../pages/result.page');
const { buildDriver } = require('../driver-builder');
const Browser = require('./Browser');


function ServiceNSWAppWorld() {
    const BROWSER = env.get('BROWSER').asString();
    const HEADLESS = env.get('HEADLESS').asBoolStrict();
    const BASE_URL = env.get('BASE_URL').asString();
    // set driver(fireforx/chrome based on env variables)
    const driver = buildDriver(BROWSER, HEADLESS);
    // set driver to browser
    this.browser = Browser({ driver });
    // pages
    this.homeApp = HomePageApp({ driver, baseUrl: BASE_URL });
    this.searchApp = SearchPageApp({ driver, baseUrl: BASE_URL });
    this.resultApp = ResultPageApp({ driver, baseUrl: BASE_URL });
}
// Set world construction of cucumber with the above function
setWorldConstructor(ServiceNSWAppWorld);
