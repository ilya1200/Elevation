const SeleniumInfra = require("../Infra/SeleniumInfra");

class ProductsPage {
    constructor() {
        this.url = "https://cakes-automation-course.herokuapp.com/products.html";
        this.infraDriver = new SeleniumInfra();
        this.locators = {
            rowCakesHeadlines: {
                locator: (rowNumber) => `#productsTable tr.productsTableRow:nth-child(${rowNumber}) > th.productsTableData h3.ItemContainerHeadline`,
                locatorType: "css"
            },
            arrowButton: {
                locator: (direction) => `arrow-${direction}`,
                locatorType: "id"
            }
        };
    }




    async pressUp(cakesBefore, cakesAfter) {
        const isSucceed = await this.rotate(cakesBefore, cakesAfter, "up");
        if (isSucceed) {
            console.log(`ProductsPage > pressUp([${cakesBefore}],[${cakesAfter}]) -- TEST PASS`);
        } else {
            console.error(new Error(`ProductsPage > pressUp([${cakesBefore}],[${cakesAfter}]) -- TEST FAIL`));
        }
    }

    async pressDown(cakesBefore, cakesAfter) {
        const isSucceed = await this.rotate(cakesBefore, cakesAfter, "down");
        if (isSucceed) {
            console.log(`ProductsPage > pressUp([${cakesBefore}],[${cakesAfter}]) -- TEST PASS`);
        } else {
            console.error(new Error(`ProductsPage > pressDown([${cakesBefore}],[${cakesAfter}]) -- TEST FAIL`));
        }
    }

    /**
 * 
 *  HELPERS
 */

    compareCakesLists(beforeList, afterList) {
        if (beforeList.length !== afterList.length) {
            return false;
        }

        for (let i in beforeList) {
            if (beforeList[i].toLowerCase() !== afterList[i].toLowerCase()) {
                return false;
            }
        }

        return true;
    }

    async rotate(cakesBefore, cakesAfter, direction = "up") {
        let row1 = await this.getCakesFromRow(1);
        let isTheSame = this.compareCakesLists(cakesBefore, row1);
        if (!isTheSame) {

            return false;
        }

        await this.clickArrow(direction);

        row1 = await this.getCakesFromRow(1);
        isTheSame = this.compareCakesLists(cakesAfter, row1);
        if (!isTheSame) {
            return false;
        }

        return true;
    }

    async clickArrow(direction = "up") {
        direction = direction.toLowerCase();
        const locator = this.locators.arrowButton.locator(direction);
        const locatorType = this.locators.arrowButton.locatorType;
        await this.infraDriver.clickElement(locator, locatorType);
    }

    async getCakesFromRow(rowNumber) {
        const locator = this.locators.rowCakesHeadlines.locator(rowNumber);
        const locatorType = this.locators.rowCakesHeadlines.locatorType;
        const cakesFromRow = [];

        try {
            const rowCakesHeadlinesElems = await this.infraDriver.findElementListBy(locator, locatorType);
            for (let rowCakeHeadline of rowCakesHeadlinesElems) {
                const cakeTitle = await this.infraDriver.getTextFromElement(undefined, undefined, rowCakeHeadline);
                // console.log(`ProductsPage > getCakesFromRow(${rowNumber}): Added Cake : (${cakeTitle})`)
                cakesFromRow.push(cakeTitle);
            }

            return cakesFromRow;
        } catch (error) {
            console.error(`ProductsPage > getCakesFromRow(${rowNumber}) FAIL`);
            console.error(error);
            return Promise.reject();
        }
    }

    async openProductsPage() {
        try {
            await this.infraDriver.getURL(this.url);
        } catch (error) {
            console.error("ProductsPage > openHomePage() FAIL:");
            console.error(error);
        }
    }

    async closeProductsPage() {
        try {
            await this.infraDriver.close();
        } catch (error) {
            console.error("ProductsPage > closeHomePage() FAIL:");
            console.error(error);
        }
    }
}

module.exports = ProductsPage;