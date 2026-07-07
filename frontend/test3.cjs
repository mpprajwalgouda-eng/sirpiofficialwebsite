const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5174/');
  await new Promise(r => setTimeout(r, 2000));
  const cards = await page.$$eval('.rounded-r-xl', els => els.map(e => {
    const r = e.getBoundingClientRect();
    return { text: e.innerText, top: r.top, height: r.height, opacity: window.getComputedStyle(e).opacity };
  }));
  console.log("PROBLEM CARDS:", JSON.stringify(cards, null, 2));

  const domains = await page.$$eval('div.grid.grid-cols-2.lg\\:grid-cols-4 > div', els => els.map(e => {
    const r = e.getBoundingClientRect();
    return { top: r.top, height: r.height, opacity: window.getComputedStyle(e).opacity };
  }));
  console.log("DOMAINS:", JSON.stringify(domains, null, 2));
  
  await browser.close();
})();
