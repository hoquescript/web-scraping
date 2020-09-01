const puppeteer = require('puppeteer');

module.exports = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://example.com/');
  await page.screenshot({path: 'example.png'});

  const container = await page.$('body div');
  const body = await page.evaluate(container => container.textContent, container);
  console.log(body)
  await browser.close();
};