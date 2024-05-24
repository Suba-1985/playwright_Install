//@ts-check
const { test, expect } = require('@playwright/test');

test('shodow Dom', async function({page})
{
await page.goto('https://the-internet.herokuapp.com/');
await page.getByRole('link',{name:'Shadow DOM'}).click();
await expect(page.url()).toBe('https://the-internet.herokuapp.com/shadowdom');

await expect(page.getByText("Let's have some different text!",{exact:true})).toBeVisible;
await expect(page.locator("ul[slot='my-text']")).toContainText("Let's have some different text!");
await page.waitForTimeout(2000);
page.close();

});

