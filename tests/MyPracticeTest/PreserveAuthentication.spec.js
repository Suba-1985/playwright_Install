//@ts-check
const {test}= require('@playwright/test');
// npx playwright codegen --save-storage=auth.json https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
test('authorization save-storage',async function({page})
  {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('html').click();
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Username').press('Tab');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'client brand banner' }).click();
  });
// npx playwright codegen --load-storage=auth.json https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  test.use({
    storageState: 'auth.json'
  });
  
  test('test loadstorage', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  });

