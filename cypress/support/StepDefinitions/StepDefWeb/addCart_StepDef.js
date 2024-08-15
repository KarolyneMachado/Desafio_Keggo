import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


Given('Home page is opened', () => {
    cy.visit("/");
    cy.wait(7000)
})

When('Fill in the search field with product', () => {
    cy.get('#menuSearch').click({ force: true });
    cy.get('#searchSection').invoke('css', 'display', 'block');
    cy.get('#autoComplete').should('be.visible').type('Beats studio 2');

})
And('Returns image of the searched product', () => {
    cy.get('[data-ng-src="/catalog/fetchImage?image_id=2201"]')
        .should('be.visible')
        .click({ force: true });

    cy.get('input[name="quantity"]')
        .should('be.visible')
        .clear()
        .type('2');

    cy.get('button[name="save_to_cart"]')
        .should('be.visible')
        .click({ force: true });
})

Then('expected to return checkout popup', () => {
    cy.get('#checkOutPopUp')
        .should('be.visible')
        .click({ force: true });
    cy.wait(3000);

    cy.get('#userCart')
        .should('be.visible')

    cy.get('h3.ng-binding')
        .should('be.visible')
        .and('contain.text', 'BEATS STUDIO 2 OVER-EAR MAT...');
})