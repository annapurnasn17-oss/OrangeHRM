import{test as base} from '@playwright/test'
import{LoginPage} from '../Pages/LoginPage'

export const test=base.extend({


loginpage: async ({page},use)=>{

const loginpage= new LoginPage(page)
await use(loginpage)



}



})
