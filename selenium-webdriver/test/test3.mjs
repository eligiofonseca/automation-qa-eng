import { describe, it, before, after } from 'mocha';
import { expect } from 'chai';
import { Builder, By, until } from 'selenium-webdriver';

// URL of the webpage to test
const PAGE_URL = 'https://example.com';

describe('Webpage Rendering Test', function() {
    let driver;

    // Before hook to initialize the WebDriver before running tests
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    // After hook to quit the WebDriver after running tests
    after(async function() {
        await driver.quit();
    });

    // Test case to check if the webpage renders properly with an image and/or text
    it('should render webpage with image and/or text', async function() {
        // Navigate to the webpage
        await driver.get(PAGE_URL);

        // Wait for elements to load
        const pageTitleElement = await driver.findElement(By.css('h1'));
        const pageImageElement = await driver.findElement(By.css('img'));

        // Verify the presence of text and image
        const pageTitle = await pageTitleElement.getText();
        const isImageDisplayed = await pageImageElement.isDisplayed();

        // Assertion: Page title should not be empty
        expect(pageTitle).to.not.be.empty;

        // Assertion: Image should be displayed
        expect(isImageDisplayed).to.be.true;
    });
});
