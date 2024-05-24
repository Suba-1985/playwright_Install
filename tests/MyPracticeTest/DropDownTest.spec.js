// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('DropDownTest',()=>{
  let page;

  test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://the-internet.herokuapp.com/");
  });

test('DropDownTest',async ()=>{

await page.locator("//ul/li/a[@href='/dropdown']").click();
await page.locator("#dropdown").click(); 
const dropDownOption=page.locator('#dropdown');
await expect(dropDownOption).toHaveCount(2);
await expect(dropDownOption).toHaveText(['Option 1','Option 2']);

await dropDownOption.selectOption('2');
await page.locator("#dropdown").selectOption({value:'1'});
await page.locator("#dropdown").selectOption({index:1});
await dropDownOption.selectOption('Option 1');
await page.locator("#dropdown").selectOption({label:"Option 2"});
const dropDownValues=await page.locator("#dropdown").textContent();
expect(dropDownValues.includes("Option 1")).toBeTruthy;  //validation

//for loop
let value=await page.$("#dropdown");

let values=await value.$$("option");//to get array of  elements matching the specified locator we use $$

for(let v of values)
{
  let optionText= await v.textContent();
if(optionText=="Option 1")
console.log("Value is present");
}
await page.waitForTimeout(1000);
});


test.afterEach(async () => {
    await page.close();
 });

});