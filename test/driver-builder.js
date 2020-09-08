'use strict';

const { Builder } = require('selenium-webdriver');
let chrome = require('selenium-webdriver/chrome');
let firefox = require('selenium-webdriver/firefox');

const driverBuilder = (HEADLESS, BROWSER) => {
  const builder = new Builder()
    .forBrowser(BROWSER)
    ;
  if (BROWSER == 'chrome' && HEADLESS) {
    builder.setChromeOptions(new chrome.Options().headless())
  }
  if (BROWSER == 'firefox' && HEADLESS) {
    builder.setFirefoxOptions(new firefox.Options().headless())
  }
  return builder.build();
};


// Driver
const createDriver = driverBuilder;

const buildDriver = (BROWSER, HEADLESS) => {
  return createDriver(HEADLESS, BROWSER);
};


module.exports = {
  driverBuilder,
  buildDriver,
};
