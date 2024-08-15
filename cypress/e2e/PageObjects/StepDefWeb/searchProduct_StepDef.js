import { Then } from "cypress-cucumber-preprocessor/steps";


Then('expected to view the searched product', () => {
    cy.get('[data-ng-src="/catalog/fetchImage?image_id=2201"]')
        .should('be.visible')
        .click({ force: true });

    cy.get('button[name="save_to_cart"]')
        .should('be.visible')
        .click({ force: true });
});