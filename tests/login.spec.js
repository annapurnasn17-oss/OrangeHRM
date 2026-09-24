import {expect} from'@playwright/test'

import { test } from '../fixtures/baseTest.js';

test("login", async ({page,loginpage})=>{



    
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await loginpage.login('Admin', 'admin123')
   



})