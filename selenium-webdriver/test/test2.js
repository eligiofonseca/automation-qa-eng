const {Builder, By, Key, until} = require('selenium-webdriver');
(async function example() {
let driver = await new Builder().forBrowser("MicrosoftEdge").build();
try {
await driver.get('http://www.google.com/ncr');
await driver.findElement(By.name('q')).sendKeys('You did it!!', Key.RETURN);
await driver.wait(until.titleIs('You did it!! - Google Search'), 1000);
} finally {
await driver.quit();
}
})();


(async function example() {
let driver = await new Builder().forBrowser("firefox").build();
try {
await driver.get('http://www.google.com/ncr');
await driver.findElement(By.name('q')).sendKeys('You did it!!', Key.RETURN);
await driver.wait(until.titleIs('You did it!! - Google Search'), 1000);
} finally {
await driver.quit();
}
})();


(async function example() {
let driver = await new Builder().forBrowser("chrome").build();
try {
await driver.get('http://www.google.com/ncr');
await driver.findElement(By.name('q')).sendKeys('You did it!!', Key.RETURN);
await driver.wait(until.titleIs('You did it!! - Google Search'), 1000);
} finally {
await driver.quit();
}
})();