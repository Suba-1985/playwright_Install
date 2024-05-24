import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
  await page.goto('https://the-internet.herokuapp.com/');
  
  await expect(page.locator('h2')).toContainText('Available Examples');
  await expect(page.getByRole('heading', { name: 'Welcome to the-internet' })).toBeVisible();
  await page.getByRole('link', { name: 'Drag and Drop' }).click();
  await page.locator('#column-a').click();
  await page.locator('#column-a').click();
  await page.locator('#column-a').click();
  await page.getByText('A', { exact: true }).click();
  await page.locator('#column-a').click();
  await page.locator('#column-b').click();
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Digest Authentication' }).click();
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'A/B Testing' }).click();
  await expect(page.getByRole('link', { name: 'Elemental Selenium' })).toBeVisible();
  await expect(page.getByRole('heading')).toContainText('A/B Test');
  await page.waitForTimeout(2000);
});

test('Basic auth', async function({page})
{

  const username = 'admin';
  const password = 'admin';

  // Construct the URL with the username and password
const url = `https://${username}:${password}@the-internet.herokuapp.com/basic_auth`;
page.goto(url);

await page.waitForTimeout(1000);
})



  test('run codegen in terminal', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link', { name: 'A/B Testing' }).click();
    await expect(page.getByRole('heading', { name: 'A/B Test' })).toBeVisible();
    await expect(page.getByRole('paragraph')).toContainText('Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).');
  });




