'use strict';

const stampit = require('stampit');
const { URL } = require('url');
// Browser and its basic functions
const Browser = stampit({
  init({ driver }) {
    // set window size
    this.setWindowSize = async function setWindowSize(width, height) {
      return driver.manage().window().setRect({ width, height });
    };
    // get current url of browser
    this.getCurrentUrl = async function getCurrentUrl() {
      return new URL(await driver.getCurrentUrl());
    };
    // delete all cookies
    this.deleteAllCookies = async function deleteAllCookies() {
      return driver.manage().deleteAllCookies();
    };
  },
});


module.exports = Browser;
