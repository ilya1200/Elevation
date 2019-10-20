//========= Boilerplate =========
const { Builder, By, Key } = require('selenium-webdriver');
const path = require('chromedriver').path;
const chrome = require('selenium-webdriver/chrome');
let service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

const driver = new Builder().forBrowser('chrome').build();

//========= Interesting code =========
function example() {
    driver.get('https://www.google.com/');
    let googleInput = driver.findElement(By.name('q'))

    googleInput
        .then(element => element.sendKeys("who am i?", Key.RETURN))
        .then(sent => {driver.quit()});

    // googleInput.then(function (element) {
    //     let sent = element.sendKeys("who am i?", Key.RETURN)

    //     sent.then(function () {
    //         setTimeout(function () {
    //             driver.quit()
    //         }, 1000)
    //     })

    // })

}

example()
