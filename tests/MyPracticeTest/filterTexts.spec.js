//@ts-check
const {test,expect}=require('@playwright/test');
test('filter Texts',async function({page})
{
  await page.goto('https://the-internet.herokuapp.com/');
  
//has, hasnot,hasText,hasNotText
const headerName=await page.locator('#content')
          .filter({has:page.getByRole('heading',{name:'Welcome to the-internet'})})
          .getByRole('heading',{name:'Available Examples'}).textContent();
          console.log("The Heading is:",headerName);


  await page.getByRole('listitem')
            .filter({hasText:  /^Frames$/})
            .filter({hasNotText:/ShadowDom/})
            .getByRole('link',{name:'Frames'})
            .click();



await page.waitForTimeout(1000);
            page.close();
});