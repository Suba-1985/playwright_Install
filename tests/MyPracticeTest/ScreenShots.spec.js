//@ts-check
const { test, expect } = require('@playwright/test');


test('Take screenshot in playwright', async({page}) =>{
  // Go to URL
  await page.goto('https://the-internet.herokuapp.com/')

  // element screenshot
  await page.locator('.heading').screenshot({path:'./screenshots/headingElement.png'})

  // page screenshot
  await page.screenshot({path:'./screenshots/page.png'});

  // full page screenshot
  await page.screenshot({path:'./screenshots/fullpage.png',fullPage : true});

  await page.waitForTimeout(1000);

  await page.close();

})