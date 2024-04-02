const assert = require('assert');
const { Given, Then } = require('@cucumber/cucumber');
const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome'); // Import chrome object from selenium-webdriver

Given('I open LinkedIn', async function () {
    // Set up WebDriver
    let options = new chrome.Options();
    options.addArguments("--headless"); // Run in headless mode
    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

    // Open a webpage (you can replace the URL with any webpage you want to check)
    await driver.get('https://www.linkedin.com/in/eligio-fonseca/');
    this.driver = driver; // Save driver instance to access it in subsequent steps
});

Then('the webpage should have a favicon', async function () {
    // Check if the favicon exists
    let faviconElement = await this.driver.findElement(By.css('link[rel="icon"]'));
    if (faviconElement) {
        console.log("Webpage has a favicon");
    } else {
        console.error("Webpage does not have a favicon");
    }

    // Close the browser
    await this.driver.quit();
});


