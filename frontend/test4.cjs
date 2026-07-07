const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5174/');
  await new Promise(r => setTimeout(r, 2000));
  
  const cards = await page.$$eval('.rounded-r-xl', els => els.map(e => {
    const r = e.getBoundingClientRect();
    return { text: e.innerText, top: r.top, height: r.height, opacity: window.getComputedStyle(e).opacity };
  }));
  console.log('PROBLEM CARDS:', JSON.stringify(cards, null, 2));

  const footerPos = await page.evaluate(() => {
    const f = document.querySelector('footer');
    if (!f) return null;
    const r = f.getBoundingClientRect();
    return { top: r.top, height: r.height };
  });
  console.log('FOOTER POS:', footerPos);
  
  await browser.close();
})();
