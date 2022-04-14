const puppeteer = require('puppeteer');

(async () => {
const browser = await puppeteer.launch({headless: false, slowMo:200,});
const page = await browser.newPage();
await page.goto('http://example.com');
await page.waitForTimeout(3000);
await page.screenshot({path:'example.png'});
await page.waitForTimeout(3000);
await page.waitForSelector('h1');
await page.reload();
console.log("my second prg");
await browser.close();

})();