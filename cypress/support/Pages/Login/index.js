beforeEach(() => {
    cy.window().then((win) => {
        win.caches.keys().then((cacheNames) => {
            cacheNames.forEach((cacheName) => {
                win.caches.delete(cacheName);
            });
        });
    });
});
class Login {

    visitSite() {
        cy.visit("/");
        cy.wait(7000)
    }

    clickLogin(){
        cy.get('#menuUserLink').click();
    }

    loginValidCredentials() {
        cy.get('input[name="username"]').type('Karolyne');
        cy.get('input[name="password"]').type('Teste01');

        cy.get('#sign_in_btn').click();
    }

    loginInvalidCredentials() {
        cy.get('input[name="username"]').type('invalid');
        cy.get('input[name="password"]').type('invalid');

        cy.get('#sign_in_btn').click();
    }
}

export default new Login();

