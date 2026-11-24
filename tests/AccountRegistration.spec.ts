

import {test,expect} from '@playwright/test'
import { HomePage} from '../pages/homePage'
import { RegistrationPage } from '../pages/RegistrationPage'
import { RandomDataUtil } from '../utils/randomDataGenerator';

let homePage:HomePage;
let registrationPage:RegistrationPage;


test.beforeEach('Before Each', async({page})=>{
     await page.goto(testConfig.baseURL)
     homePage=new HomePage(page)
    registrationPage=new RegistrationPage(page)
     
})


test('User registration test @master @sanity @regression', async () => {

    //Go to 'My Account' and click 'Register'

    await homePage.clickMyAccount();
    await homePage.clickRegister();

    //Fill in registration details with random data
    await registrationPage.setFirstName(RandomDataUtil.getFirstName());
    await registrationPage.setLastName(RandomDataUtil.getlastName());
    await registrationPage.setEmail(RandomDataUtil.getEmail());
    await registrationPage.setTelephone(RandomDataUtil.getPhoneNumber());

    const password = RandomDataUtil.getPassword();
    await registrationPage.setPassword(password);
    await registrationPage.setConfirmPassword(password);

    await registrationPage.setPrivacyPolicy();
    await registrationPage.clickContinue();

    //Validate the confirmation message
    const confirmationMsg = await registrationPage.getConfirmationMsg();
    expect(confirmationMsg).toContain('Your Account Has Been Created!')


})
