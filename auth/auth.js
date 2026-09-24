import{ test as setup } from '@playwright/test'

setup("authfile", async({page})=>
{

 await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
 await page.getByPlaceholder("Username").fill("Admin")
 await page.getByPlaceholder("Password").fill("admin123")
 await page.locator("button[type='submit']").click()

 await page.context().storageState({
    path:'  auth/user.json'
 })

})