

import {test,expect} from '@playwright/test'
import { HomePage} from '../pages/homePage'
import { LoginPage } from '../pages/loginPage'
import {MyAccountPage} from '../pages/MyAccountPage'
import { testConfig } from '../test.config'

let homePage:HomePage;
let loginPage:LoginPage;
let accountPage:MyAccountPage;


test.beforeEach('Before Each', async({page})=>{
     await page.goto(testConfig.baseURL)
     homePage=new HomePage(page)
     loginPage=new LoginPage(page)
     accountPage=new MyAccountPage(page)

     
})

test.describe('Authentication', ()=>{
    test('Login @smoke @regression', async({page})=>{
    //Navigate to Login page via Home page

    await homePage.clickMyAccount();
    await homePage.clickLogin();

    //Enter valid credentials and log in
    await loginPage.setEmail(testConfig.username);
    await loginPage.setPwd(testConfig.password);
    await loginPage.clickLoginBtn();

    //alternatevly
    //await pageObject.loginPage.login(testConfig.username, testConfig.password);

    //Verify successful login by checking 'My Account' page presence
    const isLoggedIn=await accountPage.isMyAccountPageExists();
    expect(isLoggedIn).toBeTruthy();
})


test('Logout @smoke', ()=>{

})


})



//test('')