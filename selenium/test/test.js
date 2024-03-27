const { Builder, By } = require("selenium-webdriver");
//  cd /c/Users/lf549/selenium
//  node test/test.js


// Function to perform a test for a given browser and URL
async function performTest(browser, url) {
  let driver = await new Builder().forBrowser(browser).build();
  try {
    await driver.get(url);
    
    // Test 1: Verify page title
    const title = await driver.getTitle();
    console.log(`Page title for ${browser}:`, title);

    // Test 2: Verify presence of h1 element
    const headingElement = await driver.findElement(By.tagName("h1"));
    const headingText = await headingElement.getText();
    console.log(`Heading text for ${browser}:`, headingText);

    /* // Test 3: Verify presence of a specific link
    const linkElement = await driver.findElement(By.linkText("Read more"));
    const linkText = await linkElement.getText();
    console.log(`Link text for ${browser}:`, linkText); */

    // Test 4: Verify presence of an image
    const imageElement = await driver.findElement(By.tagName("img"));
    const imageUrl = await imageElement.getAttribute("src");
    console.log(`Image URL for ${browser}:`, imageUrl);

    // Test 5: Verify presence of a specific paragraph element
    const paragraphElement = await driver.findElement(By.tagName("p"));
    const paragraphText = await paragraphElement.getText();
    console.log(`Paragraph text for ${browser}:`, paragraphText);

    // Test 6: Verify presence of a specific button element
    const buttonElement = await driver.findElement(By.tagName("button"));
    const buttonText = await buttonElement.getText();
    console.log(`Button text for ${browser}:`, buttonText);

    // Test 7: Verify page URL
    const currentUrl = await driver.getCurrentUrl();
    console.log(`Current URL for ${browser}:`, currentUrl);

    // Add more basic tests as needed

  } finally {
    await driver.quit();
  }
}

// Array of test configurations (browser and URL pairs)
const tests = [
  { browser: "chrome", url: "https://www.fakespot.com" },
  { browser: "firefox", url: "https://www.cnet.com" },
  { browser: "MicrosoftEdge", url: "https://eligiofonseca.github.io/senior-engineer/about.html" }
];

// Execute each test
async function runTests() {
  for (const test of tests) {
    await performTest(test.browser, test.url);
  }
}

// Run the tests
runTests();


