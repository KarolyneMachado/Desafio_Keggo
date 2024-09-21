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
        cy.get('p.roboto-regular.ng-binding')
        .contains('BEATS STUDIO 2 OVER-EAR MATTE BLACK HEADPHONES')
        .click();
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