const StoreTest = require("./Tests/storeTest");
const HomeTest = require("./Tests/homeTest");
const ProductsTest = require("./Tests/productsTest");

async function runStorePageTests() {
    const storeTest = new StoreTest();
    await storeTest.testCheckCurrentDay();
}

async function runHomePageTests() {
    const homeTest = new HomeTest();
    await homeTest.testVisitUs();
    await homeTest.testSearch("About");
    await homeTest.testSearch("cOntact");

    homeTest.testAdvancedSearchV2();
}

async function runProductsPageTests() {
    const productsTest = new ProductsTest();
    await productsTest.testRotation("up");
    await productsTest.testRotation("down");
    await productsTest.testPageUp();
    await productsTest.testPageDown();
}

async function myTests() {
    await runStorePageTests();
    await runHomePageTests();
    await runProductsPageTests();
}

myTests()