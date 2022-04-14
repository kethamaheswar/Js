const puppeteer = require('puppeteer');
const expect = require('chai').expect;

(async ()=>{
    const browser = await puppeteer.launch({headless:false,slowMo:20});
    const page = await browser.newPage();
   // await page.setDefaultTimeout(10000);
    //await page.setDefaultNavigationTimeout(20000);
    await page.goto('http://example.com');
    const title = await page.title();
    const url = await page.url();
    const text = await page.$eval('h1', element =>element.textContent);
    const count = await page.$$eval('p', demo => demo.length);
    
    //Assertion
    expect(title).to.be.a('string','Example Domain');
    expect(url).include('example.com');
    expect(text).to.be.a('string','Example Domain');
    expect(count).equal(2);
    await browser.close();
})();