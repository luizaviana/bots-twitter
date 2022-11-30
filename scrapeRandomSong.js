const scrapeRandomSong = async function () {
    const puppeteer = require('puppeteer')
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.last.fm/user/luizavian/library')

    await page.waitFor(1000);
    await page.screenshot({path: 'R1.png'});

    const selected = Math.floor(Math.random() * (50)) - 1;
    
    const [scrobble] = await page.$x(`//*[@id="mantle_skin"]/div[3]/div/div[1]/section/table/tbody/tr[${selected}]/td[4]/a`);
    scrobble.click();

    await page.waitFor(2000);
    await page.screenshot({path: 'R2.png'});

    const [spotify] = await page.$x(`//*[@id="mantle_skin"]/div[4]/div/div[2]/section[2]/ul/li[2]/a[2]`)
    const link = await spotify.getProperty('href');
    const rawLink = await link.jsonValue();

    browser.close();
    return rawLink;
}

module.exports = scrapeRandomSong();