class Assertions {

    validationLoginSucess() {
        cy.get('.hi-user.containMiniTitle.ng-binding')
            .should('be.visible')
            .and('contain.text', 'Karolyne');
    }

    validationMessageError() {
        cy.get('#signInResultMessage')
            .should('have.text', 'Incorrect user name or password.');
    }

    validationImageSearchedProduct() {
        cy.get('[data-ng-src="/catalog/fetchImage?image_id=2201"]')
            .should('be.visible')
            .click({ force: true });
    }

    validationPaymentScreen() {
        cy.get('#userCart')
            .should('be.visible')

        cy.get('h3.ng-binding')
            .should('be.visible')
            .and('contain.text', 'BEATS STUDIO 2 OVER-EAR MAT...');
    }
}

export default new Assertions();