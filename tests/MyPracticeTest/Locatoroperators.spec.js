//@ts-check
const {test}=require('@playwright/test');

test('matching inside a locator', async function({page})
{
  await page.goto('https://the-internet.herokuapp.com/');
  
  await page.getByRole('listitem')
  .filter({hasText:  /^Frames$/})
  .filter({hasNotText:/ShadowDom/})
  .getByRole('link',{name:'Frames'})
  .click();

  const parentLocator=await page.locator('#content');
  parentLocator.getByRole('link',{name:'Nested Frames'}).click();

  const frameLocator1=await page.frame({name:'frame-left'});
  const textcnt=frameLocator1?.getByText('LEFT').textContent();
  console.log("The text inside frame :",textcnt);

  await page.waitForTimeout(1000);
  page.close();
});

//const button = page.getByRole('button').and(page.getByTitle('Subscribe'));**Matching two locators simultaneously
//const newEmail = page.getByRole('button', { name: 'New' });
//const dialog = page.getByText('Confirm security settings');
//await expect(newEmail.or(dialog).first()).toBeVisible();
//first(),last(),nth()