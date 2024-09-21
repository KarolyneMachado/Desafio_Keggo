import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import RequestProductGET from '../../APIs/getProduct'
import Assertions from '../../APIs/Assertions'
import '@bahmutov/cy-api'

let endpoint;

Given('that I need to send a Request for Beats', () => {
})

When('send request method get', () => {
    RequestProductGET.requestGet();
})

Then('expected status code 200 sucess', () => {
    Assertions.validationStatusCode200();
    Assertions.validationResponse200();
})

Given('that I need to send a Request 404 for NotFound', () => {
})

When('send request method get return code 404', () => {
    RequestProductGET.requestGet400();
})

Then('expected status code 404 not found', () => {
    Assertions.validationStatusCode404();
});

Given('that I need to send a Request 500', () => {
})

When('send request method get return code 500', () => {
    RequestProductGET.requestGet500();
})

Then('expected status code 500 server error', () => {
    Assertions.validationStatusCode500();
});