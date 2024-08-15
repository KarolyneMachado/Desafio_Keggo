import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('Login page', () => {
    cy.visit("/");
    cy.wait(7000)
    cy.get('#menuUserLink').click();
})

When('login with valid credentials', () => {
    cy.get('input[name="username"]').type('Karolyne');
    cy.get('input[name="password"]').type('Teste01');

    cy.get('#sign_in_btn').click();
})
Then('expected to log in sucessfully', () => {
    cy.get('.hi-user.containMiniTitle.ng-binding')
        .should('be.visible')
        .and('contain.text', 'Karolyne');
})
When('login with invalid credentials', () => {
    cy.get('input[name="username"]').type('invalid');
    cy.get('input[name="password"]').type('invalid');

    cy.get('#sign_in_btn').click();
})
Then('expected to return an error message', () => {
    cy.get('#signInResultMessage')
        .should('have.text', 'Incorrect user name or password.');
})