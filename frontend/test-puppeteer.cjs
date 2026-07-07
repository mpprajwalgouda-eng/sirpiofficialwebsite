const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

  await page.goto('http://localhost:5174/');
  await new Promise(r => setTimeout(r, 2000));
  
  // Dump the text of the pain cards
  const cards = await page.$$eval('.pain-card, .rounded-r-xl', els => els.map(e => e.innerText));
  console.log("CARDS FOUND:", cards.length);
  
  await browser.close();
})();
