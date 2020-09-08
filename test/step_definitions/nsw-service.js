const assert = require('assert');
const { Given, When, Then } = require('cucumber');

// Task #1: UI Automation Scenario #2
Given('I am a user navigating to the {string}', async function (url) {
  this.homeApp.open();
});

When('I search for {string}', async function (txt) {
  await this.homeApp.enterSearchBox(txt);
  await this.homeApp.clickSearchButton();

});

When('I am re-directed to the search results page', async function () {
  let actualResult = await this.searchApp.getSearchTitle();
  assert.equal(actualResult, 'Search');
});

When('I click on the {string} link', async function (string) {

  let searchResultNumber = 5;
  let isTextMatched = false;
  let actualResult = "";
  for (let i = 1; i <= searchResultNumber; i++) {
    actualResult = await this.searchApp.getNthLinkText(i);
    console.log(actualResult);
    if (actualResult == string) {
      await this.searchApp.clickNthLink(i);
      isTextMatched = true;
      break;
    }
  }
  if (!isTextMatched) {
    assert.fail('Given text is not found');
  }
});

Then('I am re-directed to the {string} page', async function (verificationTxt) {
  let actualResult = await this.resultApp.getTitleText();
  assert.equal(actualResult, verificationTxt);
});
