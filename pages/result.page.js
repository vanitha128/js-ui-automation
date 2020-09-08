'use strict';

const stampit = require('stampit');
const { By, until } = require('selenium-webdriver');
const titleText = '/html/body/div[1]/header[2]/div/h1';
const searchBox = '//*[@id="locatorTextSearch"]';
const searchButton = '/html/body/div[1]/main/div[2]/article/section/div/div/div/div/div/form/div/div[2]/div/button';
const numberOfServiceLocationsInSearch = '/html/body/div[1]/main/div[2]/article/section/div/div/div/div/div/div[2]/div[1]/div/div/h2';
const serviceLocationText = '//*[@id="locatorListView"]/div/div/div/div[<replace>]/a';
const locatorResultList = '//*[@id="locatorListView"]/div/div/div'
// Task #1 UI automation 
const ResultPageApp = stampit
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
        // get the title of this page
        this.getTitleText = async function getTitleText() {
            let titleObject = await driver.findElement(By.xpath(titleText));
            await driver.wait(until.elementIsVisible(titleObject), 4000);
            let actualResult = await titleObject.getText();
            return actualResult
        };
        // key in text in search input
        this.enterSearchBox = async function enterSearchBox(txt) {
            await driver.findElement(By.xpath(searchBox)).sendKeys(txt);
        };
        // click search button
        this.clickSearchButton = async function clickSearchButton() {
            await driver.sleep(5000);
            await driver.findElement(By.xpath(searchButton)).click();
            await driver.sleep(5000);
        };
        // get fifith element text
        // iterate through locator results and find the Marickville centre

        this.getNumberOfServiceLocationsInSearch = async function getNumberOfServiceLocationsInSearch() {
            let actualResult = await driver.findElement(By.xpath(numberOfServiceLocationsInSearch)).getText();
            let numberFromString = actualResult.replace(/[^\d.]/g, '');
            let searchResultnumber = parseInt(numberFromString, 10);
            return searchResultnumber;

        };

        this.getNthServiceLocationText = async function getNthServiceLocationText(n) {
            let nthServiceLocationText = serviceLocationText.replace('<replace>', n);
            let elementObject = await driver.findElement(By.xpath(nthServiceLocationText));
            await driver.wait(until.elementIsVisible(elementObject), 15000);
            let actualResult = await elementObject.getText();
            return actualResult;
        };
    });


module.exports = ResultPageApp;
