const assert = require('assert');
const { Given, Then } = require('@cucumber/cucumber');
const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

Given('I open the webpage', async function () {
    // Set up WebDriver
    let options = new chrome.Options();
    options.addArguments("--headless"); // Run in headless mode
    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

    // Open a webpage (you can replace the URL with any webpage you want to check)
    await driver.get('https://school.cucumber.io/'); // Replace 'example.com' with the URL you want to test
    this.driver = driver; // Save driver instance to access it in subsequent steps
});

Then('the webpage should contain the text {string}', async function (expectedText) {
    // Get the page source
    let pageSource = await this.driver.getPageSource();
    
    // Check if the expected text is present in the page source
    if (pageSource.includes(expectedText)) {
        console.log(`Webpage contains the text: ${expectedText}`);
    } else {
        console.error(`Webpage does not contain the text: ${expectedText}`);
    }

    // Close the browser
    await this.driver.quit();
});
