const fucntions = require('../pageobject/baseFunctions');
const { before } = require('mocha');


describe('test', () => {
    const url = 'https://kryptoszene.de/'
    const maintitle = 'Kryptoszene.de - die Plattform für Krypto, Trading & Aktien'
    const verifyCoinText = 'JETZT RIPPLE KAUFEN'

    before(async () => {
        await fucntions.loadPage(url)
        await fucntions.verifyPage(maintitle)
    })

    it('Loads up the news pages', async () => {
        await fucntions.goToNews()
    })

    it('Goes to the home page', async () => {
        await fucntions.openSearch()
        await fucntions.retrunHome()
    })

    it('changes the coin', async () => {
        await fucntions.changeCoin(verifyCoinText)
        
    })

    it('stops the driver', () => {
        driver.quit();
    })
})