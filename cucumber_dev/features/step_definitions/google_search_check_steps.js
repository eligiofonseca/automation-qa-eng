const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, Key, Capabilities } = require('selenium-webdriver');
const { AfterAll } = require('@cucumber/cucumber');


// Dynamically import chai
const chai = require('chai');
const { expect } = chai;

require("chromedriver");

// driver setup
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();

Given('I am on the Google search page', async function () {
    await driver.get('http://www.google.com');
});

When('I search for {string}', async function (searchTerm) {
    const element = await driver.findElement(By.name('q'));
    element.sendKeys(searchTerm, Key.RETURN);
    element.submit();
});

Then('the page title should start with {string}', {timeout: 60 * 1000}, async function (searchTerm) {
    const title = await driver.getTitle();
    const isTitleStartWithCheese = title.toLowerCase().lastIndexOf(`${searchTerm}`, 0) === 0;
    expect(isTitleStartWithCheese).to.equal(true);
});

AfterAll(async function(){
    await driver.quit();
});

//https://cucumber.io/docs/guides/browser-automation/?lang=javascript