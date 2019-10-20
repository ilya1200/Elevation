//========= Boilerplate =========
const { Builder, By, Key } = require('selenium-webdriver');
const path = require('chromedriver').path;
const chrome = require('selenium-webdriver/chrome');
let service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

const driver = new Builder().forBrowser('chrome').build();

//========= Interesting code =========
async function example() {
    driver.get('https://www.amazon.com/');
    let amazonInput = await driver.findElement(By.id('twotabsearchtextbox'))

    await amazonInput.sendKeys("Computer", Key.RETURN)
    const item = await driver.findElement(By.className("s-image"))

    await item.click()
    driver.quit()
}

function asyncExample() {
    driver.get('https://www.amazon.com/')
        .then(() => driver.findElement(By.id('twotabsearchtextbox')))
        .then(amazonInput => amazonInput.sendKeys("Computer", Key.RETURN))
        .then(() => driver.findElement(By.className("s-image")))
        .then(item => item.click())
        .then(() => driver.quit())
        .catch(e => console.error(e));
}

// example()

asyncExample()

