const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5174/');
  await new Promise(r => setTimeout(r, 2000));
  
  const cards = await page.$$eval('.rounded-r-xl', els => els.map(e => ({ text: e.innerText, rect: e.getBoundingClientRect() })));
  console.log(JSON.stringify(cards, null, 2));
  
  await browser.close();
})();
