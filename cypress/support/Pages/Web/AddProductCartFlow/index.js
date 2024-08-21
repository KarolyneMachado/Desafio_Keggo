class AddProductCart {

    visitSite() {
        cy.visit("/");
        cy.wait(7000)
    }

    clickSearchBar(){
        cy.get('#menuSearch').click({ force: true });
        cy.get('#searchSection').invoke('css', 'display', 'block');
    }

    clickImageSearched(){
        cy.get('p.roboto-regular.ng-binding')
        .contains('BEATS STUDIO 2 OVER-EAR MATTE BLACK HEADPHONES')
        .click();
    }

    inputNameProduct(){
        cy.get('#autoComplete').should('be.visible').type('Beats studio 2');

    }

    inputQty(){
        cy.get('input[name="quantity"]')
        .should('be.visible')
        .clear()
        .type('2');
    }

    clickButtonSaveToCart(){
        cy.get('button[name="save_to_cart"]')
        .should('be.visible')
        .click({ force: true }); 
    }

    clickPopUpCheckout(){
        cy.get('#checkOutPopUp')
        .should('be.visible')
        .click({ force: true });
        cy.wait(3000);
    }

    ClickButtonSaveCart() {

        cy.get('button[name="save_to_cart"]')
            .should('be.visible')
            .click({ force: true });
    }
}

export default new AddProductCart();