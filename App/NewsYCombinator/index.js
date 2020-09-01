const puppeteer = require('puppeteer');

module.exports = async () => {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.goto('https://news.ycombinator.com/');

  for (let i = 0; i < 5; i++) {
    const data = await page.evaluate(() => {
      return [...document.querySelectorAll('.storylink')].map(el => el.innerText)
    })
    console.log(data)
    
    if(i<5)await page.click('.morelink')
    await page.screenshot({path: `example-${i}.png`});

  }

  await browser.close();
};