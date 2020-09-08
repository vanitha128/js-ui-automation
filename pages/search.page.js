'use strict';
const stampit = require('stampit');
const { By, until } = require('selenium-webdriver');
const searchTitle = '/html/body/div[1]/header[2]/div/h1';
const nthLink = '//*[@id="search"]/div/div/div[<replace>]/h3/a';
// Task #1 UI automation
const SearchPageApp = stampit
    .conf({
        baseUrl: process.env.BASE_URL,
    })
    .init(function ({ driver }, { stamp }) {
        // open page url
        this.open = async function open(location = '') {
            return driver.get(`${stamp.compose.configuration.baseUrl}${location}`);
        };
        // close the driver
        this.close = async function close() {
            return driver.quit();
        };
        // get the search title text
        this.getSearchTitle = async function getSearchTitle() {
            let searchTitleObject = await driver.findElement(By.xpath(searchTitle));
            await driver.wait(until.elementIsVisible(searchTitleObject), 4000);
            let actualResult = await searchTitleObject.getText();
            return actualResult
        };
        // Text of the Nth link in search result
        this.getNthLinkText = async function getNthLinkText(n) {
            let nthLinkText = nthLink.replace('<replace>', n);
            let actualResult = await driver.findElement(By.xpath(nthLinkText)).getText();
            return actualResult;
        };
        // click the Nth link in search result
        this.clickNthLink = async function clickNthLink(n) {
            let nthLinkText = nthLink.replace('<replace>', n);
            await driver.findElement(By.xpath(nthLinkText)).click();
            await driver.sleep(5000);
        };
    });


module.exports = SearchPageApp;
