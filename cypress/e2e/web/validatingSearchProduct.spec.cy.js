describe('Test Search Product', () => {
  
    it('Search for a product and validate the return', () => {
      // Acessa a página principal
      cy.visit('https://advantageonlineshopping.com/#/');
  
      // Força o clique no elemento, mesmo que ele não esteja visível
      cy.get('#menuSearch').click({ force: true });
  
      // Força a visibilidade do contêiner
      cy.get('#searchSection').invoke('css', 'display', 'block');
  
      // Verifica se o campo de pesquisa está visível após o clique
      cy.get('#autoComplete').should('be.visible').type('Beats studio 2');

      // Aguarda até que a imagem com o atributo específico esteja visível e clica nela
    cy.get('[data-ng-src="/catalog/fetchImage?image_id=2201"]')
    .should('be.visible') // Garante que o elemento está visível
    .click({ force: true });
    });
  
  });
  
  