import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import AddProductCart from '../../Pages/Web/AddProductCartFlow';
import Assertions from '../../Pages/Web/Assertions'


Given('Home page is opened', () => {
    AddProductCart.visitSite();
})

When('Fill in the search field with product', () => {
    AddProductCart.clickSearchBar();
    AddProductCart.inputNameProduct();
})
And('Returns image of the searched product', () => {
    AddProductCart.clickImageSearched();
    AddProductCart.inputQty();
    AddProductCart.clickButtonSaveToCart();
    AddProductCart.clickPopUpCheckout();
})

Then('expected to return checkout popup', () => {
    Assertions.validationPaymentScreen();
})

Then('expected to view the searched product', () => {
    Assertions.validationImageSearchedProduct();
    AddProductCart.ClickButtonSaveCart();    
});