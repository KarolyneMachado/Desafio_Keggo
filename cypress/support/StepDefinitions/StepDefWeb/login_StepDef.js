import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import Login from '../../Pages/Login';
import Assertions from '../../Pages/Assertions'

Given('Login page', () => {
    Login.visitSite();
    Login.clickLogin();
})

When('login with valid credentials', () => {
    Login.loginValidCredentials();
})

Then('expected to log in sucessfully', () => {
    Assertions.validationLoginSucess();
})
When('login with invalid credentials', () => {
    Login.loginInvalidCredentials();
})
Then('expected to return an error message', () => {
    Assertions.validationMessageError();
})