const SeleniumInfra = require("../Infra/SeleniumInfra");
const moment = require('moment');

class StorePage {
    constructor() {
        this.url = "https://cakes-automation-course.herokuapp.com/store.html";
        this.infraDriver = new SeleniumInfra();
        this.locators = {
            today: {
                locator: currentDay => `//th[contains(text(),'${currentDay}')]`,
                locatorType: "xpath"
            },
            todayInfo: {
                locator: currentDay => `//th[contains(text(),'${currentDay}')]/../th[@class='todayInfo']`,
                locatorType: "xpath"
            }
        }
    }

    async checkCurrentDay() {
        const expectedColor = "rgba(212, 126, 21, 1)";
        const currentDay = moment().format('dddd');
        console.log("Today is " + currentDay);

        try {
            const todayElem = await this.infraDriver.findElementBy(this.locators.today.locator(currentDay), this.locators.today.locatorType);
            const todayInfoElem = await this.infraDriver.findElementBy(this.locators.todayInfo.locator(currentDay), this.locators.todayInfo.locatorType);
            const todayColor = await todayElem.getCssValue("color");
            const todayInfoColor = await todayInfoElem.getCssValue("color");

            if ((todayColor === todayInfoColor) && (todayColor === expectedColor)) {
                return true;
            }

            return false;
        } catch (error) {
            console.error("StorePage > checkCurrentDay() FAIL:");
            console.error(error);
        }
    }


    async openStorePage() {
        try {
            await this.infraDriver.getURL(this.url);
        } catch (error) {
            console.error("StorePage>openStorePage() FAIL:");
            console.error(error);
        }
    }

    async closeStorePage() {
        try {
            await this.infraDriver.close();
        } catch (error) {
            console.error("StorePage>openStorePage() FAIL:");
            console.error(error);
        }
    }
}

module.exports = StorePage;