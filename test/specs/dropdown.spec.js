const DropdownPage = require('../pageobjects/dropdown.page');


describe('My Dropdown Page', () => {
    describe('To select option 1, my dropdown menu...', () => {
        it ('...should be clickable', async () => {
            await DropdownPage.open();
            await (DropdownPage.dropdownMenu).click();
        });
        it ('...should present an option 1 option', async () => {
            await (DropdownPage.optionOne).waitForDisplayed ({timeout: 2000});
        });
        it ('...should click option 1', async () => {
            await (DropdownPage.optionOne).click();
        });
        it ('...should show option 1 as selected', async () => {
            await (DropdownPage.optionOne).waitForDisplayed({timeout: 2000});
        });
    });
    describe('To select option 2, my dropdown menu...', () => {
        it ('...should be clickable', async () => {
            await DropdownPage.open();
            await (DropdownPage.dropdownMenu).click();
        });
        it ('...should present an option 2 option', async () => {
            await (DropdownPage.optionTwo).waitForDisplayed ({timeout: 2000});
        });
        it ('...should click option 2', async () => {
            await (DropdownPage.optionTwo).click();
        });
        it ('...should show option 2 as selected', async () => {
            await (DropdownPage.optionTwo).waitForDisplayed({timeout: 2000});
        });
    });
});
