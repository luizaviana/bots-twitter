const scrapeLastSong = async function () {
    const puppeteer = require('puppeteer')
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.last.fm/user/luizavian/library')

    await page.waitFor(2000);

    const selected = Math.floor(Math.random() * (15));
    
    const [scrobble] = await page.$x(`//*[@id="mantle_skin"]/div[3]/div/div[1]/section/table/tbody/tr[1]/td[4]/a`);
    scrobble.click();

    await page.waitFor(10000);
    await page.screenshot({path: 'L1.png'});

    const [spotify] = await page.$x(`//*[@id="mantle_skin"]/div[4]/div/div[2]/section[2]/ul/li[2]/a[2]`)
    const link = await spotify.getProperty('href');
    const rawLink = await link.jsonValue();

    await page.screenshot({path: 'L2.png'});


    browser.close();
    return "ouvindo esta slk a braba " + rawLink;
}

module.exports = scrapeLastSong();