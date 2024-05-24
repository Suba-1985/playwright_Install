// @ts-check
const { test, expect } = require('@playwright/test');

test.use({viewport:{width:1920,height:1080}});

test.skip('MyFirstTest1 @myfirsttest', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
  await expect(page).toHaveTitle(/The Internet/);
});



test.describe('LoginFunctionality', () => {  
  let page;

  test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect.soft(page).toHaveTitle(/OrangeHRM/);
    await expect(page).toHaveURL(/orangehrmlive/);
    await expect(page.getByText("Forgot your password?")).toBeVisible();
  });
  
  test("Login Functionality @LoginValid", async () => { 
    await page.locator("[name='username']").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole('button', { name: /Login/i }).click();    
  });
 
  
  test("Invalid Login @InvalidLogin", async () => {
    await page.locator("[name='username']").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123456");
    await page.getByRole('button', { name: /Login/i }).click();
    await expect.soft(page.getByText("Invalid credentials")).toBeVisible();
    await expect.soft(await (await page.locator("//p[contains(@class,'oxd-text--p oxd-alert-content-text')]")).textContent()).toContain("Invalid credentials");
    await page.waitForTimeout(5000); // Not recommended in real tests; prefer using `await` with assertions or events.
  });

  test.afterEach(async () => {
    await page.close();
  });

});



