//@ts-check
const {test} = require('@playwright/test');

test('frames',async function({page})
{
  // await page.goto('https://the-internet.herokuapp.com/');
  // await page.getByRole('listitem')
  // .filter({hasText:  /^Frames$/})
  // .filter({hasNotText:/ShadowDom/})
  // .getByRole('link',{name:'Frames'})
  // .click();
  await page.goto('https://the-internet.herokuapp.com/nested_frames');
  // const frameLeft = await page.frame({ name: 'frame-left' });

  // if (frameLeft) {
  //   // Step 4: Access the content of the frame and extract the text
  //   const textContent = await frameLeft.textContent('body');
  //   console.log('Inner text of left frame =', textContent);
  // } else {
  //   console.log('Frame not found');
  // }
   // Close the browser
   
 













  // // const leftFrame=frameL.frameLocator('//frame[@name='frame-left']');
  // // const lName=leftFrame.locator('/html/body').textContent;
  // // console.log("Inner text of left frame= ",lName);

  // // Step 3: Locate the frame using its name
  // const frameLeft = frameL.frame({ name: 'frame-left' });

  // if (frameLeft) {
  //   // Step 4: Access the content of the frame and extract the text
  //   const textContent = await frameLeft.textContent('body');
  //   console.log(textContent);  // Output the text content
  // } else {
  //   console.log('Frame not found');
  // }
});


test.only('frames in letcode website ', async function({page})
{
  await page.goto('https://letcode.in/frame');
  const mainFrame=await page.frameLocator("[name='firstFr']");
  mainFrame.locator("[name='fname']").fill('Suba');;
  mainFrame.locator("[name='lname']").fill('Suba');

  const childFrame=await mainFrame.frameLocator("[class='has-background-white']");
  childFrame.locator("[name='email']").fill('suba@getMaxListeners.com');
  await page.waitForTimeout(1000);
});

test('Frames from w3School', async function({page})
{
  await page.goto('https://ui.vision/demo/webte       st/frames/');
 // const mainFrame=await page.frameLocator('[rows="150px,450px,*"]');
  const childFrame1=await page.frameLocator('[src="frame_1.html"]')
  await childFrame1?.locator("[name='mytext1']").fill("frame1");
  //await page.waitForTimeout(1000);

  const childFrame2=await page.frameLocator('[src="frame_2.html"]');
  await childFrame2?.locator("[name='mytext2']").fill("frame2");


  const childFrame4=await page.frameLocator('[src="frame_4.html"]');
  await childFrame4?.locator("[name='mytext4']").fill("frame4");
  await page.waitForTimeout(1000); 
  

});