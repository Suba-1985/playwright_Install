//@ts-check
const {test,chromium}=require('@playwright/test');
test('keyboard actions', async function()
{
const browser=await chromium.launch();
const context= await browser.newContext();
const page=await context.newPage();
await page.goto('https://testpages.eviltester.com/styled/basic-html-form-test.html');
const textarea=page.getByText('Comments...');
await textarea?.press("Control+a");
await textarea.press("Backspace");
await textarea.press("a+b+c");
await textarea.press("Control+a+x");
await page.waitForTimeout(1000);
});