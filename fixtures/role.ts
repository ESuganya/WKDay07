import {test as base, Page} from '@playwright/test'


type CustomFixture={
    adminUser:Page;
    generalUser:Page

}

export const test=base.extend<CustomFixture>({
    adminUser: async({page}, use)=>{
        await page.goto('https://tutorialsninja.com/demo/')
        //Login steps
        //perform 

        await use(page)


        


    },

    generalUser:async()=>{


    }

})

