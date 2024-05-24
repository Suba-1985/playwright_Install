//@ts-check
const {test,expect,chromium}=require('@playwright/test');

test('Multiple Page Tabs',async function({})
{
  const browser=await chromium.launch();
  const context= await browser.newContext();
  const page=await context.newPage();
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link',{name:'Shadow DOM'}).click();
  await expect(page.url()).toBe('https://the-internet.herokuapp.com/shadowdom');
  await expect(page.getByRole('link',{name:'Elemental Selenium'})).toHaveCount(1);

  const [newPage]=await Promise.all(
    (
     [
  context.waitForEvent("page"),
  await page.getByRole('link',{name:'Elemental Selenium'}).click()
     ]
    )
  );

  await expect(newPage).toHaveTitle('Home | Elemental Selenium');
  await page.waitForTimeout(1000);
  page.close();
})




