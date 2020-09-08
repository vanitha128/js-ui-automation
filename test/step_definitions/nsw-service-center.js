const assert = require('assert');
const { Given, When, Then } = require('cucumber');

// Task #1: UI Automation Scenario #2
Given('I am a user on the "Find a Service NSW location" page', async function () {
    this.resultApp.open("service-centre");
});

When('I search for {string} in the "Search by suburb, postcode or current location" field', async function (txt) {
    await this.resultApp.enterSearchBox(txt);
    await this.resultApp.clickSearchButton();
});

Then('I should see {string} and its address returned in the results', async function (verificationTxt) {
    let searchResultNumber = await this.resultApp.getNumberOfServiceLocationsInSearch();
    let isTextMatched = false;
    let actualResult = "";
    for (let i = 1; i <= searchResultNumber; i++) {
        actualResult = await this.resultApp.getNthServiceLocationText(i);
        console.log(actualResult);
        if (actualResult == verificationTxt) {
            isTextMatched = true;
            break;
        }
    }
    if (!isTextMatched) {
        assert.fail('Link not found');
    }
    assert.equal(actualResult, verificationTxt);
});









