const { After, Before } = require('cucumber');

// Before: delete the cookies
Before(async function () {
  return this.browser.deleteAllCookies();
});
// Before: set window size
Before(async function () {
  // make sure window is desktop size
  return this.browser.setWindowSize(1366, 768);
});

// After: driver quit and delete cookies
After(async function () {
  await this.browser.deleteAllCookies();
  return this.resultApp.close();
});
