//@ts-check
const { test, expect,chromium } = require('@playwright/test');

test('Page/Window handles @window', async() =>{
const browser=await chromium.launch();
const context = await browser.newContext();

// Create a page.
const page = await context.newPage();

// Navigate explicitly, similar to entering a URL in the browser.
await page.goto('https://the-internet.herokuapp.com/');

//Navigate to other URl
await page.getByText(/Hovers/).click();

// Expect a new url.
console.log(page.url());
page.close();
//context.close();
});


test('Multiple Pages', async()=>{
  const browser=await chromium.launch();
  const context=await browser.newContext();

  const page1=await context.newPage();
  const page2=await context.newPage();

  const allPages=context.pages();
  console.log("No. of pages :" +allPages.length);
  page1.close();
  page2.close();
  context.close();
});


test('handling multiple pages',async()=>{
  const browser=await chromium.launch();
  const context= await browser.newContext();
  const page1=await context.newPage();
  await page1.goto('https://www.google.com/');
  const page2=await context.newPage();
  await page2.goto('https://the-internet.herokuapp.com/');
  expect(page2.url()).not.toBe(page1.url());
  page1.close();
  page2.close();
});

test('handling multiple tabs',async()=>{
  const browser=await chromium.launch();
  const context= await browser.newContext();
  const page1=await context.newPage();
  await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
  const pagePromise=context.waitForEvent('page');
  await page1.getByRole('link',{name:'OrangeHRM, Inc'}).click();

  const newPage=await pagePromise;
  await expect(newPage).toHaveTitle('Human Resources Management Software | OrangeHRM');

  await page1.waitForTimeout(1000);
  
  
  page1.close();
 
});