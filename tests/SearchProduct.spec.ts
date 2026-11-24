import {expect} from '@playwright/test'
import { HomePage} from '../pages/homePage'
import { LoginPage } from '../pages/loginPage'
import { SearchResultsPage } from '../pages/SearchResultsPage';
import {test} from '../fixtures/role'



let homepage:HomePage;
let loginpage:LoginPage;
let searchResultPage:SearchResultsPage;

test.beforeEach('Before Each', async({page})=>{

    //await page.goto('https://tutorialsninja.com/demo/')
    homepage=new HomePage(page);
    loginpage=new LoginPage(page);
    searchResultPage=new SearchResultsPage(page);
})

test.describe('Product Search', () => {
test('Search for existiing product @regression',{}, async ({adminUser}) => {
  
    const productName = "MacBook";

  // Step 2 & 3: Enter product name and click Search
  await homepage.enterProductName(productName);
  await homepage.clickSearch();

  // Step 4: Verify that the search results page is displayed
  expect(await searchResultPage.isSearchResultsPageExists()).toBeTruthy();

  // Step 5: Validate if the searched product appears in results
  const isProductFound = await searchResultPage.isProductExist(productName);
  expect(isProductFound).toBeTruthy();

});


    test('Select searched product', async ({ generalUser }) => {
        // selectProduct()
    });

    test('Search for non-existing product', async ({ page }) => {
        // verify product is not available
    });

    test('Search with partial product name', async ({ page }) => {
        // e.g. "Lap" → Laptop
})

})