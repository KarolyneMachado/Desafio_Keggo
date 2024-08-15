import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import '@bahmutov/cy-api'

let endpoint;

Given('that I need to send a Request for {string}', (productName) => {
    endpoint = `/catalog/api/v1/products/search?name=${productName}`;
})

When('send request method get', () => {
    cy.api({
        url: endpoint,
        method: 'GET',
        failOnStatusCode: false
    }).as("getRequestSearch200")
})
Then('expected status code 200 sucess', () => {
    cy.get("@getRequestSearch200").should((response) => {
        expect(response.status).to.eq(200)

        const category = response.body[0];

        expect(category.products).to.exist;
        expect(category.products).to.be.an('array');

        if (category.products) {
            category.products.forEach((product) => {
                expect(product.productName).to.include('Beats Studio 2 Over-Ear Matte Black Headphones');
            });
        }

        Given('that I need to send a Request 404 for {string}', (productName) => {
            endpoint = `/catalo/api/v1/products/search?name=${productName}`;
        })
        
        When('send request method get return code 404', () => {
            cy.api({
                url: endpoint,
                method: 'GET',
                failOnStatusCode: false
            }).as("getRequestSearch404")
        })

        Then('expected status code 404 not found', () => {
            cy.get("@getRequestSearch404").should((response) => {
                expect(response.status).to.eq(404);
            });
        });

        Given('that I need to send a Request 500', () => {
            endpoint = `/catalog/api/v1/products/search?`;
        })

        When('send request method get return code 500', () => {
            cy.api({
                url: endpoint,
                method: 'GET',
                failOnStatusCode: false
            }).as("getRequestSearch500")
        })

        Then('expected status code 500 server error', () => {
            cy.get("@getRequestSearch500").should((response) => {
                expect(response.status).to.eq(500);
            });
        });

    })

})
