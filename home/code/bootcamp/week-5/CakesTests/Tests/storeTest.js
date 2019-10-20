const StorePage = require("../Pages/store");

class StoreTest {
    constructor() {
    }

    async testCheckCurrentDay() {
        const storePage = new StorePage();

        console.log("StoreTest > testCorrectDayMarked()")
        await storePage.openStorePage();
        const isValid = await storePage.checkCurrentDay();
        if (isValid) {
            console.log("TEST PASS");
        } else {
            console.log("TEST FAIL");
        }
        await storePage.closeStorePage();
    }
}

module.exports = StoreTest;