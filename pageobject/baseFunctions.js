const {Builder, By, Key, until} = require('selenium-webdriver');
const global = require('../pageobject/globalPage')
const webdriver = require('selenium-webdriver')

class BaseFuntions extends global {

    async verifyPage (verify) {
        let checkTitle = driver.getTitle().then(text => {
            return text
        })
        await assert.strictEqual(await checkTitle, verify)
    }

    async goToNews() {
         await driver.findElement(By.id('listbutton')).click()
         await driver.findElement(By.linkText("News")).click()
        let title =  driver.findElement(By.css('h3')).getText().then(text => {
            return text
        })
        
        await assert.strictEqual(await title, 'Aktuelle Nachrichten')
    }

    async openSearch() {
        await driver.findElement(By.className('search-toggle-container')).click()
        await driver.findElement(By.className('search-toggle-container')).click()
    }

    async retrunHome() {
        await driver.findElement(By.linkText('Home')).click()
    }

    async changeCoin (verify) {
        await driver.findElement(By.className('lang-select')).click()
        await driver.findElement(By.xpath('//*[@id="a"]/li[3]')).click()
        await driver.findElement(By.id('listbutton')).click()

        const button =  driver.findElement(By.xpath('//*[@id="page-518"]/div/div/div[2]')).getText().then(text => {
            return text
        })
        assert.equal(await button, verify)
    }

    } module.exports = new BaseFuntions()