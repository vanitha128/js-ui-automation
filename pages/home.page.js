'use strict';

const stampit = require('stampit');
const { By } = require('selenium-webdriver');
// xpath of elements in home page
const searchBox = '//*[@id="globalAutosuggest"]/input';
const searchButton = '/html/body/div[1]/header/div[2]/div/div/form/div[2]';
// Task #1 UI automation 
const HomePageApp = stampit
    .conf({
        baseUrl: process.env.BASE_URL,
    })
    .init(function ({ driver }, { stamp }) {
        // open the home page url
        this.open = async function open(location = '') {
            return driver.get(`${stamp.compose.configuration.baseUrl}${location}`);
        };
        // close the driver
        this.close = async function close() {
            return driver.quit();
        };
        // enter the text in search box
        this.enterSearchBox = async function enterSearchBox(txt) {
            await driver.findElement(By.xpath(searchBox)).sendKeys(txt);
        };
        // click search button
        this.clickSearchButton = async function clickSearchButton() {
            await driver.findElement(By.xpath(searchButton)).click();
        };
    });
module.exports = HomePageApp;
