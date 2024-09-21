import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import '@bahmutov/cy-api'
import RequestProductPOST from '../../APIs/postProduct';
import Assertions from '../../APIs/Assertions'

const endpoint = '/catalog/api/v1/product/image/821194126/%23FFFFF/WHITE';
let token;

Given('that I need to send a Request', () => {
})

Given('that I need to send a Request without authorization', () => {
});

When('send request method POST', () => {
    RequestProductPOST.requestPost200();
})

Then('expected code 200 sucess', () => {
    Assertions.validationStatusCode200();
})

When('send request method POST not authorization', () => {
    RequestProductPOST.requestPost401();
})

Then('expected code 401 unauthorized', () => {
    Assertions.validationStatusCode401();
})


When('send request method POST with server error', () => {
    RequestProductPOST.requestPost500();

})

Then('expected code 500 server error', () => {
    Assertions.validationStatusCode500();
    Assertions.validationResponse500();
})

When('send request method POST with product not found', () => {
    RequestProductPOST.requestPost400();
});


Then('expected code 404 not found', () => {
    Assertions.validationStatusCode404();
})