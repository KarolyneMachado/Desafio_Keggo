describe('Validating Login', () => {
  beforeEach(() => {
    cy.visit('https://advantageonlineshopping.com/#/');
    cy.get('#menuUserLink').click();
  });

  it('login with valid credentials', () => {
    cy.get('input[name="username"]').type('Karolyne');
    cy.get('input[name="password"]').type('Teste01');

    cy.get('#sign_in_btn').click();

    cy.get('.hi-user.containMiniTitle.ng-binding')
    .should('be.visible')
    .and('contain.text', 'Karolyne');
  });

  it('login with invalid credentials', () => {
    cy.get('input[name="username"]').type('invalid');
    cy.get('input[name="password"]').type('invalid');

    cy.get('#sign_in_btn').click();

    cy.get('#signInResultMessage')
      .should('have.text', 'Incorrect user name or password.');


  });
});
