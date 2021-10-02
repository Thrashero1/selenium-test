const webdriver = require('selenium-webdriver')
let driver = new webdriver.Builder().forBrowser('chrome').build();
driver.manage().setTimeouts( { implicit: 20000 } );
const { assert } = require('chai');

class GlobalPage {
    constructor() {
        global.driver = driver
        global.assert = assert
    }

    async loadPage(url) {
        await driver.get(url)
    }

    
}

module.exports =  GlobalPage