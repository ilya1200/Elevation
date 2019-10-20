const SeleniumInfra = require("../Infra/SeleniumInfra");

class HomePage {
    constructor() {
        this.url = "https://cakes-automation-course.herokuapp.com/index.html";
        this.infraDriver = new SeleniumInfra();
        this.locators = {
            visitUs: {
                locator: "//button[contains(text(),'Visit')]",
                locatorType: "xpath"
            },
            searchBox: {
                locator: "inputSearch",
                locatorType: "id"
            },
            searchButton: {
                locator: "inputSearchSubmit",
                locatorType: "id"
            },
            advSearchBtn: {
                locator: "myBtn",
                locatorType: "id"
            },
            cakeTypesCheckBox: {
                locator: cakeType => `input.cakeTypes[value='${cakeType}']`,
                locatorType: "css"
            },
            cakeRatesCheckBox: {
                locator: cakeRate => `input.cakeRates[value='${cakeRate}']`,
                locatorType: "css"
            },
            dateOfUpload: {
                locator: "input.inputDate",
                locatorType: "css"
            },
            allTheseWords: {
                locator: "input1",
                locatorType: "id"
            },
            exactWords: {
                locator: "input2",
                locatorType: "id"
            },
            formBtnSearch: {
                locator: "myBtnForm",
                locatorType: "id"
            },
            advancedSearchResults: {
                locator: "div.searchedItem",
                locatorType: "css"
            }

        }
    }

    async search(input) {
        try {
            await this.fillSearchBox(input);
            await this.clickSearch();
            const isValid = await this.isClickResultUrlContains(input + ".html");
            if (isValid) {
                console.log(`HomePage > search(${input}) -- TEST PASS`);
            } else {
                console.log(`HomePage > search(${input}) -- TEST FAIL`);
            }
        } catch (error) {
            console.error(`HomePage > search(${input}) -- ERROR`);
            console.error(error);
        }
    }

    async advancedSearch(cakeTypes = [], cakeRates = [], dateOfUpload = "", allTheseWords = "", exactWords = "") {
        try {
            await this.clickAdvancedSearch();
            await this.fillTheFormWith(cakeTypes, cakeRates, dateOfUpload, allTheseWords, exactWords);
            await this.clickFormBtnSearch();
            const advancedSearchOutput = await this.getAdvancedSearchResults();
            const isValid = this.validateAdvSearchOutput(advancedSearchOutput, cakeTypes, cakeRates, dateOfUpload, allTheseWords, exactWords);

            if (isValid) {
                console.log(`HomePage >advancedSearch([${cakeTypes}],[${cakeRates}],${dateOfUpload},${allTheseWords},${allTheseWords},${exactWords}) -- TEST PASS`);
            } else {
                console.log(`HomePage >advancedSearch([${cakeTypes}],[${cakeRates}],${dateOfUpload},${allTheseWords},${allTheseWords},${exactWords}) -- TEST FAIL`);
            }

        } catch (error) {
            console.error(new Error(`HomeTest > testAdvancedSearch(${inputsData})  FAIL`));
            console.error(error);
        }
    }

    /**
     * 
     *  HELPERS
     */

    validateAdvSearchOutput(advancedSearchOutput, cakeTypes = [], cakeRates = [], dateOfUpload = "", allTheseWords = "", exactWords = "") {
        for (let cakeType of cakeTypes) {
            if (advancedSearchOutput.search(cakeType) < 0) {
                console.error(`Output not contains , ${cakeType}`);
                return false;
            }
        }

        for (let cakeRate of cakeRates) {
            if (advancedSearchOutput.search(cakeRate) < 0) {
                console.error(`Output not contains , ${cakeRate}`);
                return false;
            }
        }

        if (allTheseWords) {
            if (advancedSearchOutput.search(allTheseWords) < 0) {
                console.error(`Output not contains , ${allTheseWords}`);
                return false;
            }
        }

        if (exactWords) {
            if (advancedSearchOutput.search(exactWords) < 0) {
                console.error(`Output not contains , ${exactWords}`);
                return false;
            }
        }

        return true;
    }

    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    async fillTheFormWith(cakeTypes = [], cakeRates = [], dateOfUpload = "", allTheseWords = "", exactWords = "") {
        for (let cakeType of cakeTypes) {
            const cakeTypesCheckBox = this.locators.cakeTypesCheckBox;
            const cakeTypeCap = this.capitalize(cakeType);
            await this.infraDriver.clickElement(cakeTypesCheckBox.locator(cakeTypeCap), cakeTypesCheckBox.locatorType);
        }

        for (let cakeRate of cakeRates) {
            const cakeRatesCheckBox = this.locators.cakeRatesCheckBox;
            await this.infraDriver.clickElement(cakeRatesCheckBox.locator(cakeRate), cakeRatesCheckBox.locatorType);
        }

        await this.infraDriver.write(dateOfUpload, this.locators.dateOfUpload.locator, this.locators.dateOfUpload.locatorType);
        await this.infraDriver.write(allTheseWords, this.locators.allTheseWords.locator, this.locators.allTheseWords.locatorType);
        await this.infraDriver.write(exactWords, this.locators.exactWords.locator, this.locators.exactWords.locatorType);
    }

    async getAdvancedSearchResults() {
        return this.infraDriver.getTextFromElement(this.locators.advancedSearchResults.locator, this.locators.advancedSearchResults.locatorType)
    }

    async clickFormBtnSearch() {
        await this.infraDriver.clickElement(this.locators.formBtnSearch.locator, this.locators.formBtnSearch.locatorType);
    }

    async clickAdvancedSearch() {
        await this.infraDriver.clickElement(this.locators.advSearchBtn.locator, this.locators.advSearchBtn.locatorType);
    }

    async clickSearch() {
        await this.infraDriver.clickElement(this.locators.searchButton.locator, this.locators.searchButton.locatorType);
    }

    async fillSearchBox(input) {
        await this.infraDriver.write(input, this.locators.searchBox.locator, this.locators.searchBox.locatorType);
    }

    async clickVisitUs() {
        await this.infraDriver.clickElement(this.locators.visitUs.locator, this.locators.visitUs.locatorType);
    }

    async isClickResultUrlContains(expectedPage) {
        expectedPage = expectedPage.toLowerCase();
        try {
            return await this.infraDriver.URLvalidation(expectedPage);
        } catch (error) {
            console.error(`HomePage > openHomePage(${expectedPage}) FAIL:`);
            console.error(error);
        }
    }

    async openHomePage() {
        try {
            await this.infraDriver.getURL(this.url);
        } catch (error) {
            console.error("HomePage > openHomePage() FAIL:");
            console.error(error);
        }
    }

    async closeHomePage() {
        try {
            await this.infraDriver.close();
        } catch (error) {
            console.error("HomePage > closeHomePage() FAIL:");
            console.error(error);
        }
    }
}

module.exports = HomePage;