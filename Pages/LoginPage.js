

export class LoginPage{

     constructor(page)
     {
        this.page=page;
        this.Username= page.getByPlaceholder('Username')
        this.Password= page.getByPlaceholder('Password')
        this.Login= page.locator("button[type='submit']")
     }

     async login(Username,Password)
     {
        await this.Username.fill(Username)
        await this.Password.fill(Password)
        await this.Login.click()
     }
}